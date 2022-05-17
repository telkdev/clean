<script lang="ts">
import { defineComponent } from "vue";

// TODO: add only used fields;
import * as yup from "yup";

import { PopupService } from "@/application/ports/popupVue";

import { popupVariantsEnum } from "@/enums/popupEnum";

import { usePopup } from "@/services/popupAdapterVue";

import { authenticationContainer } from "../../services/containers/authenticationContainer";

import useAuthStore from "@/store/useAuthStore";

import BaseLogo from "@/components/base/BaseLogo.vue";
import BasePopup from "@/components/base/BasePopup.vue";
import FormWrapper from "@/components/utils/FormWrapper.vue";
import FormField from "@/components/utils/FormField.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    "base-popup": BasePopup,
    "form-wrapper": FormWrapper,
    "form-field": FormField,
    "base-logo": BaseLogo,
  },
  setup() {
    const popup: PopupService = usePopup();

    const router = useRouter();

    const authenticationService = authenticationContainer();

    const authentication = authenticationService();

    const { loginState, deleteLocalStorageState } = useAuthStore();

    async function handleSubmit() {
      try {
        //? Add error handling
        await authentication.handleAuthenticate(loginState.value);
        deleteLocalStorageState(loginState);
        router.push("/profile");
      } catch (err) {
        console.log(err);
      }
    }

    const popupLogin = popupVariantsEnum.Login;
    const popupSignUp = popupVariantsEnum.SignUp;
    const popupPasswordRecoveyFirstStep =
      popupVariantsEnum.PasswordRecoveryFirstStep;

    return {
      activePopup: popup.activePopup,
      openPopup: popup.openPopup,
      closePopup: popup.closePopup,
      popupLogin,
      popupSignUp,
      popupPasswordRecoveyFirstStep,
      handleSubmit,

      loginState,
      yup,
    };
  },
});
</script>

<template>
  <base-popup>
    <!-- Header image -->
    <div class="flex min-h-[140px] md:min-h-[150px] bg-popup-login bg-cover">
      <base-logo class="mt-6 mx-auto" @click="closePopup" />
    </div>
    <!-- Content -->
    <div class="py-4 px-10 md:px-12">
      <div class="text-center mb-4 md:mb-5">
        <h2 class="text-black text-base font-medium mb-1 md:text-2xl md:mb-2">
          Welcome back!
        </h2>
      </div>

      <form-wrapper
        :submit-button-text="'Log In'"
        class="flex flex-col items-center"
        @handle-form-submit="handleSubmit"
      >
        <form-field
          :name="'email'"
          :label="'Email address'"
          :input-type="'email'"
          :model-value="loginState.login"
          :is-required="true"
          class="w-full mb-4"
          :rules="yup.string().email().required()"
          @update:model-value="(newValue) => (loginState.login = newValue)"
        />

        <form-field
          :name="'password'"
          :label="'Password'"
          :input-type="'password'"
          :model-value="loginState.password"
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
          @update:model-value="(newValue) => (loginState.password = newValue)"
        />

        <div class="w-full flex flex-col gap-2 mb-4 md:mb-5">
          <p class="text-black font-comfortaa text-xs md:text-base">
            Forgot your password?
            <button
              type="button"
              class="text-lightblue-500 hover:text-darkblue-900"
              @click="openPopup(popupPasswordRecoveyFirstStep)"
            >
              Restore
            </button>
          </p>
          <p class="text-black font-comfortaa text-xs md:text-base">
            Don't have an account?
            <button
              type="button"
              class="text-lightblue-500 hover:text-darkblue-900"
              @click="openPopup(popupSignUp)"
            >
              Register now
            </button>
          </p>
        </div>
      </form-wrapper>
    </div>
  </base-popup>
</template>
