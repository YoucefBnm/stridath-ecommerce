import { createSelector } from "reselect";
import { ShopCollectionStateType } from "../types";

const selectShopCollectionReducer = (state: {
  shopCollection: ShopCollectionStateType;
}): ShopCollectionStateType => state.shopCollection;

export const selectShopCollectionProducts = createSelector(
  [selectShopCollectionReducer],
  (shopCollectionSlice) => shopCollectionSlice.products
);

export const selectLastVisible = createSelector(
  [selectShopCollectionReducer],
  (shopCollectionSlice) => shopCollectionSlice.lastVisible
);

export const selectIsFetching = createSelector(
  [selectShopCollectionReducer],
  (shopCollectionSlice) => shopCollectionSlice.isFetching
);

export const selectIsLoadingMore = createSelector(
  [selectShopCollectionReducer],
  (shopCollectionSlice) => shopCollectionSlice.isLoadingMore
);

export const selectCount = createSelector(
  [selectShopCollectionReducer],
  (shopCollectionSlice) => shopCollectionSlice.count
);
