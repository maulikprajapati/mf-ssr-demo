import jwtDecode, { JwtPayload } from 'jwt-decode';
import { Maybe } from 'graphql-client/types/graphql.models';

export const getJwtExpirationDate = (token?: string | Maybe<string>) => {
  if (!token) {
    return undefined;
  }

  const payload = jwtDecode<JwtPayload>(token);
  if (!payload.exp) {
    return undefined;
  }

  const date = new Date(0);
  date.setUTCSeconds(payload.exp);
  return date;
};
