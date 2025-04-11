/** @format */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
export const signUp = async (
  email: string,
  password: string,
  name: string,
  age: number,
  setIsLoding: (e: boolean) => void
) => {
  try {
    setIsLoding(true);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential && userCredential.user) {
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        age,
        email,
      });
    }
    return { SignUpError: null, user: userCredential.user };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const signUpError = error.message
      .replace(/[.)]/g, "")
      .trim()
      .split("/")[1]
      .split("-")
      .join(" ");
    return { signUpError, user: null };
  } finally {
    setIsLoding(false);
  }
};

export const LoginUser = async (
  email: string,
  password: string,
  setIsLoading: (e: boolean) => void
) => {
  try {
    setIsLoading(true);
    const myUser = await signInWithEmailAndPassword(auth, email, password);
    const user = myUser.user;
    const idToken = await user.getIdToken();
    setCookie("authToken", idToken, 4);
    return { user, loginError: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const loginError = err.message
      .replace(/[.)]/g, "")
      .trim()
      .split("/")[1]
      .split("-")
      .join(" ");
    return { user: null, loginError };
  } finally {
    setIsLoading(false);
  }
};

export const getUserFromDb = async (userId: string) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const user = userDoc.data();
      return { user, fetchUserError: null };
    } else {
      const fetchUserError = "User Not Found";
      return { user: null, fetchUserError };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const fetchUserError = error.message;
    return { user: null, fetchUserError };
  }
};

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;secure;samesite=strict`;
};

export const getCookie = (name: string) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const logOut = () => {
  document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  window.location.reload();
};
