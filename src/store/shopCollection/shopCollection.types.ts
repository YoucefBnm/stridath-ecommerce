import {
  SortOptionsTypes,
  fetchSuccessResponse,
  filtersType,
} from "@/firebase/types";
import { ActionWithPayload } from "@/utils/reducer.utils";
import { DocumentData } from "firebase/firestore";
import { Params } from "react-router-dom";

export enum SHOP_COLLECTION_TYPES {
  FETCH_PRODUCTS_START = "shopCollection/FETCH_PRODUCTS_START",
  FETCH_PRODUCTS_SUCCESS = "shopCollection/FETCH_PRODUCTS_SUCCESS",

  LOAD_MORE_PRODUCTS_START = "shopCollection/LOAD_MORE_PRODUCTS_START",
  LOAD_MORE_PRODUCTS_SUCCESS = "shopCollection/LOAD_MORE_PRODUCTS_SUCCESS",

  FETCH_PRODUCTS_FAILED = "shopCollection/FETCH_PRODUCTS_FAILED",
}

export type FetchProductsStart = ActionWithPayload<
  SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START,
  {
    params: Readonly<
      Params<"gender" | "category" | "brand" | "badge" | "sizes" | "colors">
    >;
    sortOption: keyof SortOptionsTypes;
    limitNumber: number;
    filters: filtersType;
  }
>;
export type LoadMoreStart = ActionWithPayload<
  SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START,
  {
    params: Readonly<Params<string>>;
    sortOption: keyof SortOptionsTypes;
    limitNumber: number;
    filters: filtersType;
    lastVisible: DocumentData | undefined;
  }
>;

export type FetchProductsSuccess = ActionWithPayload<
  SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  { response: fetchSuccessResponse }
>;
export type LoadMoreProductsSuccess = ActionWithPayload<
  SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_SUCCESS,
  { response: fetchSuccessResponse }
>;

export type FetchFailed = ActionWithPayload<
  SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_FAILED,
  Error
>;
