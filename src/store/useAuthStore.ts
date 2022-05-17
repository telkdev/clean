import { RemovableRef, useLocalStorage } from "@vueuse/core";

import { LoginInfo, SignUpInfo } from "@/application/ports/auth";

// state
const loginInfo: LoginInfo = {
  login: "",
  password: "",
};

const signUpInfo: SignUpInfo = {
  username: "",
  email: "",
  password: "",
};

// Returned as ref(with .value);
const loginState = useLocalStorage("loginState", loginInfo);
const signUpState = useLocalStorage("signUpState", signUpInfo);

function deleteLocalStorageState(state: RemovableRef<LoginInfo | SignUpInfo>) {
  Object.keys(state.value).forEach(function (k) {
    (state.value as LoginInfo | SignUpInfo)[k] = "";
  });
}

export default function useAuthStore() {
  return { loginState, signUpState, deleteLocalStorageState };
}
