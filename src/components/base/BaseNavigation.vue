<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

import { useHelperUtils } from "@/composables/useHelperUtils";

import { buttonTypesEnum } from "@/enums/buttonTypes";
import { popupVariantsEnum } from "@/enums/popupEnum";

import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { onClickOutside } from "@vueuse/core";

import { usePopup } from "@/services/popupAdapterVue";

import ActionButton from "@/components/utils/ActionButton.vue";
import { useUserStore } from "@/store/useUserStore";
import ActionLink from "../utils/ActionLink.vue";

export default defineComponent({
  components: {
    "action-button": ActionButton,
    ActionLink,
  },
  setup() {
    const route = useRoute();

    const isMenuOpened = ref(false);
    const navigationMenu = ref(null);

    const breakpoints = useBreakpoints(breakpointsTailwind);

    const mdAndLarger = breakpoints.greater("md");
    const { isFromEnum } = useHelperUtils();
    const { openPopup } = usePopup();

    const primaryTypeButton = buttonTypesEnum.Primary;

    const navigationArray = [
      {
        name: "About us",
        url: "/#about",
      },
      {
        name: "FAQ",
        url: "/faq",
      },
      {
        name: "Pricing",
        url: "/pricing",
      },
      {
        name: "Contact Us",
        popupName: popupVariantsEnum.ContactUs,
      },
    ];

    const screenReaderDescription = computed(() =>
      isMenuOpened.value ? "Close main menu" : "Open main menu"
    );

    const isMenuShowingAllowed = computed(
      () => isMenuOpened.value || mdAndLarger.value
    );

    onClickOutside(navigationMenu, () => toggleMenu(false));

    function toggleMenu(openMenu: boolean) {
      isMenuOpened.value = openMenu;
    }

    watch(
      () => route.path,
      () => {
        if (!mdAndLarger.value) toggleMenu(false);
      }
    );

    const { isAuthenticated } = useUserStore();

    return {
      navigationArray,
      isMenuOpened,
      screenReaderDescription,
      isMenuShowingAllowed,
      toggleMenu,
      openPopup,
      navigationMenu,
      popupVariantsEnum,
      primaryTypeButton,
      isFromEnum,
      isAuthenticated,
    };
  },
});
</script>

<template>
  <div
    ref="navigationMenu"
    class="flex justify-end"
    :class="{
      'fixed top-0 right-0 bottom-0 pt-6 pb-10 px-5 bg-lightblue-600/90 flex flex-col items-end min-w-[160px] z-20':
        isMenuOpened,
      'items-center': !isMenuOpened,
    }"
  >
    <button
      class="text-gray-500 w-10 h-10 relative focus:outline-none md:hidden"
      :class="{ 'mb-3': isMenuOpened }"
      @click="toggleMenu(!isMenuOpened)"
    >
      <span class="sr-only">{{ screenReaderDescription }}</span>

      <span
        aria-hidden="true"
        class="block absolute h-1 w-9 transform transition duration-500 ease-in-out rounded bg-darkblue-900"
        :class="{
          'rotate-45 ': isMenuOpened,
          '-translate-y-2': !isMenuOpened,
        }"
      ></span>
      <span
        aria-hidden="true"
        class="block absolute h-1 w-9 transform transition duration-500 ease-in-out rounded bg-darkblue-900"
        :class="{
          'opacity-0': isMenuOpened,
        }"
      ></span>
      <span
        aria-hidden="true"
        class="block absolute h-1 w-9 transform transition duration-500 ease-in-out rounded bg-darkblue-900"
        :class="{
          '-rotate-45 ': isMenuOpened,
          ' translate-y-2 ': !isMenuOpened,
        }"
      ></span>
    </button>

    <div
      v-if="isMenuShowingAllowed"
      class="w-full h-full flex items-center flex-col md:flex-row md:gap-8 md:justify-end lg:justify-between"
    >
      <nav>
        <ul class="flex flex-col gap-8 md:flex-row">
          <li v-for="(navItem, index) of navigationArray" :key="index">
            <button
              v-if="navItem.popupName"
              class="font-comfortaa text-black text-base hover:text-white md:hover:text-darkblue-500"
              @click="openPopup(navItem.popupName)"
            >
              {{ navItem.name }}
            </button>
            <router-link
              v-else
              :to="navItem.url"
              class="font-comfortaa text-black text-base hover:text-white md:hover:text-darkblue-500"
              >{{ navItem.name }}</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="mt-auto">
        <action-button
          v-if="!isAuthenticated"
          :text="'Sign in'"
          :type="primaryTypeButton"
          @handle-submit="openPopup(popupVariantsEnum.Login)"
        />
        <ActionLink
          v-else
          :text="'Profile'"
          :type="primaryTypeButton"
          :path-to="'/profile'"
        />
      </div>
    </div>
  </div>
</template>
