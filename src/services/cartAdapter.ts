// Port that tells how exactly should auth be used
import { Cart } from "../domain/cart";

import { CartService } from "@/application/ports/storages/cart";

export function useCart(): CartService {
  const cart = { plans: [] };

  return {
    cart,
    updateCart(cart: Cart) {
      console.log(cart);
    },
    emptyCart() {
      console.log(cart);
    },
  };
}
