/** @format */

import { createContext, useContext } from "react";
import { CartType } from "../types/CartType";
import { ProductType } from "../types/Product";
type cartContextType = {
  carts: CartType[];
  getUserCart: (userId: string) => CartType;
  addToCart: (product: ProductType, userId: string) => void;
  createCart: (userId: string) => void;
  checkInCart: (userId: string, productId: number) => boolean;
  removeFromCart: (productId: number, cartId: string) => void;
};
export const cartContext = createContext<cartContextType>(
  {} as cartContextType
);
export const useCart = () => {
  const context = useContext(cartContext);
  if (context) return context;
  else throw new Error();
};
