<script lang="ts">
import { defineComponent } from "vue";

import BaseNavigation from "@/components/base/BaseNavigation.vue";
import BaseLogo from "@/components/base/BaseLogo.vue";

export default defineComponent({
  components: {
    "base-navigation": BaseNavigation,
    "base-logo": BaseLogo,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <header class="bg-white shadow-base md:drop-shadow-base fixed left-0 right-0 top-0 z-20">
    <div class="container mx-auto flex items-center py-2 px-4">
      <div class="flex-shrink-0 lg:w-1/3">
        <base-logo />
      </div>

      <base-navigation class="flex-grow" />
    </div>
  </header>
</template>
