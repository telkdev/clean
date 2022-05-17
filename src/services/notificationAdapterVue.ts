// services/notificationAdapter.ts
import {
  NotificationService,
  NotificationItem,
  NotificationItemContent,
} from "../application/ports/notificationVue";

import { Ref, ref } from "vue";

import { useHelperUtils } from "@/composables/useHelperUtils";

const messagesArray: Ref<NotificationItem[]> = ref([]);

export function useNotifier(): NotificationService {
  function handleAddNotification(
    notificationItemContent: NotificationItemContent, timeBeforeTermination = 4000 
  ): void {
    if (isNotificationItemExist(notificationItemContent)) {
      return;
    }

    const { generateUniqueId } = useHelperUtils();

    const notificationItem: NotificationItem = {
      ...notificationItemContent,
      id: generateUniqueId(),
    };

    addNotificationItem(notificationItem);

    const timeout = setTimeout(() => {
      const item = findNotificationItemById(notificationItem.id);

      if (item) {
        deleteNotificationItem(messagesArray.value.indexOf(item));
      }
      clearTimeout(timeout);
    }, timeBeforeTermination);
  }

  function addNotificationItem(notificationItem: NotificationItem) {
    messagesArray.value.push(notificationItem);
  }

  function deleteNotificationItem(index: number) {
    messagesArray.value.splice(index, 1);
  }

  function findNotificationItemById(
    id: NotificationItem["id"]
  ): NotificationItem | undefined {
    return messagesArray.value.find((el) => el.id === id);
  }

  function findNotificationItemByText(
    text: NotificationItem["text"]
  ): NotificationItem | undefined {
    return messagesArray.value.find((el) => el.text === text);
  }

  function isNotificationItemExist(
    notificationItemContent: NotificationItemContent
  ): boolean {
    return findNotificationItemByText(notificationItemContent.text) ? true : false;
  }

  return {
    handleAddNotification,
    messagesArray,
    addNotificationItem,
    deleteNotificationItem,
  };
}
