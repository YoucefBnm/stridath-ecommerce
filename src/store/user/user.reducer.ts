import { UnknownAction } from "redux";
import {
  authFailed,
  emailSignInStart,
  googleSignInStart,
  signInSuccess,
  signOutStart,
  signOutSuccess,
  signUpStart,
  signUpSuccess,
  updateProfileStart,
  updateProfileSuccess,
} from "./user.action";
import { UserState } from "./user.types";

const INITIAL_STATE: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: UnknownAction) => {
  if (
    emailSignInStart.match(action) ||
    signUpSuccess.match(action) ||
    signUpStart.match(action) ||
    googleSignInStart.match(action) ||
    signOutStart.match(action) ||
    updateProfileStart.match(action)
  ) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (signInSuccess.match(action)) {
    return {
      ...state,
      loading: false,
      currentUser: action.payload,
      error: null,
    };
  }
  if (signOutSuccess.match(action)) {
    return {
      ...state,
      loading: false,
      currentUser: null,
    };
  }
  if (updateProfileSuccess.match(action)) {
    return {
      ...state,
      loading: false,
      currentUser: action.payload,
      error: null,
    };
  }
  if (authFailed.match(action)) {
    return {
      ...state,
      loading: false,
      currentUser: null,
      error: action.payload.code,
    };
  }

  return state;
};
