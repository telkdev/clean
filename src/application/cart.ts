import { Plan } from "../domain/product";
import { User } from "../domain/user";
import { addProduct } from "../domain/cart";

import { CartService } from "./ports/storages/cart";

export type CartDependencies = {
  cartAdapter: CartService;
};

export class Cart {
  private readonly cartAdapter;

  constructor({ cartAdapter }: CartDependencies) {
    this.cartAdapter = cartAdapter;
  }

  addToCart(user: User, product: Plan) {
    // some validation
    const { cart } = this.cartAdapter;

    const updated = addProduct(cart, product);

    this.cartAdapter.updateCart(updated);
  }
}
