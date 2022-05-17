import { PopupService } from "@/application/ports/popupVue";

import { popupVariantsEnum } from "@/enums/popupEnum";

import { ref, computed, Ref } from "vue";

import { useHelperUtils } from "@/composables/useHelperUtils";

const { isFromEnum } = useHelperUtils();

let activePopup: Ref<popupVariantsEnum | null> = ref(null);

let isPopupOpened = computed(() => {
  return activePopup.value && isFromEnum(activePopup.value, popupVariantsEnum)
    ? true
    : false;
});

export function usePopup(): PopupService {
  function openPopup(popupName: popupVariantsEnum) {
    activePopup.value = popupName;
  }

  function closePopup() {
    window.history.replaceState(history.state, "", window.location.pathname);
    activePopup.value = null;
  }

  return {
    activePopup,
    isPopupOpened,
    openPopup,
    closePopup,
  };
}
