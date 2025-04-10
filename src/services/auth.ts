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
  let signUpError;
  try {
    setIsLoding(true);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential && userCredential.user)
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        age,
        email,
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    signUpError = error.message
      .replace(/[.)]/g, "")
      .trim()
      .split("/")[1]
      .split("-")
      .join(" ");
  }
  setIsLoding(false);
  return { signUpError };
};

export const LoginUser = async (
  email: string,
  password: string,
  setIsLoading: (e: boolean) => void
) => {
  let loginError, user;
  try {
    setIsLoading(true);
    const myUser = await signInWithEmailAndPassword(auth, email, password);
    user = myUser.user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    loginError = err.message
      .replace(/[.)]/g, "")
      .trim()
      .split("/")[1]
      .split("-")
      .join(" ");
  }
  setIsLoading(false);
  return { user, loginError };
};

export const getUserFromDb = async (userId: string) => {
  let fetchUserError, user;
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      user = userDoc.data();
    } else {
      fetchUserError = "User Not Found";
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    fetchUserError = error.message;
  }
  return { fetchUserError, user };
};
