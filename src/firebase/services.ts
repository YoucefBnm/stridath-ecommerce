import { getFirestore } from "firebase/firestore";
import app from "./config";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

export const db = getFirestore(app);

export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();
