import { fetchProducts } from "@/firebase/products/fetchProducts";
import { call, all, takeLatest, put } from "typed-redux-saga";
import {
  fetchFailed,
  fetchProductsSuccess,
  loadMoreProductsSuccess,
} from "./shopCollection.action";
import { SHOP_COLLECTION_TYPES } from "./shopCollection.types";
import { fetchOptions } from "@/firebase/types";
import { TakeableChannel } from "redux-saga";

type fetchAsyncPayload = {
  payload: fetchOptions;
};

function* fetchShopProductsAsync({
  payload: { params, sortOption, limitNumber, filters, lastVisible },
}: fetchAsyncPayload) {
  try {
    const fetchShopProducts = yield* call(fetchProducts, {
      params,
      sortOption,
      limitNumber,
      filters,
      lastVisible,
    });
    yield* put(fetchProductsSuccess(fetchShopProducts));
  } catch (error) {
    yield* put(fetchFailed(error as Error));
  }
}

function* loadProductsAsync({
  payload: { params, sortOption, limitNumber, filters, lastVisible },
}: fetchAsyncPayload) {
  try {
    const loadProducts = yield* call(fetchProducts, {
      params,
      sortOption,
      limitNumber,
      filters,
      lastVisible,
    });
    yield* put(loadMoreProductsSuccess(loadProducts));
  } catch (error) {
    yield* put(fetchFailed(error as Error));
  }
}

function* onFetchProducts() {
  yield* takeLatest(
    SHOP_COLLECTION_TYPES.FETCH_PRODUCTS_START as unknown as TakeableChannel<unknown>,
    fetchShopProductsAsync
  );
}

function* onLoadMoreProducts() {
  yield* takeLatest(
    SHOP_COLLECTION_TYPES.LOAD_MORE_PRODUCTS_START as unknown as TakeableChannel<unknown>,
    loadProductsAsync
  );
}

export function* shopCollectionSagas() {
  yield* all([call(onFetchProducts), call(onLoadMoreProducts)]);
}
