<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <h2
    class="text-darkblue-900 font-medium text-base md:text-2xl lg:text-3xl md:max-w-[310px] lg:max-w-[510px] w-fit mx-auto border-t-2 border-darkblue-500/50 md:border-none md:relative text-center"
  >
    <span
      class="hidden md:block md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:w-24 lg:w-48 md:h-0.5 bg-darkblue-600/50 md:right-full md:mr-6"
      aria-hidden="true"
    >
    </span>
    <span v-html="text"></span>
    <span
      class="hidden md:block md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:w-24 lg:w-48 md:h-0.5 bg-darkblue-600/50 md:left-full md:ml-6"
      aria-hidden="true"
    >
    </span>
  </h2>
</template>
