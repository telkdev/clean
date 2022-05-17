import { notificationTypesEnum } from "@/enums/notificationTypes";
import { popupVariantsEnum } from "@/enums/popupEnum";

import { AuthenticationService } from "./ports/auth";
import { NotificationService } from "./ports/notificationVue";
import { PopupService } from "./ports/popupVue";
import { JwtTokenService } from "./ports/jwtToken";

import {
  LoginInfo,
  SignUpInfo,
  PasswordRecoveryFirstStepData,
  PasswordRecoverySecondStepData,
} from "./ports/auth";

export type AuthDependencies = {
  notifier: NotificationService;
  popup: PopupService;
  auth: AuthenticationService;
  jwtToken: JwtTokenService;
};

export class Authentication {
  private readonly auth;
  private readonly notifier;
  private readonly popup;
  private readonly jwtToken;

  constructor({ auth, notifier, popup, jwtToken }: AuthDependencies) {
    this.auth = auth;
    this.notifier = notifier;
    this.popup = popup;
    this.jwtToken = jwtToken;
  }

  async handleRegister(signUpInfo: SignUpInfo) {
    const userData = await this.auth.register(signUpInfo);

    if (!userData) {
      this.notifier.handleAddNotification({
        text: "Please provide user data",
        type: notificationTypesEnum.Error,
      });

      return;
    }

    this.notifier.handleAddNotification(
      {
        text: "Registered, please confirm your email address",
        type: notificationTypesEnum.Success,
      },
      15000
    );

    this.popup.openPopup(popupVariantsEnum.Login);
  }

  async handleAuthenticate(loginInfo: LoginInfo) {
    const userData = await this.auth.login(loginInfo);

    if (!userData) {
      this.notifier.handleAddNotification({
        text: "Please provide user data",
        type: notificationTypesEnum.Error,
      });

      return;
    }

    // Saving Jwt Token
    this.jwtToken.setToken(userData.token);
    this.jwtToken.setRefreshToken(userData.refreshToken);

    // redirect to profile page ?
    this.notifier.handleAddNotification({
      text: "You have logged in",
      type: notificationTypesEnum.Success,
    });
  }

  async handleConfirmEmail(token: string) {
    await this.auth.confirmEmail(token);

    this.notifier.handleAddNotification({
      text: "You successfully confirmed your email, now you can log in",
      type: notificationTypesEnum.Success,
    });

    this.popup.openPopup(popupVariantsEnum.Login);
  }

  async handleLogout() {
    this.auth.logout();

    this.notifier.handleAddNotification({
      text: "You successfully logged out",
      type: notificationTypesEnum.Success,
    });
  }

  async restorePasswordFirstStep(
    passwordRecoveryFirstStepData: PasswordRecoveryFirstStepData
  ): Promise<void> {
    await this.auth.restorePasswordFirstStep(passwordRecoveryFirstStepData);

    this.popup.closePopup();
    this.notifier.handleAddNotification(
      {
        text: "A link with password recovery sent to your email",
        type: notificationTypesEnum.Success,
      },
      15000
    );
  }

  async restorePasswordSecondStep(
    passwordRecoverySecondStepData: PasswordRecoverySecondStepData
  ): Promise<void> {
    await this.auth.restorePasswordSecondStep(passwordRecoverySecondStepData);

    this.notifier.handleAddNotification({
      text: "Your password has been successfully changed",
      type: notificationTypesEnum.Success,
    });

    this.popup.openPopup(popupVariantsEnum.Login);
  }
}
