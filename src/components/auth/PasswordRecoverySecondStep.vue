<script lang="ts">
import { defineComponent, reactive } from "vue";
// TODO: add only used fields;
import * as yup from "yup";

import { PopupService } from "@/application/ports/popupVue";

import { PasswordRecoverySecondStepData } from "@/application/ports/auth";

import { usePopup } from "@/services/popupAdapterVue";
import { authenticationContainer } from "@/services/containers/authenticationContainer";

import BasePopup from "@/components/base/BasePopup.vue";

import FormWrapper from "@/components/utils/FormWrapper.vue";
import FormField from "@/components/utils/FormField.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    "base-popup": BasePopup,
    "form-wrapper": FormWrapper,
    "form-field": FormField,
  },
  setup() {
    const route = useRoute();

    const popup: PopupService = usePopup();

    const authenticationService = authenticationContainer();
    const authentication = authenticationService();

    // todo: add check for token;
    const passwordRecoveryData: PasswordRecoverySecondStepData = reactive({
      password: "",
      passwordRepeating: "",
      emailToken: route.query.token?.toString() || "",
    });

    function handleSubmit() {
      authentication.restorePasswordSecondStep(passwordRecoveryData);
    }

    return {
      activePopup: popup.activePopup,
      handleSubmit,
      yup,
      passwordRecoveryData,
    };
  },
});
</script>

<template>
  <base-popup>
    <!-- Content -->
    <div class="py-4 px-10 md:px-12">
      <div class="text-center mb-4 md:mb-5">
        <h2 class="text-black text-base font-medium mb-1 md:text-2xl md:mb-2">
          Password recovery!
        </h2>
        <p class="text-black text-xs md:text-base font-comfortaa">
          A link with password recovery will be sent to your email.
        </p>
      </div>
      <form-wrapper
        :submit-button-text="'Send'"
        class="flex flex-col items-center"
        @handle-form-submit="handleSubmit"
      >
        <form-field
          :name="'password'"
          :label="'New password'"
          :input-type="'password'"
          :model-value="passwordRecoveryData.password"
          :is-required="true"
          class="w-full mb-4"
          :rules="
            yup
              .string()
              .required()
              .min(8)
              .matches(/[a-z]+/, 'Add at least one lowercase character')
              .matches(/[A-Z]+/, 'Add at least one uppercase character')
              .matches(/[@$!%*#?&]+/, 'Add at least one special character')
              .matches(/\d+/, 'Add at least one number')
          "
          @update:model-value="
            (newValue) => (passwordRecoveryData.password = newValue)
          "
        />
        <form-field
          :name="'passwordRepeating'"
          :label="'Confirm new password'"
          :input-type="'password'"
          :is-required="true"
          :model-value="passwordRecoveryData.passwordRepeating"
          class="w-full mb-4"
          :rules="
            yup
              .string()
              .required()
              .oneOf(
                [passwordRecoveryData.password, null],
                'Password and Confirm password fields should be the same'
              )
              .min(8)
              .matches(/[a-z]+/, 'Add at least one lowercase character')
              .matches(/[A-Z]+/, 'Add at least one uppercase character')
              .matches(/[@$!%*#?&]+/, 'Add at least one special character')
              .matches(/\d+/, 'Add at least one number')
          "
          @update:model-value="
            (newValue) => (passwordRecoveryData.passwordRepeating = newValue)
          "
        />
      </form-wrapper>
    </div>
  </base-popup>
</template>
