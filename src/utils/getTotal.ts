/** @format */

import { CartType } from "../types/CartType";

export const getTotal = (cart: CartType) => {
  let total = 0;
  cart.products.map((product) => {
    total += product.product.price * product.quantity;
  });
  return total.toFixed(2);
};
