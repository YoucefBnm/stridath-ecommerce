import { SearchProductsResponse } from "@/firebase/types";
import { ProductProps } from "@/types";
import { ActionWithPayload } from "@/utils/reducer.utils";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

export enum SEARCH_PRODUCTS_TYPES {
  SEARCH_PRODUCTS_START = "searchProducts/SEARCH_PRODUCTS_START",
  SEARCH_MORE_PRODUCTS_START = "searchProducts/SEARCH_MORE_PRODUCTS_START",

  SEARCH_PRODUCTS_SUCCESS = "searchProducts/SEARCH_PRODUCTS_SUCCESS",
  SEARCH_MORE_PRODUCTS_SUCCESS = "searchProducts/SEARCH_MORE_PRODUCTS_SUCCESS",
  SEARCH_PRODUCTS_FAILED = "searchProducts/SEARCH_PRODUCTS_FAILED",
}

export interface SearchProductsStateType {
  readonly searchResults: ProductProps[];
  readonly lastVisible: undefined | DocumentSnapshot;
  readonly searchCount: null | number;
  readonly isSearching: boolean;
  readonly error: null | string;
}

export type SearchProductsStart = ActionWithPayload<
  SEARCH_PRODUCTS_TYPES.SEARCH_PRODUCTS_START,
  { searchQuery: string; limitNumber: number }
>;
export type SearchMoreStart = ActionWithPayload<
  SEARCH_PRODUCTS_TYPES.SEARCH_MORE_PRODUCTS_START,
  {
    searchQuery: string;
    limitNumber: number;
    lastVisible: DocumentData | undefined;
  }
>;

export type SearchProductsSuccess = ActionWithPayload<
  SEARCH_PRODUCTS_TYPES.SEARCH_PRODUCTS_SUCCESS,
  { response: SearchProductsResponse }
>;
export type SearchMoreSuccess = ActionWithPayload<
  SEARCH_PRODUCTS_TYPES.SEARCH_MORE_PRODUCTS_SUCCESS,
  { response: SearchProductsResponse }
>;

export type SearchProductsFailed = ActionWithPayload<
  SEARCH_PRODUCTS_TYPES.SEARCH_PRODUCTS_FAILED,
  Error
>;
