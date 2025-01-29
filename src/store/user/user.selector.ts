import { createSelector } from "reselect";
import { UserState } from "./user.types";

const selectUserReducer = (state: { user: UserState }): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser
);

export const selectLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.loading
);

export const selectError = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.error
);
