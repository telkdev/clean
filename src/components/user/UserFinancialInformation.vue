<script lang="ts">
import { defineComponent } from "vue";
import UserCurrentPlan from "./UserCurrentPlan.vue";
import UserSearches from "./UserSearches.vue";
import BaseCalendar from "../base/BaseCalendar.vue";

export default defineComponent({
  components: { UserCurrentPlan, UserSearches, BaseCalendar },
  setup() {
    const paymentHistory = [
      {
        status: "Processed", //Pending, Failed - strings for now
        title: "PaypPal",
        date: "27 March 2020, at 12:30 PM",
        amount: 2500,
        currency: "$",
      },
      {
        status: "Processed", //Pending, Failed - strings for now
        title: "PaypPal",
        date: "27 March 2020, at 12:30 PM",
        amount: 2500,
        currency: "$",
      },
      {
        status: "Processed", //Pending, Failed - strings for now
        title: "Stripe",
        date: "26 March 2020, at 13:45 PM",
        amount: 800,
        currency: "$",
      },
      {
        status: "Pending", //Pending, Failed - strings for now
        title: "Stripe",
        date: "26 March 2020, at 05:00 AM",
        amount: 800,
        currency: "$",
      },
    ];
    return { paymentHistory };
  },
});
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-6 mb-6">
      <UserCurrentPlan />

      <UserSearches />
    </div>

    <div>
      <h1 class="text-2xl text-black mb-6 font-medium text-center">
        Financial Information
      </h1>

      <div
        class="bg-white rounded-xl shadow-profile-card border border-grey-270"
      >
        <div
          class="flex justify-between items-center gap-6 py-3 px-6 border-b border-grey-270"
        >
          <span class="text-black text-base font-semibold font-comfortaa">
            Previous Payments
          </span>
          <BaseCalendar />
        </div>
        <ul class="px-6 pt-11 pb-8 space-y-8">
          <li
            v-for="(item, index) of paymentHistory"
            :key="index"
            class="flex gap-3 items-center"
          >
            <div
              class="w-8 h-8 border rounded-full flex"
              :class="{
                'text-green-800 border-green-800': item.status === 'Processed',
                'text-grey-300 border-grey-300': item.status === 'Pending',
              }"
            >
              <svg
                v-if="item.status === 'Pending'"
                class="w-[14px] h-4 m-auto"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#a)" fill="#A0AEC0">
                  <path
                    d="M7.258 12.987c.635 0 1.15-.537 1.15-1.199s-.515-1.198-1.15-1.198c-.635 0-1.15.537-1.15 1.198 0 .662.515 1.199 1.15 1.199ZM7.258 2.2c-.633 0-1.15.54-1.15 1.199v4.794c0 .66.517 1.199 1.15 1.199.633 0 1.15-.54 1.15-1.199V3.399c0-.66-.517-1.199-1.15-1.199Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(.355 .402)"
                      d="M0 0h13.807v14.383H0z"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                v-else
                class="m-auto h-3 w-3 text-green-800 fill-transparent stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
              >
                <path
                  d="m2.93 6.45 3.328-3.467L9.587 6.45M6.26 3.465v7.031"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="flex-grow">
              <span class="text-black text-base block font-comfortaa">
                {{ item.title }}
              </span>
              <time :datetime="item.date" class="text-sm text-grey-300">
                {{ item.date }}
              </time>
            </div>

            <span
              v-if="item.status === 'Pending'"
              class="text-red-400 text-sm font-comfortaa"
              >Pending</span
            >

            <span v-else class="text-black text-sm font-comfortaa">
              +{{ item.currency }}{{ item.amount }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
