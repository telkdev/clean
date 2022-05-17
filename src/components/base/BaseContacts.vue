<script lang="ts">
import { defineComponent } from "vue";

import { useImportAssets } from "@/composables/useImportAssets";

export default defineComponent({
  setup() {
    const { getAssetUrl } = useImportAssets();

    const contactsArray = [
      {
        icon: "phone",
        type: "tel",
        title: "Have a question?",
        contactsData: "(720) 288-1231",
      },
      {
        icon: "mail",
        type: "mailto",
        title: "Contact Us",
        contactsData: "info@shortrule.com",
      },
      {
        icon: "address",
        type: "address",
        title: "Address",
        contactsData: "P.O. Box 461924, Aurora, <br /> CO 80046-1924",
      },
    ];

    return { contactsArray, getAssetUrl };
  },
});
</script>

<template>
  <ul >
    <li
      v-for="(contactsItem, index) of contactsArray"
      :key="index"
      class="flex items-center gap-2 md:gap-3"
    >
      <div class="bg-black rounded-full w-8 h-8 flex md:w-12 md:h-12 shrink-0">
        <img
          :src="getAssetUrl('icon', contactsItem.icon)"
          alt=""
          aria-hidden="true"
          class="w-4 h-4 m-auto md:w-6 md:h-6"
        />
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs font-comfortaa text-black">{{
          contactsItem.title
        }}</span>

        <span
          v-if="contactsItem.type === 'address'"
          class="text-xs font-comfortaa text-black"
          v-html="contactsItem.contactsData"
        >
        </span>

        <a
          v-else
          :href="`${contactsItem.type}:${contactsItem.contactsData}`"
          class="text-xs font-comfortaa text-black hover:text-lightblue-500"
        >
          {{ contactsItem.contactsData }}</a
        >
      </div>
    </li>
  </ul>
</template>
