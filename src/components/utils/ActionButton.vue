<script lang="ts">
import { defineComponent, PropType } from "vue";

import { buttonTypesEnum } from "@/enums/buttonTypes";

import { useButtonUtils } from "@/composables/useButtonUtils";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<buttonTypesEnum>,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: () => false,
    },
    isDisabled: {
      type: Boolean,
      default: () => false,
    },
    isSubmit: {
      type: Boolean,
      default: () => true,
    },
  },
  emits: ["handle-submit"],
  setup(props, { emit }) {
    const { setClassByType } = useButtonUtils();

    function handleClick() {
      emit("handle-submit");
    }

    return { handleClick, setClassByType };
  },
});
</script>

<template>
  <button
    :disabled="isDisabled || isLoading"
    class="font-comfortaa font-bold"
    :class="[
      setClassByType(type),
      {
        'flex items-center justify-center gap-1': isLoading,
      },
    ]"
    @click="handleClick"
  >
    <template v-if="isLoading">
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Processing...
    </template>
    <template v-else>
      {{ text }}
    </template>
  </button>
</template>
