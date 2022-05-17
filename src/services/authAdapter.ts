// Port that tells how exactly should auth be used
import {
  AuthenticationService,
  LoginInfo,
  SignUpInfo,
  PasswordRecoveryFirstStepData,
  PasswordRecoverySecondStepData,
} from "@/application/ports/auth";

import { useApi } from "@/services/apiAdapterVue";
import { useJwtToken } from "@/services/jwtTokenAdapter";

export function useAuth(): AuthenticationService {
  const { post } = useApi();
  const { removeToken, removeRefreshToken, getRefreshToken } = useJwtToken();

  return {
    async register(signUpInfo: SignUpInfo) {
      const res = await post("/api/Users/Register", {
        ...signUpInfo,
      });

      return res.data;
    },
    async login(loginInfo: LoginInfo) {
      const res = await post("/api/Users/Authenticate", {
        ...loginInfo,
      });

      return res.data;
    },
    async logout() {
      const refreshTokenToRemove = getRefreshToken();

      removeToken();
      removeRefreshToken();
      await post("/api/Users/RevokeToken", {
        refreshToken:refreshTokenToRemove,
      });

    },
    async confirmEmail(token: string) {
      await post("/api/Users/ConfirmEmail", { token });
    },
    async restorePasswordFirstStep(
      passwordRecoveryFirstStepData: PasswordRecoveryFirstStepData
    ) {
      const res = await post("/api/Users/RestorePassword", {
        ...passwordRecoveryFirstStepData,
      });

      return res;
    },
    async restorePasswordSecondStep(
      passwordRecoverySecondStepData: PasswordRecoverySecondStepData
    ) {
      const res = await post("/api/Users/ConfirmNewPassword", {
        ...passwordRecoverySecondStepData,
      });

      return res;
    },
  };
}
