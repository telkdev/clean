<script lang="ts">
import { defineComponent } from "vue";

import { buttonTypesEnum } from "@/enums/buttonTypes";
import { popupVariantsEnum } from "@/enums/popupEnum";

import { usePopup } from "@/services/popupAdapterVue";

import { useUserStore } from "@/store/useUserStore";

import ActionButton from "@/components/utils/ActionButton.vue";
import ActionLink from "@/components/utils/ActionLink.vue";

export default defineComponent({
  components: {
    "action-button": ActionButton,
    "action-link": ActionLink,
  },
  setup() {
    const { openPopup } = usePopup();

    const primaryTypeButton = buttonTypesEnum.Primary;

    const { isAuthenticated } = useUserStore();

    return { isAuthenticated, primaryTypeButton, popupVariantsEnum, openPopup };
  },
});
</script>

<template>
  <section>
    <div
      class="container mx-auto md:pl-4 flex flex-col md:flex-row gap-4 lg:gap-6 bg-lightblue-200 rounded-t-3xl md:rounded-t-10xl rounded-bl-3xl md:rounded-bl-10xl justify-between pt-2 lg:pt-5"
    >
      <div class="py-2 px-4 md:py-16 lg:px-20 flex-grow text-center">
        <span
          class="block text-2xl uppercase text-darkblue-800 mb-1 font-semibold md:text-5xl lg:mb-4"
          >Short rule</span
        >
        <h1
          class="text-darkblue-800 font-medium text-sm md:text-base lg:text-2xl mb-8 md:mb-12 lg:mb-16"
        >
          <span class="block"> The most comprehensive collection of </span>
          <span class="text-darkblue-700">
            Short Term Rental Rules & Regulations
          </span>
          in the United States
        </h1>
        <div
          class="flex items-center flex-col md:flex-row gap-4 md:gap-8 justify-center"
        >
          <action-button
            v-if="!isAuthenticated"
            :text="'Get Started'"
            :type="primaryTypeButton"
            @handle-submit="openPopup(popupVariantsEnum.Login)"
          />
          <action-link
            v-else
            :text="'To user profile'"
            :type="primaryTypeButton"
            :path-to="'/profile'"
          />
        </div>
      </div>

      <img
        src="@/assets/images/hero.webp"
        alt="Visual representation of how easily rules for each state could be found"
        width="288"
        height="193"
        class="md:w-[335px] md:h-[309px] lg:w-[389px] lg:h-[359px] self-end"
      />
    </div>
  </section>
</template>
