/** @format */

import { ProductType } from "./Product";
export type CartProduct = {
  product: ProductType;
  quantity: number;
};
export type CartType = {
  cartId: string;
  userId: string;
  products: CartProduct[];
};
