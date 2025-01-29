import {
  searchMoreProductsStart,
  searchMoreProductsSuccess,
  searchProductsFailed,
  searchProductsStart,
  searchProductsSuccess,
} from "./searchProducts.action";
import { SearchProductsStateType } from "./searchProducts.types";
import { UnknownAction } from "redux";

const SEARCH_PRODUCTS_INITIAL_STATE: SearchProductsStateType = {
  searchResults: [],
  lastVisible: undefined,
  searchCount: null,
  isSearching: false,
  isLoadingMore: false,
  error: null,
};

export const searchProductsReducer = (
  state = SEARCH_PRODUCTS_INITIAL_STATE,
  action: UnknownAction
) => {
  if (searchProductsStart.match(action)) {
    return {
      ...state,
      isSearching: true,
      error: null,
    };
  }

  if (searchMoreProductsStart.match(action)) {
    return {
      ...state,
      isLoadingMore: true,
      error: null,
    };
  }
  if (searchProductsSuccess.match(action)) {
    return {
      ...state,
      isSearching: false,
      error: null,
      searchResults: action.payload.response.products,
      lastVisible: action.payload.response.lastVisibleItem,
      searchCount: action.payload.response.count,
    };
  }

  if (searchMoreProductsSuccess.match(action)) {
    return {
      ...state,
      isSearching: false,
      error: null,
      searchResults: [
        ...state.searchResults,
        ...action.payload.response.products,
      ],
      lastVisible: action.payload.response.lastVisibleItem,
    };
  }
  if (searchProductsFailed.match(action)) {
    return {
      ...state,
      isSearching: false,
      error: action.payload.message,
    };
  }

  return state;
};
