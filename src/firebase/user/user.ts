import { auth, db, googleProvider } from "../services";
import {
  EmailAuthProvider,
  NextOrObserver,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  // signInWithRedirect,
  signOut,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { AdditionalInfo, UserData } from "../types";
import {
  QueryDocumentSnapshot,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "sonner";

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const resetPassword = (email: string) => {
  console.log(email);
  return sendPasswordResetEmail(auth, email);
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
      // toast.error(`createUserDocFromAuth: ${error}`)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithPopup(auth, googleProvider);

export const updateCurrentUserInfo = async (
  password: string,
  displayName?: string,
  email?: string
) => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error("No user is currently logged in");
  }

  // Prompt the user to enter their current password for reauthentication
  if (!password) {
    toast.info("Please enter your current password");
  }

  // Reauthenticate the user
  const credential = EmailAuthProvider.credential(currentUser.email!, password);
  await reauthenticateWithCredential(currentUser, credential);

  const collectionRef = collection(db, "users");
  const docRef = doc(collectionRef, currentUser.uid);

  if (email) {
    await updateEmail(currentUser, email);
    await updateDoc(docRef, { email });
  }

  if (displayName) {
    await updateProfile(currentUser, { displayName });
    await updateDoc(docRef, { displayName });
  }

  // if (password) {
  //   await updatePassword(currentUser, password);
  // }

  return currentUser;
};
