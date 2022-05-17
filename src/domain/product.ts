/* eslint-disable no-unused-vars */
export enum productPricesEnum {
  Bronze = 20,
  Silver = 50,
  Gold = 75,
}

export type Product = {
  title: string;
  description: string;
  price: productPricesEnum;
  activeColor: string;
};

export function totalPrice(products: Product[]): number {
  return products.reduce((total, { price }) => total + price, 0);
}
