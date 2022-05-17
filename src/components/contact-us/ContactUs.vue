<script lang="ts">
import { defineComponent, reactive } from "vue";
// TODO: add only used fields;
import * as yup from "yup";

import { popupSizesEnum } from "@/enums/popupEnum";

import { ContactUsInfo } from "@/application/ports/contact-us";
import { PopupService } from "@/application/ports/popupVue";

import { usePopup } from "@/services/popupAdapterVue";

import BaseLogo from "@/components/base/BaseLogo.vue";
import BasePopup from "@/components/base/BasePopup.vue";
import BaseContacts from "@/components/base/BaseContacts.vue";
import FormWrapper from "@/components/utils/FormWrapper.vue";

import FormField from "@/components/utils/FormField.vue";

export default defineComponent({
  components: {
    "base-popup": BasePopup,
    "base-logo": BaseLogo,
    "base-contacts": BaseContacts,
    "form-field": FormField,
    "form-wrapper": FormWrapper,
  },
  setup() {
    const { closePopup }: PopupService = usePopup();

    // ContactUsInfo
    const state: ContactUsInfo = reactive({
      email: "",
      username: "",
      message: "",
      phone: "",
    });

    function handleFormSumit() {
      console.log("submitted");
    }

    return {
      popupSizesEnum,
      handleFormSumit,
      state,
      closePopup,
      yup,
    };
  },
});
</script>

<template>
  <base-popup :popup-size="popupSizesEnum.Large">
    <div
      class="py-4 px-6 flex flex-col items-center md:flex-row-reverse md:pl-14 md:pr-16 lg:pr-32 lg:pl-24 md:py-5 md:gap-20 lg:gap-32 bg-contact-us bg-contain bg-no-repeat"
    >
      <base-logo class="mb-4 md:hidden" @click="closePopup" />

      <div class="w-full mb-4 md:mb-0">
        <div class="text-center mb-4">
          <h2 class="text-base font-medium text-black mb-1 lg:mb-2 md:text-2xl">
            Get in Touch
          </h2>
          <p class="text-darkblue-900 text-xs font-comfortaa">
            Feel free to drop us a line below!
          </p>
        </div>
        <form-wrapper
          :submit-button-text="'Send'"
          class="flex flex-col items-center"
          @handle-form-submit="handleFormSumit"
        >
          <form-field
            :name="'name'"
            :label="'Name'"
            :input-type="'text'"
            :model-value="state.username"
            :is-required="true"
            class="w-full mb-1"
            :rules="yup.string().required()"
            @update:model-value="(newValue) => (state.username = newValue)"
          />

          <form-field
            :name="'email'"
            :label="'Email address'"
            :input-type="'email'"
            :is-required="true"
            :model-value="state.email"
            class="w-full mb-1"
            :rules="yup.string().email().required()"
            @update:model-value="(newValue) => (state.email = newValue)"
          />

          <form-field
            :name="'phoneNumber'"
            :label="'Phone number'"
            :input-type="'tel'"
            :model-value="state.phone"
            :is-required="false"
            class="w-full mb-1"
            :rules="
              yup
                .string()
                .matches(
                  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                  'Please, enter valid phone number, like 720288-1231'
                )
            "
            @update:model-value="(newValue) => (state.phone = newValue)"
          />

          <form-field
            :name="'message'"
            :label="'Typing your massage here...'"
            :input-type="'text'"
            :model-value="state.message"
            :is-textarea="true"
            :is-required="false"
            class="w-full mb-4"
            :rules="yup.string().min(20)"
            @update:model-value="(newValue) => (state.message = newValue)"
          />
        </form-wrapper>
      </div>

      <div class="flex-shrink-0 flex items-center flex-col">
        <base-logo
          class="hidden md:block md:mb-2 lg:mb-9"
          @click="closePopup"
        />

        <img
          src="@/assets/images/contact-us.webp"
          height="219"
          width="250"
          alt="STR contact support"
          class="hidden md:block md:mb-3 lg:mb-10 md:w-[210px] lg:w-[260px]"
        />

        <base-contacts class="space-y-4" />
      </div>
    </div>
  </base-popup>
</template>
