/* eslint-disable no-unused-vars */
import { PaymentService } from "../application/ports/payment";
import {useApi} from "./apiAdapterVue";

export function usePayment(): PaymentService {
  return {
    async tryPay(amount: number) {
      // stub
      const res = await useApi().post("/posts", {});
      return false;
    },
  };
}
