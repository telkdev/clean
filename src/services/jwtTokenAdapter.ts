import { JwtTokenService, TokenContent } from "@/application/ports/jwtToken";
import CONSTANTS from "@/constants";

export function useJwtToken(): JwtTokenService {
  return {
    getToken(): string {
      return localStorage.getItem(CONSTANTS.AUTH_TOKEN) ?? "";
    },
    getRefreshToken(): string {
      return localStorage.getItem(CONSTANTS.AUTH_REFRESH_TOKEN) ?? "";
    },
    setToken(token: string): void {
      localStorage.setItem(CONSTANTS.AUTH_TOKEN, token);
    },
    setRefreshToken(token: string): void {
      localStorage.setItem(CONSTANTS.AUTH_REFRESH_TOKEN, token);
    },
    removeToken(): void {
      localStorage.removeItem(CONSTANTS.AUTH_TOKEN);
    },
    removeRefreshToken(): void {
      localStorage.removeItem(CONSTANTS.AUTH_REFRESH_TOKEN);
    },
    getTokenContent(token): TokenContent | undefined {
      if (!token) {
        return;
      }

      const base64Url = token.split(".")[1];

      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    },
  };
}
