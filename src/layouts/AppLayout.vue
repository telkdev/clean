<script setup lang="ts">
import { markRaw, ref, watch } from "vue";
import { useRoute } from "vue-router";

import DefaultLayout from "./DefaultLayout.vue";
import UserProfileLayout from "./UserProfileLayout.vue";

const layout = ref();
const route = useRoute();

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      // !Used switch statement because Vite can't use dynamic import for compontent yet (https://github.com/vitejs/vite/issues/863);
      switch (metaLayout) {
        case "UserProfileLayout":
          layout.value = markRaw(UserProfileLayout);
          break;

        default:
          layout.value = markRaw(DefaultLayout);
          break;
      }

      //
      // const component =
      //   metaLayout && (await import(/* @vite-ignore */ `./${metaLayout}.vue`));
      // layout.value = markRaw(component?.default || DefaultLayout);
    } catch (e) {
      layout.value = markRaw(DefaultLayout);
    }
  },
  { immediate: true }
);
</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
