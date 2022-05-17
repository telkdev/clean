<script lang="ts">
import { defineComponent, computed, ref, onMounted, Ref } from "vue";

import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useImportAssets } from "@/composables/useImportAssets";

export default defineComponent({
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    imageDescription: { type: String, required: true },
    isOdd: { type: Boolean, required: true },
  },
  setup() {
    const { getAssetUrl } = useImportAssets();

    const breakpoints = useBreakpoints(breakpointsTailwind);

    const mdAndLarger = breakpoints.greater("md");

    const isAllDescriptionShowed = ref(false);

    const toggleButtonText = computed(() => {
      return isAllDescriptionShowed.value ? "Hide..." : "More...";
    });

    const descriptionRef: Ref<HTMLDivElement | null> = ref(null);
    const descriptionRefClientHeight: Ref<number | null> = ref(null);

    function toggleDescriptionVisibility() {
      isAllDescriptionShowed.value = !isAllDescriptionShowed.value;
    }

    onMounted(() => {
      if (descriptionRef.value) {
        descriptionRefClientHeight.value =
          descriptionRef.value.clientHeight < 155
            ? descriptionRef.value.clientHeight
            : 155;
      }
    });

    return {
      mdAndLarger,
      getAssetUrl,
      toggleDescriptionVisibility,
      isAllDescriptionShowed,
      toggleButtonText,
      descriptionRef,
      descriptionRefClientHeight,
    };
  },
});
</script>

<template>
  <li
    class="flex flex-col gap-4 md:gap-10 md:items-center"
    :class="[isOdd ? 'md:flex-row' : 'md:flex-row-reverse']"
  >
    <h3
      v-if="!mdAndLarger"
      class="text-base font-medium text-darkblue-900 text-center mb-4"
    >
      {{ title }}
    </h3>
    <div class="md:w-1/3 shrink-0">
      <img
        :src="getAssetUrl('icon', image)"
        :alt="imageDescription"
        class="h-auto md:w-64 mx-auto md:mx-0 lg:w-auto"
        width="213"
        height="190"
      />
    </div>

    <div>
      <h3
        v-if="mdAndLarger"
        class="text-2xl mb-3 lg:mb-4 font-medium text-darkblue-900"
      >
        {{ title }}
      </h3>

      <div
        ref="descriptionRef"
        class="description text-xs font-comfortaa text-black lg:text-base space-y-2"
        :class="{ full: isAllDescriptionShowed }"
        v-html="description"
      ></div>

      <button
        v-if="descriptionRefClientHeight && descriptionRefClientHeight >= 155"
        class="mt-1 lg:mt-4 text-xs lg:text-base text-lightblue-500 underline hover:text-darkblue-900 active:text-lightblue-600/60 focus:text-darkblue-600/70 outline-none"
        @click="toggleDescriptionVisibility()"
      >
        {{ toggleButtonText }}
      </button>
    </div>
  </li>
</template>

<!-- Style written not in tailwind with a dynamic height class not renders appropeiate   -->
<style>
.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.description {
  overflow: hidden;
  max-height: 155px;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
}

.description.full {
  max-height: 1000px;
  transition: max-height 1s ease-in-out;
}
</style>
