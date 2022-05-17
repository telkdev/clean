import { User } from "../domain/user";
import { Cart } from "../domain/cart";
import { createOrder } from "../domain/order";

import { notificationTypesEnum } from "../enums/notificationTypes";

import { NotificationService } from "../application/ports/notificationVue";
import { PaymentService } from "../application/ports/payment";

export type OrderDependencies = {
  notifier: NotificationService;
  payment: PaymentService;
};

export class OrderPlan {
  private readonly notifier;
  private readonly payment;
  private readonly user;
  private readonly cart;

  constructor(
    user: User,
    cart: Cart,
    { notifier, payment }: OrderDependencies
  ) {
    this.user = user;
    this.cart = cart;
    this.notifier = notifier;
    this.payment = payment;
  }

  async orderPlan() {
    const order = createOrder(this.user, this.cart);

    const paid = await this.payment.tryPay(order.total);

    if (!paid)
      return this.notifier.handleAddNotification({
        text: "Please pay for the plan",
        type: notificationTypesEnum.Error,
      });

    // And here we can save the order on the server
  }
}
