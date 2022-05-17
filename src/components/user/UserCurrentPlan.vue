<script lang="ts">
import { defineComponent } from "vue";

import { buttonTypesEnum } from "@/enums/buttonTypes";
import { popupVariantsEnum } from "@/enums/popupEnum";

import { planTypesEnum } from "@/domain/plan";

import ActionLink from "../utils/ActionLink.vue";

export default defineComponent({
  components: { ActionLink },
  setup() {
    const currentPlan = "bronze";

    return { popupVariantsEnum, buttonTypesEnum, currentPlan, planTypesEnum };
  },
});
</script>

<template>
  <div
    class="flex items-center gap-6 bg-white p-6 rounded-xl shadow-profile-card border border-grey-270 flex-wrap"
  >
    <!-- bronze -->
    <svg
      v-if="currentPlan === planTypesEnum.Bronze"
      class="flex-shrink-0"
      width="94"
      height="100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.088 0c.919 0 1.798.2 2.619.574l36.806 15.688c4.3 1.833 7.526 6.091 7.487 11.06-.098 19.661-8.073 55.31-41.752 71.514a12.023 12.023 0 0 1-10.32 0C8.238 82.632.272 46.983 0 27.323c.15-4.97 3.366-9.228 7.662-11.06L44.488.572a6.183 6.183 0 0 1 2.6-.573Z"
        fill="url(#a)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="0"
          y1="50"
          x2="94"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B5947D" />
          <stop offset=".064" stop-color="#FFECE0" />
          <stop offset=".122" stop-color="#B6937D" />
          <stop offset=".182" stop-color="#F0CAB2" />
          <stop offset=".264" stop-color="#A47C6C" />
          <stop offset=".728" stop-color="#7F5B4A" />
          <stop offset=".8" stop-color="#AC836D" />
          <stop offset=".913" stop-color="#AB836E" />
          <stop offset="1" stop-color="#8E6958" />
        </linearGradient>
      </defs>
    </svg>

    <!-- silver -->
    <svg
      v-else-if="currentPlan === planTypesEnum.Silver"
      class="flex-shrink-0"
      width="94"
      height="100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.088 0c.919 0 1.798.2 2.619.574l36.806 15.688c4.3 1.833 7.526 6.091 7.487 11.06-.098 19.661-8.073 55.31-41.752 71.514a12.023 12.023 0 0 1-10.32 0C8.238 82.632.272 46.983 0 27.323c.15-4.97 3.366-9.228 7.662-11.06L44.488.572a6.183 6.183 0 0 1 2.6-.573Z"
        fill="url(#a)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="0"
          y1="50"
          x2="94"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B3ABA5" />
          <stop offset=".049" stop-color="#fff" />
          <stop offset=".11" stop-color="#B0A9A3" />
          <stop offset=".175" stop-color="#DAD1CC" />
          <stop offset=".25" stop-color="#9E9690" />
          <stop offset=".465" stop-color="#9A9187" />
          <stop offset=".659" stop-color="#7A756A" />
          <stop offset=".913" stop-color="#A39B90" />
          <stop offset="1" stop-color="#756F67" />
        </linearGradient>
      </defs>
    </svg>

    <!-- gold -->
    <svg
      v-else-if="currentPlan === planTypesEnum.Gold"
      class="flex-shrink-0"
      width="94"
      height="100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.088 0c.919 0 1.798.2 2.619.574l36.806 15.688c4.3 1.833 7.526 6.091 7.487 11.06-.098 19.661-8.073 55.31-41.752 71.514a12.023 12.023 0 0 1-10.32 0C8.238 82.632.272 46.983 0 27.323c.15-4.97 3.366-9.228 7.662-11.06L44.488.572a6.183 6.183 0 0 1 2.6-.573Z"
        fill="url(#a)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="94"
          y1="49.704"
          x2="0"
          y2="49.704"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E3A455" />
          <stop offset=".026" stop-color="#BA7F3B" />
          <stop offset=".091" stop-color="#F6DBA6" />
          <stop offset=".165" stop-color="#FFEBC4" />
          <stop offset=".3" stop-color="#F0BE79" />
          <stop offset=".496" stop-color="#F6DBA6" />
          <stop offset=".766" stop-color="#BA7F3B" />
          <stop offset=".854" stop-color="#EEBC70" />
          <stop offset="1" stop-color="#3F1F0F" />
        </linearGradient>
      </defs>
    </svg>

    <div class="flex-grow">
      <span class="font-comfortaa text-base text-grey-300 mb-2 block"
        >My current Plan</span
      >
      <span class="text-2xl font-comfortaa font-bold block mb-1 text-black"
        >Bronze</span
      >
      <p class="text-base text-black font-comfortaa font-medium">One search</p>
    </div>

    <ActionLink
      :path-to="`/?plan=${planTypesEnum.Bronze}&popupName=${popupVariantsEnum.OrderMethod}`"
      text="Info"
      :type="buttonTypesEnum.Primary"
      class="max-w-[110px] justify-center"
    />
  </div>
</template>
