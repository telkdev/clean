<script lang="ts">
import { defineComponent } from "vue";

import { useLocalStorage } from "@vueuse/core";

import { buttonTypesEnum } from "@/enums/buttonTypes";
import { popupVariantsEnum, popupSizesEnum } from "@/enums/popupEnum";
import { notificationTypesEnum } from "@/enums/notificationTypes";

import { PopupService } from "@/application/ports/popupVue";
import { NotificationService } from "@/application/ports/notificationVue";

import { usePopup } from "@/services/popupAdapterVue";
import { useNotifier } from "@/services/notificationAdapterVue";
import { useApi } from "../../services/apiAdapterVue";

import ActionButton from "@/components/utils/ActionButton.vue";
import BasePopup from "@/components/base/BasePopup.vue";
import { authenticationContainer } from "@/services/containers/authenticationContainer";
import useAuthStore from "@/store/useAuthStore";

export default defineComponent({
  components: {
    "base-popup": BasePopup,
    "action-button": ActionButton,
  },
  setup() {
    const { openPopup }: PopupService = usePopup();
    const { handleAddNotification }: NotificationService = useNotifier();

    const { isLoading } = useApi();

    const popupSignUp = popupVariantsEnum.SignUp;
    const popupSizeLarge = popupSizesEnum.Large;

    const primaryTypeButton = buttonTypesEnum.Primary;

    const isUserAcceptedTermsAndConditions = useLocalStorage(
      "isUserAcceptedTermsAndConditions",
      false
    );

    const authenticationService = authenticationContainer();

    const authentication = authenticationService();

    const { signUpState, deleteLocalStorageState } = useAuthStore();

    async function handleSubmit() {
      if (!isUserAcceptedTermsAndConditions.value) {
        handleAddNotification({
          text: "Please, confirm that you have read terms and conditions of our app.",
          type: notificationTypesEnum.Warning,
        });

        return;
      }

      // TODO: set deleteLocalStorageState, openPopup to be handling with application layer;
      await authentication.handleRegister(signUpState.value).finally(() => {
        deleteLocalStorageState(signUpState);
        isUserAcceptedTermsAndConditions.value = false;
        openPopup(popupSignUp);
      });
    }

    return {
      popupSignUp,
      isLoading,
      primaryTypeButton,
      popupSizeLarge,
      isUserAcceptedTermsAndConditions,
      handleSubmit,
    };
  },
});
</script>

<template>
  <base-popup :popup-size="popupSizeLarge">
    <div class="py-4 px-10 md:px-12">
      <div
        class="text-black text-xs md:text-base font-comfortaa space-y-2 md:space-y-3 mb-4 md:mb-6"
      >
        <p class="before:pl-3">
          Rules (regulations, rules, laws or ordinances) related to short term
          rentals change on a regular basis. We cannot guarantee the accuracy of
          the rules referenced on this website, or provided in the results
          sections. This information is intended to supplement your own
          independent research, and not to be relied on exclusively.
        </p>
        <p class="before:pl-3">
          The information and results provided on this website do not, and are
          not intended to, constitute legal advice and does not create an
          attorney-client relationship; instead, all information, content, and
          materials available on this site are for general informational
          purposes only.
        </p>
        <p class="before:pl-3">
          Readers of this website should contact their attorney to obtain advice
          with respect to any particular legal matter, ordinance, regulation, or
          rule pertaining to a certain city, town, municipality, county, or
          state. No reader, user, or browser of this site should act or refrain
          from acting on the basis of information on this site without first
          seeking legal advice from counsel in the relevant jurisdiction.
        </p>
        <p class="before:pl-3">
          While we do our best to keep the information updated, if you find an
          error, omission, or something that needs an update, please let us
          know.u
        </p>
        <p class="before:pl-3">
          Please see the Terms and Conditions here:
          <router-link
            to="/terms-conditions"
            target="_blank"
            class="text-xs lg:text-base text-lightblue-500 hover:text-darkblue-900 active:text-lightblue-600/60 focus:text-darkblue-600/70 outline-none"
          >
            Link
          </router-link>
        </p>
        <p class="before:pl-3">
          Please see the Privacy Policy here:
          <router-link
            to="/privacy-policy"
            target="_blank"
            class="text-xs lg:text-base text-lightblue-500 hover:text-darkblue-900 active:text-lightblue-600/60 focus:text-darkblue-600/70 outline-none"
          >
            Link
          </router-link>
        </p>
      </div>

      <div class="mb-10 flex md:items-end gap-4">
        <input
          id="confirmTermsAndConditions"
          v-model="isUserAcceptedTermsAndConditions"
          type="checkbox"
          class="form-checkbox cursor-pointer text-lightblue-500 w-5 h-5 md:w-7 md:h-7 border-2 rounded"
        />
        <label
          for="confirmTermsAndConditions"
          class="text-black text-xs md:text-base font-comfortaa cursor-pointer"
        >
          I have opened, read, and agree to the Terms and Conditions and Privacy
          Policy
        </label>
      </div>
      <action-button
        :is-loading="isLoading"
        :text="'Accept'"
        :type="primaryTypeButton"
        class="mx-auto block"
        :is-disabled="!isUserAcceptedTermsAndConditions"
        @click="handleSubmit"
      />
    </div>
  </base-popup>
</template>
