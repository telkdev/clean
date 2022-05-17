<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  computed,
  ComputedRef,
  onMounted,
} from "vue";
import { useRoute, useRouter } from "vue-router";

import { Plan, planTypesEnum, planPricesEnum } from "@/domain/plan";

import { useHelperUtils } from "@/composables/useHelperUtils";

import { popupSizesEnum } from "@/enums/popupEnum";

import { useImportAssets } from "@/composables/useImportAssets";

import BasePopup from "@/components/base/BasePopup.vue";

import OrderPlan from "@/components/order/OrderPlan.vue";

export default defineComponent({
  components: {
    "base-popup": BasePopup,
    "order-plan": OrderPlan,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const { isFromEnum } = useHelperUtils();

    const { getAssetUrl } = useImportAssets();

    const orderPlans: Plan[] = [
      {
        price: planPricesEnum.Bronze,
        type: planTypesEnum.Bronze,
        description:
          "Search <span class='font-bold text-lightblue-500'>One</span> Location",
        activeColor: "bg-bronze-opacity",
      },
      {
        price: planPricesEnum.Silver,
        type: planTypesEnum.Silver,
        description:
          "Search <span class='font-bold text-lightblue-500'>Three</span> Locations",
        activeColor: "bg-silver-opacity",
      },
      {
        price: planPricesEnum.Gold,
        type: planTypesEnum.Gold,
        description:
          "Search <span class='font-bold text-lightblue-500'>Five</span> Locations",
        activeColor: "bg-gold-opacity",
      },
    ];

    const selectedPlan: Ref<planTypesEnum> = ref(orderPlans[0].type);

    onMounted(async () => {
      await router.isReady();

      if (route.query.plan && isFromEnum(route.query.plan, planTypesEnum)) {
        selectedPlan.value = route.query.plan as planTypesEnum;
      }
    });

    const selectedPlanDetails: ComputedRef<Plan> = computed(() => {
      return orderPlans.find((el) => el.type === selectedPlan.value) as Plan;
    });

    return {
      popupSizesEnum,
      getAssetUrl,
      orderPlans,
      selectedPlan,
      selectedPlanDetails,
    };
  },
});
</script>

<template>
  <base-popup :popup-size="popupSizesEnum.Large">
    <div class="md:flex md:flex-row-reverse">
      <div class="py-6 md:py-4 lg:py-5 flex-grow">
        <h2
          class="text-base font-comfortaa text-black font-medium mb-3 lg:mb-4 md:text-xl lg:text-2xl text-center"
        >
          Order Summary
        </h2>

        <ul
          class="md:px-6 lg:px-7 mb-7 md:mb-3 lg:mb-5 flex flex-col items-center md:justify-center md:items-stretch gap-6 md:flex-row md:gap-1 lg:gap-3"
        >
          <order-plan
            v-for="(plan, index) of orderPlans"
            :key="index"
            :plan="plan"
            :selected-plan="selectedPlan"
            :model-value="plan.type"
            class="w-full max-w-[190px]"
            @update:model-value="(newValue) => (selectedPlan = newValue)"
          />
        </ul>

        <div
          class="border-t border-lightblue-200 px-2 py-2 lg:py-3 md:px-6 lg:px-7 space-y-2 lg:space-y-4"
        >
          <div class="flex items-start gap-2 lg:gap-4">
            <h4
              class="text-black text-xs lg:text-base font-comfortaa font-semibold"
            >
              Billing Plan:
            </h4>
            <span
              class="text-darkblue-900 capitalize text-xs lg:text-base font-comfortaa font-semibold"
              >{{ selectedPlanDetails.type }}</span
            >
          </div>
          <div class="flex items-start gap-2 lg:gap-4">
            <h4
              class="text-black text-xs lg:text-base font-comfortaa font-semibold"
            >
              Order details:
            </h4>
            <span
              class="text-darkblue-900 capitalize text-xs lg:text-base font-comfortaa font-semibold"
              v-html="selectedPlanDetails.description"
            ></span>
          </div>
          <div
            class="flex items-center gap-3 md:gap-1 lg:gap-2 mx-auto max-w-[290px]"
          >
            <svg
              class="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11.1 14.04a.804.804 0 0 1-.593-.24.852.852 0 0 1-.224-.576V5.336c0-.235.075-.432.224-.592.16-.16.358-.24.592-.24.235 0 .427.08.576.24.16.16.24.357.24.592v7.888a.762.762 0 0 1-.256.576.768.768 0 0 1-.56.24Zm0 2.96c-.3 0-.56-.107-.785-.32a1.066 1.066 0 0 1-.32-.784c0-.31.107-.57.32-.784.224-.224.486-.336.784-.336.31 0 .571.112.784.336.214.213.32.475.32.784 0 .31-.112.57-.336.784-.213.213-.469.32-.768.32Z"
                fill="#000"
              />
              <circle cx="11" cy="11" r="10.5" stroke="#000" />
            </svg>

            <p class="text-xs text-center text-black font-comfortaa">
              Search remails valid for 30 days…
            </p>
          </div>
        </div>

        <div
          class="border-t border-lightblue-200 px-2 pt-2 lg:pt-3 md:px-6 lg:px-7"
        >
          <div
            class="flex items-start gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-4 lg:mb-8"
          >
            <h4
              class="text-black text-xs lg:text-base font-comfortaa font-semibold"
            >
              Total Payment:
            </h4>
            <span
              class="text-darkblue-900 capitalize text-xs lg:text-base font-comfortaa font-semibold"
            >
              ${{ selectedPlanDetails.price }}</span
            >
          </div>
          <h4
            class="text-lightblue-400 font-comfortaa font-medium text-base text-center mb-6 md:mb-4 lg:mb-8 lg:text-2xl"
          >
            Choose your Payment Method
          </h4>
          <ul class="flex items-center gap-2 md:gap-4 lg:gap-6 justify-center">
            <li>
              <button
                class="border border-grey-300 p-1 md:p-2 w-[125px] md:w-[165px] lg:w-[240px lg:px-6] h-[33px] md:h-[44px] lg:h-[65px]"
              >
                <svg
                  class="w-full h-full"
                  viewBox="0 0 194 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M149.402 10.959h-10.668c-.728 0-1.352.553-1.464 1.302l-4.314 28.476c-.085.56.333 1.068.879 1.068h5.473c.508 0 .944-.385 1.023-.91l1.225-8.073c.113-.749.734-1.302 1.464-1.302h3.375c7.027 0 11.082-3.539 12.141-10.555.477-3.069.022-5.48-1.36-7.169-1.515-1.857-4.206-2.837-7.774-2.837Zm1.231 10.399c-.583 3.986-3.507 3.986-6.336 3.986h-1.611l1.13-7.441a.9.9 0 0 1 .877-.783h.737c1.927 0 3.746 0 4.682 1.143.562.683.734 1.695.521 3.095Z"
                    fill="#0070BA"
                  />
                  <path
                    d="M73.32 10.959H62.653c-.73 0-1.351.553-1.465 1.302l-4.314 28.476c-.085.56.333 1.068.88 1.068h5.092c.729 0 1.35-.551 1.464-1.3l1.164-7.683c.114-.749.735-1.302 1.464-1.302h3.375c7.026 0 11.081-3.539 12.143-10.555.477-3.069.018-5.48-1.36-7.169-1.519-1.857-4.208-2.837-7.776-2.837Zm1.231 10.399c-.583 3.986-3.507 3.986-6.336 3.986h-1.61l1.129-7.441a.902.902 0 0 1 .879-.783h.738c1.925 0 3.744 0 4.68 1.143.561.683.731 1.695.52 3.095ZM105.203 21.23h-5.106a.9.9 0 0 0-.88.781l-.223 1.486-.358-.539c-1.105-1.672-3.571-2.228-6.032-2.228-5.643 0-10.464 4.45-11.402 10.694-.489 3.116.205 6.092 1.901 8.17 1.558 1.91 3.784 2.703 6.433 2.703 4.548 0 7.071-3.04 7.071-3.04l-.227 1.477c-.085.561.33 1.07.877 1.07h4.601c.729 0 1.35-.551 1.465-1.3l2.759-18.203c.085-.565-.332-1.07-.879-1.07ZM98.085 31.58c-.494 3.04-2.81 5.077-5.765 5.077-1.482 0-2.668-.496-3.43-1.434-.757-.932-1.04-2.258-.8-3.735.46-3.01 2.814-5.116 5.725-5.116 1.45 0 2.627.5 3.406 1.45.78.954 1.088 2.29.864 3.758Z"
                    fill="#005EA6"
                  />
                  <path
                    d="M181.286 21.23h-5.106a.9.9 0 0 0-.878.781l-.224 1.486-.357-.539c-1.107-1.672-3.571-2.228-6.033-2.228-5.645 0-10.466 4.45-11.403 10.694-.487 3.116.205 6.092 1.901 8.17 1.558 1.91 3.784 2.703 6.434 2.703 4.547 0 7.071-3.04 7.071-3.04l-.228 1.477c-.086.561.333 1.07.878 1.07h4.6c.728 0 1.35-.551 1.464-1.3l2.76-18.203c.085-.565-.332-1.07-.879-1.07Zm-7.118 10.349c-.493 3.04-2.81 5.077-5.765 5.077-1.482 0-2.668-.496-3.432-1.434-.753-.932-1.04-2.258-.798-3.735.461-3.01 2.813-5.116 5.724-5.116 1.452 0 2.628.5 3.406 1.45.782.954 1.09 2.29.865 3.758Z"
                    fill="#0070BA"
                  />
                  <path
                    d="M132.409 21.23h-5.135c-.49 0-.95.253-1.227.675l-7.081 10.86-3.004-10.434c-.187-.655-.765-1.1-1.419-1.1h-5.047c-.609 0-1.038.624-.843 1.223l5.654 17.275-5.317 7.81c-.416.613.006 1.46.727 1.46h5.131c.484 0 .94-.248 1.218-.664l17.075-25.652c.407-.615-.015-1.453-.732-1.453Z"
                    fill="#005EA6"
                  />
                  <path
                    d="m187.305 11.74-4.378 28.995c-.086.56.331 1.068.878 1.068h4.403c.729 0 1.35-.551 1.464-1.299l4.317-28.477c.085-.561-.333-1.07-.878-1.07h-4.929a.905.905 0 0 0-.877.782ZM35.948 12.45c.574-3.813-.003-6.407-1.985-8.756C31.783 1.108 27.844 0 22.805 0H8.175c-1.03 0-1.907.78-2.068 1.84L.016 42.052c-.12.794.469 1.51 1.24 1.51h9.031l-.624 4.117C9.56 48.373 10.075 49 10.75 49h7.613c.9 0 1.668-.683 1.809-1.61l.074-.402 1.434-9.467.092-.523c.142-.926.908-1.61 1.809-1.61h1.138c7.375 0 13.15-3.117 14.836-12.14.706-3.768.342-6.915-1.523-9.127-.564-.667-1.266-1.22-2.084-1.672Z"
                    fill="#0070BA"
                  />
                  <path
                    d="M35.948 12.45c.574-3.813-.003-6.407-1.985-8.756C31.783 1.108 27.844 0 22.805 0H8.175c-1.03 0-1.907.78-2.068 1.84L.016 42.052c-.12.794.469 1.51 1.24 1.51h9.031l2.269-14.976-.07.471c.16-1.06 1.03-1.84 2.06-1.84h4.293c8.43 0 15.03-3.566 16.96-13.876.056-.305.105-.6.149-.892Z"
                    fill="#1546A0"
                  />
                  <path
                    d="M14.994 12.5a1.897 1.897 0 0 1 1.018-1.423c.24-.12.508-.186.79-.186h11.469c1.359 0 2.625.093 3.784.287a15.68 15.68 0 0 1 1.876.433c.148.045.292.092.435.141.569.198 1.099.428 1.585.697.574-3.812-.003-6.406-1.985-8.755C31.783 1.108 27.844 0 22.805 0H8.175c-1.03 0-1.907.78-2.068 1.84L.016 42.052c-.12.794.469 1.51 1.24 1.51h9.031l2.269-14.976L14.994 12.5Z"
                    fill="#005EA6"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                class="border border-grey-300 p-1 md:p-2 w-[125px] md:w-[165px] lg:w-[240px lg:px-6] h-[33px] md:h-[44px] lg:h-[65px]"
              >
                <svg
                  class="w-full h-full"
                  viewBox="0 0 115 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.082 18.81c0-1.25 1.022-1.731 2.715-1.731 2.428 0 5.495.737 7.922 2.05V11.6c-2.65-1.057-5.27-1.473-7.922-1.473C4.312 10.126 0 13.521 0 19.194c0 8.843 12.139 7.434 12.139 11.247 0 1.474-1.278 1.954-3.067 1.954-2.651 0-6.037-1.09-8.72-2.563v7.626a22.084 22.084 0 0 0 8.72 1.826c6.645 0 11.213-3.3 11.213-9.036-.032-9.548-12.203-7.85-12.203-11.439ZM29.676 3.716l-7.794 1.666-.032 25.666c0 4.743 3.546 8.235 8.274 8.235 2.62 0 4.536-.48 5.59-1.057v-6.505c-1.022.417-6.07 1.89-6.07-2.852V17.495h6.07V10.67h-6.07l.032-6.953Zm15.973 9.324-.511-2.37h-6.9v28.037h7.986V19.706c1.884-2.467 5.079-2.018 6.07-1.666v-7.37c-1.023-.384-4.76-1.09-6.645 2.371Zm8.593-2.37h8.018v28.037h-8.018V10.67Zm0-2.436 8.018-1.73V0l-8.018 1.698v6.537Zm24.693 1.89c-3.13 0-5.143 1.475-6.261 2.5l-.416-1.987h-7.027V48l7.986-1.698.032-9.068c1.15.833 2.843 2.018 5.654 2.018 5.718 0 10.925-4.614 10.925-14.771-.032-9.293-5.303-14.356-10.893-14.356Zm-1.917 22.078c-1.885 0-3.003-.673-3.77-1.506l-.031-11.888c.83-.93 1.98-1.57 3.801-1.57 2.907 0 4.92 3.268 4.92 7.466 0 4.294-1.981 7.498-4.92 7.498ZM115 24.8c0-8.203-3.961-14.675-11.532-14.675-7.603 0-12.203 6.472-12.203 14.611 0 9.645 5.43 14.515 13.225 14.515 3.802 0 6.677-.865 8.849-2.082V30.76c-2.172 1.09-4.664 1.762-7.826 1.762-3.099 0-5.846-1.09-6.198-4.87h15.621c0-.417.064-2.083.064-2.852Zm-15.78-3.044c0-3.62 2.204-5.127 4.216-5.127 1.949 0 4.025 1.506 4.025 5.127h-8.242Z"
                    fill="#625AFF"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <picture>
        <source
          :srcset="getAssetUrl('image', 'order-method-desktop')"
          media="(min-width: 1180px)"
        />

        <source
          :srcset="getAssetUrl('image', 'order-method-tablet')"
          media="(min-width: 768px)"
        />

        <img
          src="@/assets/images/order-method-mobile.webp"
          alt=""
          aria-hidden="true"
          class="w-full md:w-auto"
        />
      </picture>
    </div>
  </base-popup>
</template>
