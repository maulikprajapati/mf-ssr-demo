import { gql } from '@apollo/client';

export const REFRESH_TOKEN = gql`
  mutation refreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      accessToken
      userId
      refreshToken
    }
  }
`;
