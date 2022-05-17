<script lang="ts">
import { defineComponent } from "vue";

import { useLocalStorage } from "@vueuse/core";

import { buttonTypesEnum } from "@/enums/buttonTypes";

import ActionButton from "@/components/utils/ActionButton.vue";
import ActionLink from "@/components/utils/ActionLink.vue";

export default defineComponent({
  components: {
    "action-button": ActionButton,
    "action-link": ActionLink,
  },
  setup() {
    const isUserAcceptedCookiesAgreement = useLocalStorage(
      "isUserAcceptedCookiesAgreement",
      false
    );

    function handleSubmit() {
      isUserAcceptedCookiesAgreement.value = true;
    }
    function handleCancel() {
      isUserAcceptedCookiesAgreement.value = false;
    }

    return {
      handleSubmit,
      handleCancel,
      buttonTypesEnum,
      isUserAcceptedCookiesAgreement,
    };
  },
});
</script>

<template>
  <div
    v-if="!isUserAcceptedCookiesAgreement"
    class="fixed bottom-12 md:bottom-8 lg:bottom-5 left-0 right-0 px-2 md:px-4 z-50"
  >
    <div
      class="container px-3 py-6 md:py-3 lg:px-6 mx-auto bg-gradient-blue-300 rounded-2xl shadow-card border border-lightblue-500 flex flex-col items-center md:flex-row gap-3 md:gap-10 justify-between"
    >
      <div
        class="flex flex-col md:items-start items-center gap-3 max-w-[775px]"
      >
        <div
          class="font-comfortaa flex items-center gap-3 text-2xl text-darkblue-900 font-bold flex-shrink-0"
        >
          <img
            src="@/assets/icons/cookie.svg"
            alt=""
            aria-hidden="true"
            width="27"
            height="27"
          />
          Our Cookie Policy
        </div>
        <p
          class="text-center font-comfortaa md:text-left text-xs lg:text-base text-darkblue-900"
        >
          This site uses cookies and other tracking technologies to assist with
          navigation and your ability to provide feedback, analyse your use of
          our products and services, assist with our promotional and marketing
          efforts, and provide content from third parties.
        </p>
      </div>
      <div
        class="flex-shrink-0 flex gap-3 lg:gap-4 flex-col md:flex-row-reverse w-full items-center md:max-w-max"
      >
        <action-button
          :text="'Accept Cookies'"
          :type="buttonTypesEnum.Primary"
          class="min-w-[150px] md:max-w-[175px] flex-shrink-0"
          @handle-submit="handleSubmit"
        />
        <action-link
          path-to="/cookie-policy"
          :text="'Cookie Policy'"
          :type="buttonTypesEnum.Cancel"
          class="flex-shrink-0 underline"
          @handle-submit="handleCancel"
        />
      </div>
    </div>
  </div>
</template>
