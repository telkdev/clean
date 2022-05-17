/* eslint-disable no-unused-vars */
import { totalPrice } from "./product";
import { Cart } from "./cart";
import { User } from "./user";

export enum orderStatusEnum {
  New = "new",
  Completed = "completed",
}

export type Order = {
  user: string;
  status: orderStatusEnum;
  total: number;
};

// Returning new order for specific user;
export function createOrder(user: User, cart: Cart): Order {
  return {
    user: user.id,
    status: orderStatusEnum.New,
    total: totalPrice(cart.plans),
  };
}
