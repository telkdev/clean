<script lang="ts">
import { defineComponent } from "vue";

import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseFooter from "@/components/base/BaseFooter.vue";

export default defineComponent({
  components: {
    "base-header": BaseHeader,
    "base-footer": BaseFooter,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <base-header />

  <div class="flex-grow bg-grey-200 pt-[72px] md:pt-24">
    <!-- :class="{ 'overflow-hidden': isPopupOpened }" -->
    <slot></slot>
  </div>

  <base-footer />
</template>
