import { SearchProductsStateType } from "./searchProducts.types";
import { createSelector } from "reselect";

const selectSearchProductsReducer = (state: {
  searchProducts: SearchProductsStateType;
}): SearchProductsStateType => state.searchProducts;

export const selectSearchProductsResults = createSelector(
  [selectSearchProductsReducer],
  (searchProductsSlice) => searchProductsSlice.searchResults
);

export const selectSearchProductsCount = createSelector(
  [selectSearchProductsReducer],
  (searchProductsSlice) => searchProductsSlice.searchCount
);

export const selectSearchProductsLoading = createSelector(
  [selectSearchProductsReducer],
  (searchProductsSlice) => searchProductsSlice.isSearching
);

export const selectSearchProductsLoadingMore = createSelector(
  [selectSearchProductsReducer],
  (searchProductsSlice) => searchProductsSlice.isLoadingMore
);

export const selectSearchProductsLastItem = createSelector(
  [selectSearchProductsReducer],
  (searchProductsSlice) => searchProductsSlice.lastVisible
);
