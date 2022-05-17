<script lang="ts">
import { defineComponent } from "vue";

import UserSidebar from "@/components/user/UserSidebar.vue";

export default defineComponent({
  components: {
    "user-sidebar": UserSidebar,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="flex-grow bg-grey-250 bg-fixed bg-background-main bg-25% bg-no-repeat bg-right">
    <div class="flex container mx-auto px-4 h-full xl:max-w-[1360px]">
      <user-sidebar class="w-[215px] lg:w-[280px] flex-shrink-0"/>

      <main class="flex-grow p-6 ">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
