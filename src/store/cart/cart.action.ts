import { createAction, withMatcher } from "@/utils/reducer.utils";
import {
  AddCartItemStart,
  AddCartItemSuccess,
  CART_ACTION_TYPES,
  CartItemProps,
  ClearCartItemStart,
  ClearCartItemSuccess,
  RemoveCartItemStart,
  RemoveCartItemSuccess,
  SetCartItemsFailed,
  SetCartItemsStart,
  SetCartItemsSuccess,
} from "./cart.types";
import { ProductProps } from "@/types";

export const setCartItemsStart = withMatcher(
  (
    cartItems: CartItemProps[],
    itemToAdd: ProductProps,
    selectedColor: number,
    selectedSize: string | undefined
  ): SetCartItemsStart =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS_START, {
      cartItems,
      itemToAdd,
      selectedColor,
      selectedSize,
    })
);
export const addCartItemStart = withMatcher(
  (cartItems: CartItemProps[], itemTarget: CartItemProps): AddCartItemStart =>
    createAction(CART_ACTION_TYPES.ADD_CART_ITEM_START, {
      cartItems,
      itemTarget,
    })
);
export const removeCartItemStart = withMatcher(
  (
    cartItems: CartItemProps[],
    itemTarget: CartItemProps
  ): RemoveCartItemStart =>
    createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM_START, {
      cartItems,
      itemTarget,
    })
);
export const clearCartItemStart = withMatcher(
  (cartItems: CartItemProps[], itemTarget: CartItemProps): ClearCartItemStart =>
    createAction(CART_ACTION_TYPES.CLEAR_CART_ITEM_START, {
      cartItems,
      itemTarget,
    })
);
export const setCartItemsSuccess = withMatcher(
  (cartItems: CartItemProps[]): SetCartItemsSuccess =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS_SUCCESS, cartItems)
);
export const addCartItemSuccess = withMatcher(
  (cartItems: CartItemProps[]): AddCartItemSuccess =>
    createAction(CART_ACTION_TYPES.ADD_CART_ITEM_SUCCESS, cartItems)
);
export const removeCartItemSuccess = withMatcher(
  (cartItems: CartItemProps[]): RemoveCartItemSuccess =>
    createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM_SUCCESS, cartItems)
);
export const clearCartItemSuccess = withMatcher(
  (cartItems: CartItemProps[]): ClearCartItemSuccess =>
    createAction(CART_ACTION_TYPES.CLEAR_CART_ITEM_SUCCESS, cartItems)
);
export const setCartItemsFailed = withMatcher(
  (error: Error): SetCartItemsFailed =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS_FAILED, error)
);
