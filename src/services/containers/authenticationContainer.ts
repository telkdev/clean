// Port that tells how exactly should auth be used
import { Authentication } from "../../application/authentication";

import { useAuth } from "../authAdapter";
import { usePopup } from "../popupAdapterVue";
import { useNotifier } from "../notificationAdapterVue";
import { useJwtToken } from "../jwtTokenAdapter";

// Adapter to add dependencies for class;
export function authenticationContainer() {
  const auth = useAuth();
  const popup = usePopup();
  const notifier = useNotifier();
  const jwtToken = useJwtToken();

  return () => new Authentication({ auth, notifier, popup, jwtToken });
}
