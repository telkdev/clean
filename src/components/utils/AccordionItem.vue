<script lang="ts">
import { defineComponent, ref } from "vue";

import TransitionHeight from "@/components/utils/TransitionHeight.vue";

export default defineComponent({
  components: {
    "transition-height": TransitionHeight,
  },
  setup() {
    const isShow = ref(false);

    function toggleVisibility() {
      isShow.value = !isShow.value;
    }

    return { isShow, toggleVisibility };
  },
});
</script>

<template>
  <li>
    <div
      class="flex items-center justify-between gap-3 py-2 lg:py-3 px-3 md:pr-6 bg-grey-250 shadow-xs cursor-pointer font-comfortaa text-xs lg:text-base"
      :class="{ 'bg-gradient-blue-300': isShow }"
      @click="toggleVisibility"
    >
      <slot name="header"></slot>

      <button
        class="flex-shrink-0 text-black hover:text-lightblue-600 p-1"
        :class="{ 'text-lightblue-500': isShow }"
      >
        <!-- Add svg to sprite -->
        <svg
          class="fill-current w-6 h-6 md:w-8 md:h-8 transition transform"
          :class="{ '-rotate-45': isShow }"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0a1 1 0 0 1 1 1v10h10a1 1 0 0 1 0 2H13v10a1 1 0 0 1-2 0V13H1a1 1 0 0 1 0-2h10V1a1 1 0 0 1 1-1Z"
          />
        </svg>
      </button>
    </div>
    <transition-height>
      <div
        v-if="isShow"
        class="py-4 text-black font-comfortaa text-xs lg:text-base"
      >
        <slot name="body"></slot>
      </div>
    </transition-height>
  </li>
</template>
