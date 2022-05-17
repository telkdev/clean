/* eslint-disable no-unused-vars */
import { Ref, ComputedRef } from "vue";

import { popupVariantsEnum } from "@/enums/popupEnum";

export interface PopupService {
  activePopup: Ref<popupVariantsEnum | null>;
  isPopupOpened: ComputedRef<boolean>;
  openPopup(popupName: popupVariantsEnum): void;
  closePopup(): void;
}