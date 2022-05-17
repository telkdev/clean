<script lang="ts">
import { defineComponent } from "vue";

import { Plan, planTypesEnum, planPricesEnum } from "@/domain/plan";

import { popupVariantsEnum } from "@/enums/popupEnum";

import { useImportAssets } from "@/composables/useImportAssets";

interface PricingPlan extends Plan {
  image: "pricing-bronze" | "pricing-silver" | "pricing-gold";
  isSuggested: boolean;
}

export default defineComponent({
  setup() {
    const { getAssetUrl } = useImportAssets();

    const pricingPlancArray: PricingPlan[] = [
      {
        image: "pricing-bronze",
        activeColor: "bg-bronze",
        description:
          "Search <span class='font-semibold font-comfortaa'>One</span> Location",
        type: planTypesEnum.Bronze,
        price: planPricesEnum.Bronze,
        isSuggested: false,
      },
      {
        image: "pricing-silver",
        activeColor: "bg-silver",
        description:
          "Search <span class='font-semibold font-comfortaa'>Three</span> Locations",
        type: planTypesEnum.Silver,
        price: planPricesEnum.Silver,
        isSuggested: true,
      },
      {
        image: "pricing-gold",
        activeColor: "bg-gold",
        description:
          "Search <span class='font-semibold font-comfortaa'>Five</span> Locations",
        type: planTypesEnum.Gold,
        price: planPricesEnum.Gold,
        isSuggested: false,
      },
    ];

    return { pricingPlancArray, getAssetUrl, popupVariantsEnum };
  },
});
</script>

<template>
  <main
    class="bg-background-main md:bg-background-main-vertical bg-no-repeat bg-right md:bg-bottom bg-contain"
  >
    <div class="container mx-auto px-4 py-6 pb-9">
      <h1
        class="text-base md:text-lg lg:text-3xl font-medium text-black mb-4 text-center"
      >
        Simple pricing for Everyone
      </h1>

      <ul
        class="flex items-center flex-col gap-4 md:gap-[2px] md:flex-row md:justify-center lg:gap-4"
      >
        <li
          v-for="(item, index) of pricingPlancArray"
          :key="index"
          class="flex flex-col items-center bg-cover bg-no-repeat w-full max-w-[280px] lg:max-w-[360px] pt-2 md:pt-[10px] lg:pt-4 lg:mt-4 bg-card"
          :class="{
            'min-w-[310px] max-w-[309px] md:min-w-[253px] lg:min-w-[396px] lg:mt-0':
              item.isSuggested,
          }"
        >
          <div
            class="min-h-[160px] md:min-h-[130px] lg:min-h-[177px] mb-1 flex items-center md:px-10"
          >
            <img
              :src="getAssetUrl('icon', item.image)"
              alt=""
              class="h-auto w-[165px] mx-auto lg:w-[215px]"
              :class="{ 'w-[150px] lg:w-[235px]': item.isSuggested }"
              aria-hidden="true"
            />
          </div>

          <h2
            class="text-darkblue-900 uppercase text-base font-medium mb-3 lg:text-2xl lg:mb-4"
          >
            {{ item.type }}
          </h2>

          <div
            class="py-2 lg:py-3 w-full text-center relative mb-5 md:mb-4 lg:mb-7"
          >
            <p
              class="text-white text-xs font-medium lg:text-2xl relative z-10"
              v-html="item.description"
            ></p>

            <span
              class="w-full h-full absolute top-0 left-0 filter blur-[2px]"
              :class="item.activeColor"
            ></span>
          </div>

          <div
            class="flex items-start gap-1 text-5xl md:text-4xl lg:text-6xl mb-4 md:mb-3 lg:mb-5"
            :class="{
              'mb-11 md:mb-3': item.isSuggested,
            }"
          >
            <svg
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 md:w-2 lg:w-[14px]"
            >
              <path
                d="M6 0v2.03c-2.77.203-5 2.526-5 5.345 0 2.584 1.864 4.788 4.406 5.25L6 12.75V20h-.625A3.368 3.368 0 0 1 2 16.625V15H0v1.625C0 19.575 2.426 22 5.375 22H6v2h2v-2h.625C11.573 22 14 19.574 14 16.625c0-2.584-1.863-4.788-4.406-5.25L8 11.062v-7.03a3.36 3.36 0 0 1 3 3.343V9h2V7.375c0-2.82-2.23-5.142-5-5.344V0H6Zm0 4.03v6.658l-.25-.032A3.314 3.314 0 0 1 3 7.376a3.361 3.361 0 0 1 3-3.345V4.03Zm2 9.095 1.25.22a3.313 3.313 0 0 1 2.75 3.28A3.37 3.37 0 0 1 8.625 20H8v-6.875Z"
                fill="#102746"
              />
            </svg>
            <span class="text-darkblue-900 font-medium">
              {{ item.price }}
            </span>
          </div>

          <router-link
            :to="`/?plan=${item.type}&popupName=${popupVariantsEnum.OrderMethod}`"
            class="rounded-full bg-darkblue-900 text-white flex items-center justify-center hover:bg-lightblue-100"
            :class="[
              item.isSuggested
                ? 'w-[85px] h-[85px] md:w-[70px] md:h-[70px] lg:w-28 lg:h-28'
                : 'w-[70px] h-[70px] md:w-14 md:h-14 lg:w-24 lg:h-24',
            ]"
          >
            <svg
              width="31"
              height="24"
              class="fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10.5a1.5 1.5 0 0 0 0 3v-3Zm28.06 2.56a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L26.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM2 13.5h27v-3H2v3Z"
              />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>
