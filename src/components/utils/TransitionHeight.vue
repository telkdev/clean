<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    function afterEnter(element: any) {
      element.style.height = "auto";
    }

    function enter(element: any) {
      const { height } = getComputedStyle(element);

      element.style.height = 0;

      setTimeout(() => {
        element.style.height = height;
      });
    }

    function leave(element: any) {
      const { height } = getComputedStyle(element);

      element.style.height = height;

      setTimeout(() => {
        element.style.height = 0;
      });
    }

    return { afterEnter, enter, leave };
  },
});
</script>

<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot></slot>
  </transition>
</template>
