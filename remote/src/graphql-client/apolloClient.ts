import {
  ApolloClient,
  concat,
  fromPromise,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { GraphQLErrorExtensions } from 'graphql';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import Cookie from 'js-cookie';
import { AuthResponse, Mutation } from 'graphql-client/types/graphql.models';
import { REFRESH_TOKEN } from './auth/refreshToken.graphql';
import { getJwtExpirationDate } from 'helpers/utils/getJwtExpirationDate';
import { OpenToastFunc, useToast } from 'providers/ToastProvider';

interface ExceptionExtensions extends GraphQLErrorExtensions {
  code: string;
  statusCode: number;
  exception: {
    stacktrace: string[];
    className: string;
    code: number;
  };
}

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = new HttpLink({
  uri: process.env.GRAPH_QL_URL || '', // Server URL (must be absolute)
});

const getNewToken = async () => {
  const currentRefreshToken = Cookie.get('refresh-token');
  const response = await apolloClient.mutate<Pick<Mutation, 'refreshToken'>>({
    mutation: REFRESH_TOKEN,
    variables: { refreshToken: currentRefreshToken },
  });
  const responseData = response.data?.refreshToken || ({} as AuthResponse);
  return responseData;
};

let pendingAccessTokenPromise: Promise<AuthResponse> | null = null;

const clearAuthAndRedirect = () => {
  Cookie.remove('token');
  Cookie.remove('user');
  Cookie.remove('refresh-token');
  location.href = '/login';
};

const errorLink = (openToast: OpenToastFunc | null) =>
  onError(
    // remove below line and use operation and forward or remove them
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors && graphQLErrors.length && typeof window !== 'undefined') {
        if (
          (graphQLErrors[0].extensions as ExceptionExtensions).statusCode === 401 ||
          (graphQLErrors[0].extensions as ExceptionExtensions).exception?.code === 401
        ) {
          if (Cookie.get('refresh-token')) {
            // try to refresh the token
            if (!pendingAccessTokenPromise) {
              pendingAccessTokenPromise = getNewToken()
                .catch((e) => {
                  if (openToast)
                    openToast(`[Refresh Token Error]: ${e?.message || ''}`, { type: 'error' });
                  clearAuthAndRedirect();
                  return {} as AuthResponse;
                })
                .finally(() => (pendingAccessTokenPromise = null));
            }

            return fromPromise(pendingAccessTokenPromise)
              .filter((auth) => !!auth?.accessToken && !!auth?.refreshToken && !!auth?.userId)
              .flatMap((auth) => {
                if (auth.accessToken !== Cookie.get('token')) {
                  const tokenExpDate = getJwtExpirationDate(auth?.accessToken);
                  Cookie.set('token', auth.accessToken || '', { expires: tokenExpDate });
                  const refreshTokenExpDate = getJwtExpirationDate(auth?.refreshToken);
                  Cookie.set('refresh-token', auth.refreshToken || '', {
                    expires: refreshTokenExpDate,
                  });
                  Cookie.set('userId', `${auth.userId}`, {
                    expires: refreshTokenExpDate || tokenExpDate,
                  });
                }

                const oldHeaders = operation.getContext().headers;
                // modify the operation context with a new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `Bearer ${auth.accessToken}`,
                  },
                });

                // retry the request, returning the new observable
                return forward(operation);
              });
          } else {
            clearAuthAndRedirect();
          }
        } else if (openToast) {
          openToast(graphQLErrors[0].message, { type: 'error' });
        }
      }

      if (networkError) {
        console.log('[Network error]');
        if (openToast) openToast(`[Network error]: ${networkError || ''}`, { type: 'error' });
      }
    },
  );

const setAuthorizationLink = setContext((_, { headers }) => {
  const token = Cookie.get('token');
  const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};

  return {
    headers: headers ? { ...headers, ...authHeaders } : authHeaders,
  };
});

const createApolloClient = (openToast: OpenToastFunc | null) => {
  return new ApolloClient({
    link: errorLink(openToast).concat(concat(setAuthorizationLink, httpLink)),
    cache: new InMemoryCache({
      typePolicies: {
        DwollaCustomer: {
          merge: true,
        },
      },
    }),
    credentials: 'include',
  });
};

export const initializeApollo = (openToast: OpenToastFunc) => {
  const client = createApolloClient(openToast);

  if (!apolloClient) apolloClient = client;

  return client;
};

export const useApollo = () => {
  const { openToast } = useToast();
  return initializeApollo(openToast);
};
