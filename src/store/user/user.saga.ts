import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "@/firebase/user/user";

import { call, all, takeLatest, put } from "typed-redux-saga";
import {
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
  USER_ACTION_TYPES,
} from "./user.types";
import { AuthError, User } from "firebase/auth";
import {
  authFailed,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
} from "./user.action";
import { AdditionalInfo } from "@/firebase/types";
import { toast } from "sonner";
import { isAuthError } from "@/utils/authFormSchema.utils";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInfo?: AdditionalInfo
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );

    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
    toast.success("Signin successfully.");
  } catch (error) {
    yield* put(authFailed(error as AuthError));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(authFailed(error as AuthError));
    toast.error("Auth Failed, try again");
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
      toast.success("Logged in successfully");
    }
  } catch (error) {
    yield* put(authFailed(error as AuthError));

    if (isAuthError(error)) {
      if (error.code === "auth/user-not-found") {
        toast.error("User not found");
      }
      if (error.code === "auth/wrong-password") {
        toast.error("Wrong password");
      }
      if (error.code === "auth/too-many-requests") {
        toast.error("too many requests !!");
      }
    }
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(authFailed(error as AuthError));
    if (isAuthError(error)) {
      toast.error(error.code);
    } else {
      console.log("Something went wrong.");
    }
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(authFailed(error as AuthError));
    if (isAuthError(error)) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use");
      }
      if (error.code === "auth/weak-password") {
        toast.error("weak password, password should be at least 6 characters.");
      }
    } else {
      console.log("Something went wrong.");
    }
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
    toast.success("Successfully signout");
  } catch (error) {
    yield* put(authFailed(error as AuthError));
    if (isAuthError(error)) {
      toast.error(error.code);
    } else {
      console.log("Something went wrong.");
    }
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalInfo },
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalInfo);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
