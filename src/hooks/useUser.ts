/** @format */

import { createContext, useContext } from "react";
import { UserType } from "../types/User";
type userContextType = {
  isLogin: boolean;
  setIsLogin: (e: boolean) => void;
  user: UserType;
  setUser: (e: UserType) => void;
  fetchUserLoading: boolean;
  setFetchUserLoading: (e: boolean) => void;
};
export const userContext = createContext<userContextType>(
  {} as userContextType
);
export const useUser = () => {
  const context = useContext(userContext);
  if (context) return context;
  else throw new Error("Something went Wrong!");
};
