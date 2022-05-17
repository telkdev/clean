<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

import { authenticationContainer } from "@/services/containers/authenticationContainer";
import { useImportAssets } from "@/composables/useImportAssets";

import BaseLogo from "@/components/base/BaseLogo.vue";

export default defineComponent({
  components: {
    "base-logo": BaseLogo,
  },
  setup() {
    const { getAssetUrl } = useImportAssets();

    const navArray = [
      {
        icon: "chart-bar",
        title: "Overview",
        url: "/profile/",
      },
      {
        icon: "money",
        title: "Financial Information",
        url: "/profile/financial-information",
      },
      {
        icon: "gear",
        title: "Settings",
        url: "/profile/settings",
      },
    ];

    const router = useRouter();

    const authenticationService = authenticationContainer();

    const authentication = authenticationService();

    async function handleLogout() {
      authentication.handleLogout();

      router.push("/");
    }

    return {
      navArray,
      getAssetUrl,
      handleLogout,
    };
  },
});
</script>

<template>
  <aside
    class="bg-darkblue-900 before:absolute before:top-0 before:bottom-0 before:right-full before:bg-darkblue-900 before:w-screen flex flex-col sticky top-0 left-0 h-[100vh]"
  >
    <div class="px-4 py-6 pb-11">
      <div class="bg-white rounded-lg flex p-2 mb-6">
        <base-logo class="max-w-[120px] m-auto" />
      </div>
      <div
        class="p-4 rounded-lg bg-white/10 flex items-center gap-2"
        :title="'User name full'"
      >
        <svg class="w-5 h-5 fill-grey-200 shrink-0" viewBox="0 0 20 20">
          <path
            d="M17.464 16.203A9.715 9.715 0 1 0 .277 10c0 2.268.8 4.464 2.258 6.202l-.014.011c.049.059.104.109.154.166.063.072.13.14.195.209.194.21.394.414.604.604.064.058.13.112.194.168.223.191.451.373.688.543.03.02.058.048.089.07v-.009a9.653 9.653 0 0 0 11.11 0v.008c.031-.021.059-.048.09-.07.236-.17.465-.35.687-.542.065-.056.13-.11.195-.168.21-.191.41-.393.604-.604.064-.07.131-.137.194-.209.05-.057.106-.107.154-.166l-.015-.011ZM10 4.446a3.125 3.125 0 1 1 0 6.25 3.125 3.125 0 0 1 0-6.25ZM4.449 16.203a3.47 3.47 0 0 1 3.467-3.424h4.167a3.47 3.47 0 0 1 3.467 3.424 8.292 8.292 0 0 1-11.101 0Z"
          />
        </svg>
        <span
          class="text-white text-base font-comfortaa font-medium line-clamp-1"
          >User's name
        </span>
      </div>
    </div>
    <div
      class="flex-grow py-11 px-4 border-y border-grey-900 before:absolute before:top-0 before:bottom-0 before:right-full before:w-screen relative before:border-grey-900 before:border-y before:-my-[1px]"
    >
      <nav>
        <ul class="space-y-4">
          <li v-for="(item, index) of navArray" :key="index">
            <router-link
              v-slot="{ isExactActive }"
              class="block"
              :to="item.url"
              :title="item.title"
            >
              <div
                class="flex items-center p-2 gap-2 rounded-lg bg-white/10 hover:bg-white/50"
                :class="{ 'bg-white/30': isExactActive }"
              >
                <img
                  :src="getAssetUrl('icon', item.icon)"
                  :alt="''"
                  class=""
                  width="20"
                  aria-hidden="true"
                  height="20"
                />

                <span
                  class="text-white text-xs lg:text-base font-comfortaa font-medium line-clamp-1"
                >
                  {{ item.title }}
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex justify-center px-4 py-11">
      <!-- TODO: Add "bare" button to component -->
      <button
        class="flex items-center gap-2 text-white text-base font-comfortaa hover:text-red-400 group"
        @click="handleLogout"
      >
        <svg
          class="w-6 h-6 stroke-grey-200 fill-transparent group-hover:stroke-red-400"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.313 8.063 20.248 12l-3.936 3.938M9.75 12h10.497M9.75 20.25H4.5a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h5.25"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Sign out
      </button>
    </div>
  </aside>
</template>
