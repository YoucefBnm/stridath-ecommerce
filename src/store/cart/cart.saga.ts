import { call, all, takeLatest, put } from "typed-redux-saga";
import {
  AddCartItemStart,
  CART_ACTION_TYPES,
  CartItemProps,
  ClearCartItemStart,
  RemoveCartItemStart,
  SetCartItemsStart,
} from "./cart.types";
import { promiseInterval } from "@/utils/promiseInterval.utils";
import {
  addCartItemSuccess,
  clearCartItemSuccess,
  removeCartItemSuccess,
  setCartItemsFailed,
  setCartItemsSuccess,
} from "./cart.action";
import {
  addCartItem,
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "@/utils/cart.utils";
import { toast } from "sonner";

function* addCartItemAsync({
  payload: { cartItems, itemToAdd, selectedColor, selectedSize },
}: SetCartItemsStart) {
  try {
    yield promiseInterval();
    const newCartItems = yield* call(addItemToCart, {
      cartItems,
      itemToAdd,
      selectedColor,
      selectedSize,
    });

    yield put(setCartItemsSuccess(newCartItems));
    toast.success("Item Added to cart.");
  } catch (error) {
    yield put(setCartItemsFailed(error as Error));
    toast.error("Select size to add item to cart.");
  }
}

function* increaseItemQtyAsync({
  payload: { cartItems, itemTarget },
}: AddCartItemStart) {
  try {
    yield promiseInterval();
    const newCartItems = yield* call(addCartItem, { cartItems, itemTarget });

    yield put(addCartItemSuccess(newCartItems as CartItemProps[]));
    toast.success("Item added to cart.");
  } catch (error) {
    yield put(setCartItemsFailed(error as Error));
    toast.error("Could not add item to cart");
  }
}

function* removeCartItemAsync({
  payload: { cartItems, itemTarget },
}: RemoveCartItemStart) {
  try {
    yield promiseInterval();
    const newCartItems = yield* call(removeItemFromCart, {
      cartItems,
      itemTarget,
    });
    yield put(removeCartItemSuccess(newCartItems as CartItemProps[]));
    toast.info("Item removed from cart.");
  } catch (error) {
    yield put(setCartItemsFailed(error as Error));
    toast.error("Could not remove item from cart");
  }
}

function* clearCartItemAsync({
  payload: { cartItems, itemTarget },
}: ClearCartItemStart) {
  try {
    yield promiseInterval();
    const newCartItems = yield* call(clearItemFromCart, {
      cartItems,
      itemTarget,
    });
    yield put(clearCartItemSuccess(newCartItems as CartItemProps[]));
    toast.info("Item Cleared from cart.");
  } catch (error) {
    yield put(setCartItemsFailed(error as Error));
    toast.error("Could not clear item from cart");
  }
}

function* onAddCartItem() {
  yield takeLatest(CART_ACTION_TYPES.SET_CART_ITEMS_START, addCartItemAsync);
}

function* onIncreaseQty() {
  yield takeLatest(CART_ACTION_TYPES.ADD_CART_ITEM_START, increaseItemQtyAsync);
}

function* onRemoveCartItem() {
  yield takeLatest(
    CART_ACTION_TYPES.REMOVE_CART_ITEM_START,
    removeCartItemAsync
  );
}

function* onClearCartItem() {
  yield takeLatest(CART_ACTION_TYPES.CLEAR_CART_ITEM_START, clearCartItemAsync);
}

export function* cartSagas() {
  yield all([
    call(onAddCartItem),
    call(onIncreaseQty),
    call(onRemoveCartItem),
    call(onClearCartItem),
  ]);
}
