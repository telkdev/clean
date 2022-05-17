/* eslint-disable no-unused-vars */
import { UserName, Email, Password } from "@/types/commonTypes";

import { User } from "@/domain/user";
// Ports were added to tell otside layers what inner layers need from them using interfaces;
export interface AuthenticationService {
  register(signUpInfo: SignUpInfo): Promise<Partial<User>>;
  login(loginInfo: LoginInfo): Promise<UserData>;
  logout(): Promise<void>;
  confirmEmail(token: string): Promise<void>;
  restorePasswordFirstStep(passwordRecoveryFirstStepData: PasswordRecoveryFirstStepData): void;
  restorePasswordSecondStep(passwordRecoverySecondStepData: PasswordRecoverySecondStepData): Promise<any>;
}

// need dto
export interface UserData {
  id: string;
  email: string;
  userName: string;
  token: string;
  refreshToken: string;
  roles: string[];
}

export interface SignUpInfo extends Record<string, unknown> {
  username: UserName;
  email: Email;
  password: Password;
}

export interface LoginInfo extends Record<string, unknown> {
  login: Email;
  password: Password;
}

export interface PasswordRecoveryFirstStepData {
  email: Email;
}

export interface PasswordRecoverySecondStepData {
  emailToken: string;
  password: Password;
  passwordRepeating: Password;
}
