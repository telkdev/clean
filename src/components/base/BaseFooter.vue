<script lang="ts">
import { defineComponent } from "vue";

import { popupVariantsEnum } from "@/enums/popupEnum";

import { usePopup } from "@/services/popupAdapterVue";

import BaseLogo from "@/components/base/BaseLogo.vue";
import BaseContacts from "@/components/base/BaseContacts.vue";

export default defineComponent({
  components: {
    "base-logo": BaseLogo,
    "base-contacts": BaseContacts,
  },
  setup() {
    const { openPopup } = usePopup();

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
      {
        name: "Privacy policy",
        url: "/privacy-policy",
      },
      {
        name: "Terms & Conditions",
        url: "/terms-conditions",
      },
    ];

    return { navigationArray, openPopup };
  },
});
</script>

<template>
  <footer class="bg-footer bg-cover">
    <div
      class="container mx-auto py-3 md:py-4 px-2 md:px-4 flex flex-col items-center"
    >
      <base-logo class="mb-5" />

      <!-- TODO: add title depending on hierarchy -->
      <p
        class="text-base md:text-xl lg:text-2xl text-black font-medium text-center mb-4 md:mb-8 lg:mb-5"
      >
        <span class="block"> Don’t let short term rental </span> rules and
        regulations catch you off guard
      </p>

      <div class="flex items-center md:flex-col gap-4 md:gap-10 mb-5">
        <ul
          class="flex flex-col flex-wrap gap-3 md:gap-x-16 md:flex-row md:justify-center"
        >
          <li v-for="(navItem, index) of navigationArray" :key="index">
            <button
              v-if="navItem.popupName"
              class="font-comfortaa text-black text-xs md:text-base hover:text-lightblue-300"
              @click="openPopup(navItem.popupName)"
            >
              {{ navItem.name }}
            </button>
            <router-link
              v-else
              :to="navItem.url"
              class="font-comfortaa text-black text-xs md:text-base hover:text-lightblue-300"
              >{{ navItem.name }}</router-link
            >
          </li>
        </ul>

        <base-contacts
          class="space-y-4 md:space-y-0 md:space-x-14 md:flex md:items-center"
        />
      </div>

      <p class="font-comfortaa text-black text-xs text-center">
        Copyright © 2022 Short Rules. Invest Informed. All rights reserved.
      </p>
    </div>
  </footer>
</template>
