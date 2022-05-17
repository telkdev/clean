export interface PaymentService {
  // eslint-disable-next-line no-unused-vars
  tryPay(amount: number): Promise<boolean>;
}