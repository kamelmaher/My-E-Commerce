/** @format */

import { ProductType } from "./Product";

export type CartType = {
  cartId: string;
  userId: string;
  products: ProductType[];
};
