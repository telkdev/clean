<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

import { Plan } from "@/domain/plan";

export default defineComponent({
  props: {
    plan: {
      type: Object as PropType<Plan>,
      required: true,
    },
    modelValue: { type: String, default: "", required: true },
    selectedPlan: { type: String, default: "", required: true },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const isSelected = computed(() => {
      return props.modelValue === props.selectedPlan;
    });

    return { isSelected };
  },
});
</script>

<template>
  <li class="relative">
    <label
      :for="plan.type"
      class="p-1 rounded-br-none rounded-2xl block overflow-hidden shadow-plan h-full w-full cursor-pointer"
      :class="`bg-${plan.type}`"
    >
      <div class="bg-white w-full h-full rounded-br-none rounded-2xl">
        <div
          class="flex flex-col items-center py-3 md:py-2 lg:py-3 px-7 md:px-2 lg:px-5 w-full h-full rounded-br-none rounded-2xl"
          :class="[isSelected ? plan.activeColor : '']"
        >
          <h3
            class="text-darkblue-900 font-bold text-2xl mb-2 md:mb-1 md:text-base lg:mb-2 lg:text-2xl lg:font-normal uppercase"
          >
            {{ plan.type }}
          </h3>

          <p
            class="text-xs md:text-[10px] lg:text-xs text-darkblue-900 lg:font-bold mb-1 text-center"
            v-html="plan.description"
          ></p>

          <div class="flex items-baseline">
            <svg class="w-2" viewBox="0 0 8 12" fill="none">
              <g clip-path="url(#clip0_1058_5934)">
                <path
                  d="M3.02777 0V1.015C1.64277 1.1165 0.527771 2.278 0.527771 3.6875C0.527771 4.9795 1.45977 6.0815 2.73077 6.3125L3.02777 6.375V10H2.71527C2.49354 10.0005 2.27389 9.95713 2.06895 9.87249C1.864 9.78784 1.67779 9.66356 1.521 9.50677C1.36421 9.34998 1.23993 9.16377 1.15528 8.95882C1.07064 8.75388 1.02731 8.53424 1.02777 8.3125V7.5H0.027771V8.3125C0.027771 9.7875 1.24077 11 2.71527 11H3.02777V12H4.02777V11H4.34027C5.81427 11 7.02777 9.787 7.02777 8.3125C7.02777 7.0205 6.09627 5.9185 4.82477 5.6875L4.02777 5.531V2.016C4.43998 2.06042 4.82121 2.2557 5.09812 2.56427C5.37503 2.87284 5.52806 3.2729 5.52777 3.6875V4.5H6.52777V3.6875C6.52777 2.2775 5.41277 1.1165 4.02777 1.0155V0H3.02777ZM3.02777 2.015V5.344L2.90277 5.328C2.51669 5.26132 2.16672 5.06 1.91499 4.75976C1.66327 4.45952 1.52608 4.0798 1.52777 3.688C1.52735 3.27326 1.6803 2.87301 1.95721 2.56425C2.23412 2.2555 2.61543 2.06005 3.02777 2.0155V2.015ZM4.02777 6.5625L4.65277 6.6725C5.0389 6.73908 5.38893 6.94038 5.64067 7.24064C5.89241 7.5409 6.02957 7.92068 6.02777 8.3125C6.02817 8.53422 5.98479 8.75383 5.90012 8.95875C5.81546 9.16366 5.69117 9.34985 5.5344 9.50662C5.37762 9.6634 5.19143 9.78769 4.98652 9.87235C4.7816 9.95702 4.56199 10.0004 4.34027 10H4.02777V6.5625Z"
                  fill="#07254F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1058_5934">
                  <rect
                    width="7"
                    height="12"
                    fill="white"
                    transform="translate(0.027771)"
                  />
                </clipPath>
              </defs>
            </svg>
            <b
              class="text-2xl text-darkblue-900 font-medium md:text-xl lg:text-2xl"
            >
              {{ plan.price }}
            </b>
          </div>
        </div>
      </div>
    </label>

    <input
      :id="plan.type"
      type="radio"
      name="plan"
      :checked="isSelected"
      :value="modelValue"
      class="form-radio w-7 h-7 md:w-5 md:h-5 lg:w-8 lg:h-8 text-darkblue-800 bg-darkblue-800 focus:ring-darkblue-800 absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </li>
</template>
