// ?replace
export type TokenContent = {
  aud: string;
  exp: number;
  iat: number;
  id: string;
  iss: string;
  nbf: number;
};

/* eslint-disable no-unused-vars */
export interface JwtTokenService {
  getToken(): string;
  getRefreshToken(): string;
  getTokenContent(token: string): TokenContent | undefined;
  setToken(token: string): void;
  setRefreshToken(token: string): void;
  removeToken(): void;
  removeRefreshToken(): void;
}