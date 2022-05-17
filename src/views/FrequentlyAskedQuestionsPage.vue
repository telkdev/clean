<script lang="ts">
import { defineComponent } from "vue";

import { PopupService } from "@/application/ports/popupVue";

import { StaticData } from "@/types/staticPagesTypes";

import { popupVariantsEnum } from "@/enums/popupEnum";
import { buttonTypesEnum } from "@/enums/buttonTypes";

import { usePopup } from "@/services/popupAdapterVue";

import ActionLink from "@/components/utils/ActionLink.vue";
import AccordionItem from "@/components/utils/AccordionItem.vue";

export default defineComponent({
  components: {
    "action-link": ActionLink,
    "accordion-item": AccordionItem,
  },
  setup() {
    const { openPopup }: PopupService = usePopup();

    const policyData: StaticData[] = [
      {
        title:
          "Is the property you are looking at in a town, city, or part of an unincorporated county?",
        description: `
              <p>
                Often, Cities and Counties have different rules and regulations for short-term rentals despite sharing the same zip code.  Properties can literally be streets away from each other, yet have to comply with different regulations.   
              </p>
            `,
      },
      {
        title: "Many homes, condos, or townhomes are in an HOA.",
        description: `
              <p>
               Each HOA may have its own regulations or limitations on short-term rentals.  Please ensure that you review your HOA documents!   
              </p>
            `,
      },
      {
        title: "Many vacation areas have many “condotels.”",
        description: `
              <p>
               There may be different rules and regulations per city or county for “condotels” or “condo hotels” or “apartment hotels.” Condo-hotels can be described as a hotel composed of units that are owned by an individual, corporation, and other legal entity where the units are available for guest rental on a daily, weekly or monthly basis. Condo-hotels are often treated as “transient lodging” or “hotels” by cities and counties, and as short-term rentals they are treated differently than “residences” or “homes.”   
              </p>
            `,
      },
      {
        title:
          "Taxes: Tax rates, collection and remittance will be different for specify towns, cities, and counties, and states.",
        description: `
              <p>
               Taxes may be collected and paid directly from your booking platform, but may not be, depending on where your property is located, and what booking platform you use. Please make sure you are complying with the specific tax requirements for your location. The purpose of Short Rule is to provide information related to whether a city, town or county allows short-term rentals, and if there are limitations on those rentals, not taxes.  
              </p>
            `,
      },
    ];

    return { policyData, openPopup, buttonTypesEnum, popupVariantsEnum };
  },
});
</script>

<template>
  <main class="bg-background-main bg-fixed bg-35% bg-no-repeat bg-right">
    <div class="container mx-auto px-4 pt-6 pb-28">
      <div class="max-w-[900px] mx-auto mb-10">
        <h1
          class="text-base text-black font-medium mb-4 md:text-2xl lg:text-3xl text-center mb-4"
        >
          Frequently Asked Questions
        </h1>

        <p
          class="text-black font-comfortaa text-xs md:text-base mb-6 lg:mb-8 text-center max-w-[1000px] mx-auto"
        >
          <span class="font-bold"> SHORT-TERM RENTALS (“STR”)</span> or
          <span class="font-bold">VACATION RENTALS</span>, as used in this
          document, can be defined as: Residences or homes (single family, multi
          family, condos, or townhomes) which are rented for periods of less
          than thirty (30) days or one (1) calendar month, whichever is less.
        </p>
      </div>

      <ul class="space-y-2 md:space-y-3 lg:space-y-4 mb-6">
        <accordion-item v-for="(item, index) of policyData" :key="index">
          <template #header> {{ index + 1 }}. {{ item.title }} </template>

          <template #body>
            <template v-if="item.description && item.description.length">
              <div
                class="space-y-2 md:space-y-3"
                v-html="item.description"
              ></div>
            </template>
          </template>
        </accordion-item>
      </ul>

      <p
        class="italic mb-6 text-black font-comfortaa text-xs md:text-base max-w-[1000px] mx-auto"
      >
        Rules related to short-term rentals change on a regular basis, and we
        advise you to research the current rules for your location. We cannot
        guarantee the accuracy of the rules (regulations, rules, laws or
        ordinances) discussed in this document. While we do our best to keep the
        information updated, if you find an error, omission, or something that
        needs an update, please let us know. This document is intended to
        supplement your own independent research, and not to be relied on
        exclusively.
      </p>

      <action-link
        path-to="/"
        :text="'Back to Main page'"
        :type="buttonTypesEnum.Primary"
        class="max-w-[350px] mx-auto block text-center"
      />
    </div>
  </main>
</template>
