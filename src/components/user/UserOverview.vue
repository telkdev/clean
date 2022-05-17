<script lang="ts">
import { defineComponent } from "vue";

import { buttonTypesEnum } from "@/enums/buttonTypes";

import UserCurrentPlan from "./UserCurrentPlan.vue";
import UserSearches from "./UserSearches.vue";
import SearchForm from "../map/SearchForm.vue";
import BasePagination from "../base/BasePagination.vue";
import ActionButton from "../utils/ActionButton.vue";

export default defineComponent({
  components: {
    UserCurrentPlan,
    UserSearches,
    SearchForm,
    BasePagination,
    ActionButton,
  },
  setup() {
    const tableNavigation = [
      {
        title: "State, City",
        size: "180px",
      },
      {
        title: "Date",
        size: "120px",
      },
      {
        title: "Zip Code",
        size: "120px",
      },
      {
        title: "County",
        size: "120px",
      },
      {
        title: "Status",
        size: "120px",
      },
    ];

    return { tableNavigation, buttonTypesEnum };
  },
});
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="grid grid-cols-2 gap-6 mb-6">
      <UserCurrentPlan />

      <UserSearches />
    </div>

    <SearchForm class="mb-6" />

    <div class="flex-grow flex flex-col">
      <h1 class="text-2xl text-black mb-6 font-medium text-center">
        Search History
      </h1>

      <div
        class="bg-white rounded-xl shadow-profile-card border border-grey-270 flex-grow flex flex-col"
      >
        <ul
          class="flex justify-between items-center gap-4 py-3 px-6 border-b border-grey-270 overflow-x-auto scrollbar-thin scrollbar-thumb-grey-400"
        >
          <li
            v-for="(item, index) of tableNavigation"
            :key="index"
            class="text-base text-grey-800 font-comfortaa flex-shrink-0 w-full"
            :class="`max-w-[${item.size}]`"
          >
            {{ item.title }}
          </li>
          <li class="max-w-[125px] flex-shrink-0 w-full">
            <button
              class="p-2 font-comfortaa text-base text-white bg-grey-300 rounded-lg hover:bg-grey-800"
            >
              Download All
            </button>
          </li>
        </ul>
        <!-- If emty searches list -->
        <div v-if="false" class="py-24 px-6 flex flex-col items-center">
          <h2 class="text-2xl text-grey-800 mb-11 font-comfortaa font-medium">
            Take the first step to build a successful business
          </h2>
          <ActionButton
            text="Search"
            :type="buttonTypesEnum.Submit"
            class="min-w-[250px] md:py-3"
          />
        </div>

        <ul
          v-else
          class="py-6 space-y-6 flex-grow overflow-x-auto scrollbar-thin scrollbar-thumb-grey-400"
        >
          <li
            v-for="(item, index) of 10"
            :key="index"
            class="flex justify-between items-center gap-4 w-full px-6"
          >
            <div
              class="flex items-center gap-2 max-w-[180px] w-full flex-shrink-0"
            >
              <svg
                class="flex-shrink-0"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_983_5062)">
                  <path
                    d="M7.49935 10.0033L8.20768 8.77548V5.61886C9.42672 5.34445 10.3327 4.39108 10.3327 3.25048C10.3327 1.89624 9.06193 0.794922 7.49935 0.794922C5.93677 0.794922 4.66602 1.89624 4.66602 3.25048C4.66602 4.39108 5.57197 5.34445 6.79102 5.61886V8.77548L7.49935 10.0033Z"
                    fill="#5F5F5F"
                  />
                  <path
                    d="M10.5218 5.00354L10.1443 6.18712C11.9796 6.62667 13.166 7.47199 13.166 8.34126C13.166 9.50274 10.8391 10.7968 7.49935 10.7968C4.15956 10.7968 1.83268 9.50274 1.83268 8.34126C1.83268 7.47199 3.01914 6.62667 4.85514 6.18651L4.4776 5.00293C1.97222 5.60331 0.416016 6.88204 0.416016 8.34126C0.416016 10.4064 3.52772 12.0246 7.49935 12.0246C11.471 12.0246 14.5827 10.4064 14.5827 8.34126C14.5827 6.88204 13.0265 5.60331 10.5218 5.00354Z"
                    fill="#5F5F5F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_983_5062">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span
                class="text-sm text-black uppercase font-medium font-comfortaa line-clamp-1"
              >
                CLEARWATER, FL
              </span>
            </div>

            <time
              datetime="12/02/2022"
              class="text-black text-sm font-comfortaa max-w-[120px] w-full flex-shrink-0 line-clamp-1"
            >
              12/02/2022
            </time>

            <span
              class="text-black text-sm font-comfortaa max-w-[120px] w-full flex-shrink-0 line-clamp-1"
            >
              3375533769
            </span>

            <span
              class="text-black text-sm font-comfortaa max-w-[120px] w-full flex-shrink-0 line-clamp-1"
            >
              Pinellas
            </span>
            <!-- !FOR PRESENTATION PURPOSES  -->
            <span
             v-if="index % 2 === 0"
              class="text-black text-sm font-comfortaa max-w-[120px] w-full flex-shrink-0 line-clamp-1"
            >
              Valid
            </span>
            <span
             v-else
              class="text-red-400 text-sm font-comfortaa max-w-[120px] w-full flex-shrink-0 line-clamp-1"
            >
              Expired
            </span>

            <div class="flex gap-6 max-w-[125px] w-full flex-shrink-0">
              <button
                class="underline text-base font-comfortaa font-bold text-lightblue-500 hover:text-red-400 flex items-center gap-3"
              >
                <svg
                  class="fill-current"
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 15a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm3.293-7.707a1 1 0 0 1 1.414 0L6 8.586V1a1 1 0 0 1 2 0v7.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z"
                  />
                </svg>

                PDF
              </button>

              <button
                class="underline text-base font-comfortaa font-bold text-lightblue-500 hover:text-red-400"
              >
                View
              </button>
            </div>
          </li>
        </ul>

        <div class="p-6 flex justify-center">
          <BasePagination />
        </div>
      </div>
    </div>
  </div>
</template>
