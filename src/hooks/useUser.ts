/** @format */

import { createContext, useContext } from "react";
import { UserType } from "../types/User";
type userContextType = {
  isLogin: boolean;
  setIsLogin: (e: boolean) => void;
  id: string;
  setId: (id: string) => void;
  user: UserType;
};
export const userContext = createContext<userContextType>(
  {} as userContextType
);
export const useUser = () => {
  const context = useContext(userContext);
  if (context) return context;
  else throw new Error("Something went Wrong!");
};
