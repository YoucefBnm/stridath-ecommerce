import { call, all, takeLatest, put } from "typed-redux-saga";
import { searchProducts } from "@/firebase/products/searchProducts";
import {
  searchMoreProductsSuccess,
  searchProductsFailed,
  searchProductsSuccess,
} from "./searchProducts.action";
import { SEARCH_PRODUCTS_TYPES } from "./searchProducts.types";
import { TakeableChannel } from "redux-saga";
import { SearchProductsOptions } from "@/firebase/types";

type SearchPayload = { payload: SearchProductsOptions };

function* searchProductsAsync({
  payload: { searchQuery, limitNumber, lastVisible },
}: SearchPayload) {
  try {
    const getSearchResults = yield* call(searchProducts, {
      searchQuery,
      limitNumber,
      lastVisible,
    });
    yield* put(searchProductsSuccess(getSearchResults));
  } catch (error) {
    yield* put(searchProductsFailed(error as Error));
  }
}

function* searchMoreProductsAsync({
  payload: { searchQuery, limitNumber, lastVisible },
}: SearchPayload) {
  try {
    const loadMore = yield* call(searchProducts, {
      searchQuery,
      limitNumber,
      lastVisible,
    });
    yield* put(searchMoreProductsSuccess(loadMore));
  } catch (error) {
    yield* put(searchProductsFailed(error as Error));
  }
}

function* onSearchProducts() {
  yield* takeLatest(
    SEARCH_PRODUCTS_TYPES.SEARCH_PRODUCTS_START as unknown as TakeableChannel<unknown>,
    searchProductsAsync
  );
}

function* onSearchMoreProducts() {
  yield* takeLatest(
    SEARCH_PRODUCTS_TYPES.SEARCH_MORE_PRODUCTS_START as unknown as TakeableChannel<unknown>,
    searchMoreProductsAsync
  );
}

export function* searchProductsSagas() {
  yield* all([call(onSearchProducts), call(onSearchMoreProducts)]);
}
