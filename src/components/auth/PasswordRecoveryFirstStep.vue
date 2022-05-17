<script lang="ts">
import { defineComponent, reactive } from "vue";
// TODO: add only used fields;
import * as yup from "yup";

import { PasswordRecoveryFirstStepData } from "@/application/ports/auth";

import BasePopup from "@/components/base/BasePopup.vue";

import FormWrapper from "@/components/utils/FormWrapper.vue";
import FormField from "@/components/utils/FormField.vue";
import { authenticationContainer } from "@/services/containers/authenticationContainer";

export default defineComponent({
  components: {
    "base-popup": BasePopup,
    "form-wrapper": FormWrapper,
    "form-field": FormField,
  },
  setup() {
    const authenticationService = authenticationContainer();

    const authentication = authenticationService();

    const passwordRecoveryData: PasswordRecoveryFirstStepData = reactive({
      email: "",
    });

    function handleSubmit() {
      authentication.restorePasswordFirstStep(passwordRecoveryData);
    }

    return {
      handleSubmit,
      passwordRecoveryData,
      yup,
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
          :name="'email'"
          :label="'Email address'"
          :input-type="'email'"
          :model-value="passwordRecoveryData.email"
          :is-required="true"
          class="w-full mb-4"
          :rules="yup.string().email().required()"
          @update:model-value="
            (newValue) => (passwordRecoveryData.email = newValue)
          "
        />
      </form-wrapper>
    </div>
  </base-popup>
</template>
