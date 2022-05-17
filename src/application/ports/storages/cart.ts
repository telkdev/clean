/* eslint-disable no-unused-vars */
import { Cart } from "../../../domain/cart";

export interface CartService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}
