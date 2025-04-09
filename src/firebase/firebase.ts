/** @format */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAD_fGI6BfqLuaw4ODbjSxhBoNaYPAnjY",
  authDomain: "my-ecommerce-70c1d.firebaseapp.com",
  projectId: "my-ecommerce-70c1d",
  storageBucket: "my-ecommerce-70c1d.firebasestorage.app",
  messagingSenderId: "386531876770",
  appId: "1:386531876770:web:e74a7d79609b059fd01cfb",
  measurementId: "G-BMXB3ESKFM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
