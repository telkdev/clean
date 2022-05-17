<script lang="ts">
import { defineComponent } from "vue";

// TODO: add only used fields;
import * as yup from "yup";

import { popupVariantsEnum } from "@/enums/popupEnum";

import { usePopup } from "@/services/popupAdapterVue";

import useAuthStore from "@/store/useAuthStore";

import BaseLogo from "@/components/base/BaseLogo.vue";
import BasePopup from "@/components/base/BasePopup.vue";
import FormWrapper from "@/components/utils/FormWrapper.vue";
import FormField from "@/components/utils/FormField.vue";

export default defineComponent({
  components: {
    "base-popup": BasePopup,
    "form-wrapper": FormWrapper,
    "form-field": FormField,
    "base-logo": BaseLogo,
  },
  setup() {
    const { openPopup } = usePopup();

    const { signUpState } = useAuthStore();

    const popupLogin = popupVariantsEnum.Login;
    const popupSignUp = popupVariantsEnum.SignUp;
    const popupPasswordRecoveyFirstStep =
      popupVariantsEnum.PasswordRecoveryFirstStep;

    function handleSubmit() {
      openPopup(popupVariantsEnum.TermsAndConditions);
    }

    return {
      openPopup,
      popupLogin,
      popupSignUp,
      popupPasswordRecoveyFirstStep,
      handleSubmit,
      signUpState,
      yup,
    };
  },
});
</script>

<template>
  <base-popup>
    <!-- Header image -->
    <div class="flex min-h-[140px] md:min-h-[150px] bg-popup-sign-up bg-cover">
      <base-logo class="mt-6 mx-auto" />
    </div>
    <!-- Content -->
    <div class="py-4 px-10 md:px-12">
      <div class="text-center mb-4 md:mb-5">
        <h2 class="text-black text-base font-medium mb-1 md:text-2xl md:mb-2">
          Welcome!
        </h2>
      </div>

      <form-wrapper
        :submit-button-text="'Register Now'"
        class="flex flex-col items-center"
        @handle-form-submit="handleSubmit"
      >
        <form-field
          :name="'firstName'"
          :label="'First name'"
          :input-type="'text'"
          :model-value="signUpState.username"
          :is-required="false"
          class="w-full mb-4"
          @update:model-value="(newValue) => (signUpState.username = newValue)"
        />

        <form-field
          :name="'email'"
          :label="'Email address (user login)'"
          :input-type="'email'"
          :model-value="signUpState.email"
          :is-required="true"
          class="w-full mb-4"
          :rules="yup.string().email().required()"
          @update:model-value="(newValue) => (signUpState.email = newValue)"
        />

        <form-field
          :name="'password'"
          :label="'Password'"
          :input-type="'password'"
          :model-value="signUpState.password"
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
          @update:model-value="(newValue) => (signUpState.password = newValue)"
        />

        <div class="w-full flex flex-col gap-2 mb-4 md:mb-5">
          <p class="text-black font-comfortaa text-xs md:text-base">
            Already have an account?
            <button
              type="button"
              class="text-lightblue-500 hover:text-darkblue-900"
              @click="openPopup(popupLogin)"
            >
              Sign In
            </button>
          </p>
        </div>
      </form-wrapper>
    </div>
  </base-popup>
</template>
