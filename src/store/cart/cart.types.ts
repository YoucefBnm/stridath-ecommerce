import { ProductProps } from "@/types";
import { ActionWithPayload } from "@/utils/reducer.utils";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS_START = "cart/SET_CART_ITEMS_START",
  SET_CART_ITEMS_SUCCESS = "cart/SET_CART_ITEMS_SUCCESS",

  ADD_CART_ITEM_START = "cart/ADD_CART_ITEM_START",
  ADD_CART_ITEM_SUCCESS = "cart/ADD_CART_ITEM_SUCCESS",

  REMOVE_CART_ITEM_START = "cart/REMOVE_CART_ITEM_START",
  REMOVE_CART_ITEM_SUCCESS = "cart/REMOVE_CART_ITEM_SUCCESS",

  CLEAR_CART_ITEM_START = "cart/CLEAR_CART_ITEM_START",
  CLEAR_CART_ITEM_SUCCESS = "cart/CLEAR_CART_ITEM_SUCCESS",

  SET_CART_ITEMS_FAILED = "cart/SET_CART_ITEMS_FAILED",
}

export type CartItemProps = {
  id: string;
  gender: string;
  sport: string;
  brand: string;
  name: string;
  price: number;
  size: string;
  color: string;
  mainImage: string;
  quantity: number;
  link: string;
  isOnSale: boolean;
  salePrice: number;
};

export type SetCartItemsStart = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS_START,
  {
    cartItems: CartItemProps[];
    itemToAdd: ProductProps;
    selectedColor: number;
    selectedSize: string | undefined;
  }
>;

export type CartState = {
  readonly cartItems: CartItemProps[];
  readonly loading: boolean;
  readonly error: Error | null;
};
export type AddCartItemStart = ActionWithPayload<
  CART_ACTION_TYPES.ADD_CART_ITEM_START,
  { cartItems: CartItemProps[]; itemTarget: CartItemProps }
>;
export type RemoveCartItemStart = ActionWithPayload<
  CART_ACTION_TYPES.REMOVE_CART_ITEM_START,
  { cartItems: CartItemProps[]; itemTarget: CartItemProps }
>;
export type ClearCartItemStart = ActionWithPayload<
  CART_ACTION_TYPES.CLEAR_CART_ITEM_START,
  { cartItems: CartItemProps[]; itemTarget: CartItemProps }
>;
export type SetCartItemsSuccess = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS_SUCCESS,
  CartItemProps[]
>;
export type AddCartItemSuccess = ActionWithPayload<
  CART_ACTION_TYPES.ADD_CART_ITEM_SUCCESS,
  CartItemProps[]
>;
export type RemoveCartItemSuccess = ActionWithPayload<
  CART_ACTION_TYPES.REMOVE_CART_ITEM_SUCCESS,
  CartItemProps[]
>;
export type ClearCartItemSuccess = ActionWithPayload<
  CART_ACTION_TYPES.CLEAR_CART_ITEM_SUCCESS,
  CartItemProps[]
>;
export type SetCartItemsFailed = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS_FAILED,
  Error
>;
