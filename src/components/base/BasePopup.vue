<script lang="ts">
import { defineComponent, PropType, watch } from "vue";

import { useRoute } from "vue-router";

import { popupSizesEnum, popupVariantsEnum } from "@/enums/popupEnum";

import { usePopup } from "@/services/popupAdapterVue";
import { usePopupUtils } from "@/composables/usePopupUtils";
import { useHelperUtils } from "@/composables/useHelperUtils";

export default defineComponent({
  props: {
    popupSize: {
      type: String as PropType<popupSizesEnum>,
      default: () => popupSizesEnum.Default,
    },
  },
  setup() {
    const route = useRoute();

    const { closePopup } = usePopup();
    const { setSize } = usePopupUtils();
    const { isFromEnum } = useHelperUtils();

    watch(
      () => route.path,
      () => {
        if (
          route.query.popupName &&
          isFromEnum(route.query.popupName, popupVariantsEnum)
        ) {
          return;
        }

        closePopup();
      }
    );

    return { closePopup, setSize };
  },
});
</script>

<template>
  <div class="fixed inset-0 z-30 flex py-1 bg-black/10 backdrop-blur-sm">
    <div
      class="m-auto relative rounded-3xl rounded- bg-white shadow-card w-full overflow-y-auto max-h-screen"
      :class="[setSize(popupSize)]"
    >
      <button
        class="absolute top-3 right-3 p-1 text-darkblue-900 hover:text-lightblue-100"
        @click="closePopup"
      >
        <svg class="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
          <path
            d="M18.973 16.923 3.076 1.026c-.523-.524-1.513-.538-2.05 0-.539.538-.524 1.528 0 2.05l15.896 15.898c.523.523 1.513.538 2.051 0 .539-.538.524-1.528 0-2.051Z"
          />
          <path
            d="M3.077 18.973 18.974 3.076c.523-.523.538-1.513 0-2.05-.538-.539-1.528-.524-2.05 0L1.025 16.921c-.523.523-.538 1.513 0 2.051.538.539 1.528.524 2.051 0Z"
          />
        </svg>
      </button>
      <slot></slot>
    </div>
  </div>
</template>
