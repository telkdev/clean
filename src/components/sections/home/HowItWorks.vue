<script lang="ts">
import { defineComponent } from "vue";

import { useImportAssets } from "@/composables/useImportAssets";

export default defineComponent({
  setup() {
    const { getAssetUrl } = useImportAssets();

    const flowArray = [
      {
        icon: "map-search",
        text: "Search for a State, County or City!",
      },
      {
        icon: "map-money",
        text: "Review the Rules & Regulations & Invest informed!",
      },
    ];

    return { flowArray, getAssetUrl };
  },
});
</script>

<template>
  <section>
    <div class="container mx-auto flex flex-col items-center">
      <h2
        class="text-darkblue-900 font-medium text-base md:text-2xl lg:text-3xl mb-8 md:mb-14"
      >
        How it works?
      </h2>
      <ul class="flex gap-8 md:gap-10">
        <li
          v-for="(flowItem, index) of flowArray"
          :key="index"
          class="border rounded-md border-darkblue-600/50 relative px-2 py-4 md:pt-8 max-w-[100px] md:max-w-[230px] flex"
          :class="{ 'z-10': index === 0 }"
        >
          <span
            class="flex w-3 h-3 md:w-5 md:h-5 rounded-full bg-white absolute left-1/2 -top-8 md:-top-14 transform -translate-x-1/2 drop-shadow-sm"
            aria-hidden="true"
          >
            <span
              class="m-auto bg-lightblue-400 w-2 h-2 md:w-3 md:h-3 rounded-full"
              aria-hidden="true"
            ></span>

            <span
              v-if="index !== 0"
              class="absolute top-1/2 right-full transform -translate-y-1/2 h-[2px] w-[130px] md:w-[250px] bg-darkblue-600/50"
              aria-hidden="true"
            ></span>
          </span>
          <div
            class="absolute left-1/2 -top-2 md:-top-5 bg-grey-200 px-1 md:px-4 transform -translate-x-1/2"
          >
            <img
              :src="getAssetUrl('icon', flowItem.icon)"
              alt=""
              aria-hidden="true"
              width="16"
              height="16"
              class="w-4 h-4 m-auto md:w-10 md:h-10"
            />
          </div>

          <p class="text-[8px] md:text-base text-black text-center m-auto">
            {{ flowItem.text }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
