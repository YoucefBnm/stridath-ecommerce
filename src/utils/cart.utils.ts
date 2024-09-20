import { CartItemProps } from "@/store/cart/cart.types";
import { setPrice } from "./price.utils";
import { ProductProps } from "@/types";

type SetCartItemsProps = {
  cartItems: CartItemProps[];
  itemToAdd: ProductProps;
  selectedColor: number;
  selectedSize: string | undefined;
};
type CartItemTarget = {
  cartItems: CartItemProps[];
  itemTarget: CartItemProps;
};
export const addItemToCart = (
  payload: SetCartItemsProps
): Promise<CartItemProps[]> => {
  const { cartItems, itemToAdd, selectedColor, selectedSize } = payload;

  return new Promise((resolve, reject) => {
    const cartItemUId = `${itemToAdd.id}-${itemToAdd.images[selectedColor].id}-${selectedSize}`;
    const finalPrice = itemToAdd.discount
      ? setPrice(itemToAdd.price, itemToAdd.discount)
      : setPrice(itemToAdd.price, null);

    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemUId
    );

    if (!selectedSize) {
      reject(new Error("Select size to add item to cart."));
      return;
    }
    if (existingCartItem) {
      resolve(
        cartItems.map((cartItem) =>
          cartItem.id === cartItemUId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      resolve([
        ...cartItems,
        {
          id: cartItemUId,
          gender: itemToAdd.gender,
          category: itemToAdd.category,
          brand: itemToAdd.brand,
          name: itemToAdd.name,
          price: finalPrice,
          size: selectedSize,
          color: itemToAdd["colors"][selectedColor],
          mainImage: itemToAdd.images[selectedColor].imagesUrls[0],
          quantity: 1,
          link: itemToAdd.id,
        },
      ]);
    }
  });
};

export const addCartItem = (payload: CartItemTarget) => {
  const { cartItems, itemTarget } = payload;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemTarget.id
  );

  if (existingCartItem) {
    return new Promise((resolve) =>
      resolve(
        cartItems.map((cartItem) =>
          cartItem.id === itemTarget.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    );
  } else {
    return Promise.resolve(cartItems);
  }
};
export const removeItemFromCart = (payload: CartItemTarget) => {
  const { cartItems, itemTarget } = payload;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemTarget.id
  );

  return new Promise((resolve) => {
    if (existingCartItem?.quantity === 1) {
      resolve(cartItems.filter((cartItem) => cartItem.id !== itemTarget.id));
    }

    resolve(
      cartItems.map((cartItem) =>
        cartItem.id === itemTarget.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  });
};

export const clearItemFromCart = (payload: CartItemTarget) => {
  const { cartItems, itemTarget } = payload;
  return new Promise((resolve) =>
    resolve(cartItems.filter((cartItem) => cartItem.id !== itemTarget.id))
  );
};
