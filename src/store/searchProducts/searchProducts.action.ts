import { createAction, withMatcher } from "@/utils/reducer.utils";
import {
  SEARCH_PRODUCTS_TYPES,
  SearchMoreStart,
  SearchProductsFailed,
  SearchProductsStart,
} from "./searchProducts.types";
import { DocumentData } from "firebase/firestore";
import { SearchProductsResponse } from "@/firebase/types";

export const searchProductsStart = withMatcher(
  (searchQuery: string, limitNumber: number): SearchProductsStart =>
    createAction(SEARCH_PRODUCTS_TYPES.SEARCH_PRODUCTS_START, {
      searchQuery,
      limitNumber,
    })
);
export const searchMoreProductsStart = withMatcher(
  (
    searchQuery: string,
    limitNumber: number,
    lastVisible: DocumentData | undefined
  ): SearchMoreStart =>
    createAction(SEARCH_PRODUCTS_TYPES.SEARCH_MORE_PRODUCTS_START, {
      searchQuery,
      limitNumber,
      lastVisible,
    })
);

export const searchProductsSuccess = withMatcher(
  (response: SearchProductsResponse) =>
    createAction(SEARCH_PRODUCTS_TYPES.SEARCH_PRODUCTS_SUCCESS, { response })
);
export const searchMoreProductsSuccess = withMatcher(
  (response: SearchProductsResponse) =>
    createAction(SEARCH_PRODUCTS_TYPES.SEARCH_MORE_PRODUCTS_SUCCESS, {
      response,
    })
);

export const searchProductsFailed = withMatcher(
  (error: Error): SearchProductsFailed =>
    createAction(SEARCH_PRODUCTS_TYPES.SEARCH_PRODUCTS_FAILED, error)
);
