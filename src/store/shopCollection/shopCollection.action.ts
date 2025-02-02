import { SortOptionsTypes, filtersType } from "@/firebase/types";
import {
  FetchFailed,
  FetchProductsStart,
  FetchProductsSuccess,
  LoadMoreStart,
  SHOP_COLLECTION_TYPES,
} from "./shopCollection.types";
import { fetchSuccessResponse } from "@/firebase/types";
import { Params } from "react-router-dom";
import { DocumentData } from "firebase/firestore";
import { createAction, withMatcher } from "@/utils/reducer.utils";

export const fetchProductsStart = withMatcher(
  (
    params: Readonly<
      Params<
        "gender" | "sport" | "brand" | "sizes" | "colors" | "featured" | "sale"
      >
    >,
    sortOption: keyof SortOptionsTypes,
    limitNumber: number,
    filters: filtersType
  ): FetchProductsStart =>
    createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START, {
      params,
      sortOption,
      limitNumber,
      filters,
    })
);

export const loadMoreStart = withMatcher(
  (
    params: Readonly<Params<string>>,
    sortOption: keyof SortOptionsTypes,
    limitNumber: number,
    filters: filtersType,
    lastVisible: DocumentData | undefined
  ): LoadMoreStart =>
    createAction(SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START, {
      params,
      sortOption,
      limitNumber,
      filters,
      lastVisible,
    })
);

export const fetchProductsSuccess = withMatcher(
  (response: fetchSuccessResponse): FetchProductsSuccess =>
    createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_SUCCESS, { response })
);

export const loadMoreProductsSuccess = withMatcher(
  (response: fetchSuccessResponse) =>
    createAction(SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_SUCCESS, { response })
);

export const fetchFailed = withMatcher(
  (error: Error): FetchFailed =>
    createAction(SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_FAILED, error)
);
