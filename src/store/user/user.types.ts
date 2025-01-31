import { ActionWithPayload } from "@/utils/reducer.utils";
import { Action } from "redux";

import { AuthError, User } from "firebase/auth";
import { AdditionalInfo, UserData } from "@/firebase/types";

export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = "user/SET_CURRENT_USER",
  CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
  GOOGLE_SIGN_IN_START = "user/GOOGLE_SIGN_IN_START",

  UPDATE_PROFILE_START = "user/UPDATE_PROFILE_START",
  UPDATE_PROFILE_SUCCESS = "user/UPDATE_PROFILE_SUCCESS",

  EMAIL_SIGN_IN_START = "user/EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS = "user/SIGN_IN_SUCCESS",
  SIGN_UP_START = "user/SIGN_UP_START",
  SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS",
  SIGN_OUT_START = "user/SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "user/SIGN_OUT_SUCCESS",

  AUTH_FAILED = "user/AUTH_FAILED",
}

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type GoogleSignStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;
export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalInfo: AdditionalInfo }
>;
export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;
export type UpdateProfileStart = ActionWithPayload<
  USER_ACTION_TYPES.UPDATE_PROFILE_START,
  { password: string; displayName?: string; email?: string }
>;
export type UpdateProfileSuccess = ActionWithPayload<
  USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS,
  { currentUser: User }
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type AuthFailed = ActionWithPayload<
  USER_ACTION_TYPES.AUTH_FAILED,
  AuthError
>;

export type UserState = {
  readonly currentUser: UserData | null;
  readonly loading: boolean;
  readonly error: Error | null;
};
