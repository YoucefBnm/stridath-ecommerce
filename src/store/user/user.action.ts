import { createAction, withMatcher } from "@/utils/reducer.utils";
import {
  AuthFailed,
  CheckUserSession,
  EmailSignInStart,
  GoogleSignStart,
  SetCurrentUser,
  SignInSuccess,
  SignOutStart,
  SignOutSuccess,
  SignUpStart,
  SignUpSuccess,
  UpdateProfileStart,
  UpdateProfileSuccess,
  USER_ACTION_TYPES,
} from "./user.types";
import { AdditionalInfo, UserData } from "@/firebase/types";
import { AuthError, User } from "firebase/auth";

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);
export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);
export const googleSignInStart = withMatcher(
  (): GoogleSignStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);
export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);
export const updateProfileStart = withMatcher(
  (
    password: string,
    displayName?: string,
    email?: string
  ): UpdateProfileStart =>
    createAction(USER_ACTION_TYPES.UPDATE_PROFILE_START, {
      password,
      displayName,
      email,
    })
);
export const updateProfileSuccess = withMatcher(
  (currentUser: User): UpdateProfileSuccess =>
    createAction(USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS, { currentUser })
);
export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);
export const signUpSuccess = withMatcher(
  (user: User, additionalInfo: AdditionalInfo): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo })
);
export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);
export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const authFailed = withMatcher(
  (error: AuthError): AuthFailed =>
    createAction(USER_ACTION_TYPES.AUTH_FAILED, error)
);
