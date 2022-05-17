<script lang="ts">
import { defineComponent } from "vue";

import { NotificationService } from "@/application/ports/notificationVue";

import { useNotifier } from "@/services/notificationAdapterVue";

import { useNotificationUtils } from "@/composables/useNotificationUtils";

export default defineComponent({
  setup() {
    const { deleteNotificationItem, messagesArray }: NotificationService =
      useNotifier();

    const { setNotificationClassByType } = useNotificationUtils();

    return {
      deleteNotificationItem,
      messagesArray,
      setNotificationClassByType,
    };
  },
});
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 p-4">
    <ul class="space-y-2 md:space-y-5">
      <li
        v-for="(notification, index) of messagesArray"
        :key="index"
        class="mx-auto container p-2 md:p-5 rounded-xl flex items-center justify-between gap-2 md:gap-5"
        :class="[setNotificationClassByType(notification.type)]"
      >
        <div>
          <h2
            class="text-xl md:text-3xl font-medium text-black mb-1 capitalize md:mb-2"
          >
            {{ notification.type }}:
          </h2>
          <p class="text-base md:text-lg text-black">
            {{ notification.text }}
          </p>
        </div>
        <button
          aria-label="Close notification"
          class="p-1 text-darkblue-900 hover:text-lightblue-100"
          @click="deleteNotificationItem(index)"
        >
          <svg
            class="w-4 h-4 md:w-5 md:h-5 fill-current pointer-events-none"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              d="M18.973 16.923 3.076 1.026c-.523-.524-1.513-.538-2.05 0-.539.538-.524 1.528 0 2.05l15.896 15.898c.523.523 1.513.538 2.051 0 .539-.538.524-1.528 0-2.051Z"
            />
            <path
              d="M3.077 18.973 18.974 3.076c.523-.523.538-1.513 0-2.05-.538-.539-1.528-.524-2.05 0L1.025 16.921c-.523.523-.538 1.513 0 2.051.538.539 1.528.524 2.051 0Z"
            />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>
