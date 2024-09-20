import { UnknownAction } from "redux";
import { ShopCollectionStateType } from "../types";
import {
  fetchFailed,
  fetchProductsStart,
  fetchProductsSuccess,
  loadMoreProductsSuccess,
  loadMoreStart,
} from "./shopCollection.action";

const SHOP_COLLECTION_INITIAL_STATE: ShopCollectionStateType = {
  products: [],
  lastVisible: undefined,
  count: null,
  selectedSortOption: "suggested",
  isFetching: false,
  error: null,
};

export const shopCollectionReducer = (
  state = SHOP_COLLECTION_INITIAL_STATE,
  action: UnknownAction
) => {
  if (fetchProductsStart.match(action) || loadMoreStart.match(action)) {
    return {
      ...state,
      isFetching: true,
      error: null,
    };
  }

  if (fetchProductsSuccess.match(action)) {
    return {
      ...state,
      isFetching: false,
      error: null,
      products: action.payload.response.products,
      lastVisible: action.payload.response.lastVisibleItem,
      count: action.payload.response.count,
    };
  }
  if (loadMoreProductsSuccess.match(action)) {
    return {
      ...state,
      isFetching: false,
      error: null,
      products: [...state.products, ...action.payload.response.products],
      lastVisible: action.payload.response.lastVisibleItem,
      count: action.payload.response.count,
    };
  }

  if (fetchFailed.match(action)) {
    return {
      ...state,
      error: action.payload.message,
    };
  }

  return state;
};
