/* eslint-disable no-unused-vars */
import { Ref } from "vue";
import { notificationTypesEnum } from "@/enums/notificationTypes";

export interface NotificationItem {
  id: string;
  text: string;
  type: notificationTypesEnum;
}

export interface NotificationItemContent {
  text: string;
  type: notificationTypesEnum;
}

export interface NotificationService {
  messagesArray: Ref<NotificationItem[]>;
  addNotificationItem(notificationItem: NotificationItem): void;
  handleAddNotification(
    notificationItem: NotificationItemContent,
    timeBeforeTermination?: number
  ): void;
  deleteNotificationItem(index: number): void;
}
