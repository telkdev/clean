// Port that tells how exactly should auth be used
import { OrderPlan } from "../../application/orderPlan";

import { usePayment } from "../paymentAdapter";
import { useNotifier } from "../notificationAdapterVue";
import { User } from "@/domain/user";
import { Cart } from "@/domain/cart";

// Adapter to add dependencies for class;
export function orderContainer() {
  const payment = usePayment();
  const notifier = useNotifier();

  return (user: User, cart: Cart) =>
    new OrderPlan(user, cart, { notifier, payment });
}
