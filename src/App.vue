<script lang="ts">
import { defineComponent, defineAsyncComponent, watch, onMounted } from "vue";

import { useRoute, useRouter } from "vue-router";
import { useHelperUtils } from "@/composables/useHelperUtils";

import { popupVariantsEnum } from "@/enums/popupEnum";

import { usePopup } from "@/services/popupAdapterVue";

import AppLayout from "@/layouts/AppLayout.vue";
import { NotificationService } from "./application/ports/notificationVue";
import { useNotifier } from "./services/notificationAdapterVue";
import { authenticationContainer } from "./services/containers/authenticationContainer";

export default defineComponent({
  components: {
    "app-layout": AppLayout,
    "base-notifications": defineAsyncComponent(
      () => import("@/components/base/BaseNotifications.vue")
    ),
    "auth-login": defineAsyncComponent(
      () => import("@/components/auth/AuthLogin.vue")
    ),
    "auth-sign-up": defineAsyncComponent(
      () => import("@/components/auth/AuthSignUp.vue")
    ),
    "password-recovery-first-step": defineAsyncComponent(
      () => import("@/components/auth/PasswordRecoveryFirstStep.vue")
    ),
    "password-recovery-second-step": defineAsyncComponent(
      () => import("@/components/auth/PasswordRecoverySecondStep.vue")
    ),
    "terms-and-conditions": defineAsyncComponent(
      () => import("@/components/info/TermsAndConditions.vue")
    ),
    "cookie-agreement": defineAsyncComponent(
      () => import("@/components/info/CookieAgreement.vue")
    ),
    "contact-us": defineAsyncComponent(
      () => import("@/components/contact-us/ContactUs.vue")
    ),
    "order-wrapper": defineAsyncComponent(
      () => import("@/components/order/OrderWrapper.vue")
    ),
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const authenticationService = authenticationContainer();

    const authentication = authenticationService();

    const { isFromEnum } = useHelperUtils();

    const { messagesArray }: NotificationService = useNotifier();
    const { isPopupOpened, openPopup, activePopup } = usePopup();

    // Replace all logic with auth to separate file
    onMounted(async () => {
      await router.isReady();
      
      if (route.query.activateToken) {
        const token = route.query.activateToken.toString();
        await authentication.handleConfirmEmail(token);
      }
    });

    watch(
      () => route.query.popupName,
      (newVal) => {
        if (newVal && isFromEnum(newVal, popupVariantsEnum)) {
          openPopup(newVal as popupVariantsEnum);
        }
      }
    );

    return {
      isPopupOpened,
      activePopup,
      popupVariantsEnum,
      messagesArray,
    };
  },
});
</script>

<template>
  <app-layout />

  <!-- Root components -->
  <base-notifications v-if="messagesArray && messagesArray.length" />
  <cookie-agreement />

  <!-- Popups -->
  <auth-login v-if="activePopup === popupVariantsEnum.Login" />
  <auth-sign-up v-if="activePopup === popupVariantsEnum.SignUp" />
  <password-recovery-first-step
    v-if="activePopup === popupVariantsEnum.PasswordRecoveryFirstStep"
  />
  <password-recovery-second-step
    v-if="activePopup === popupVariantsEnum.PasswordRecoverySecondStep"
  />
  <terms-and-conditions
    v-if="activePopup === popupVariantsEnum.TermsAndConditions"
  />
  <contact-us v-if="activePopup === popupVariantsEnum.ContactUs" />
  <order-wrapper v-if="activePopup === popupVariantsEnum.OrderMethod" />
</template>
