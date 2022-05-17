import { Order } from "@/domain/order";

export interface OrderStorageService {
  orders: Order[];
  // eslint-disable-next-line no-unused-vars
  updateOrder(orders: Order[]): void;
}
