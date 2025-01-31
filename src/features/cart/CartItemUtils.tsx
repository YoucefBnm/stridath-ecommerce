import { Button } from "@/components/ui/button";
import {
  addCartItemStart,
  removeCartItemStart,
} from "@/store/cart/cart.action";
import { selectCartItems, selectLoading } from "@/store/cart/cart.selector";
import { CartItemProps } from "@/store/cart/cart.types";
import { MinusIcon, PlusIcon } from "lucide-react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

type CartUtilsProps = {
  cartItem: CartItemProps;
};
const CartItemUtils: FC<CartUtilsProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const loading = useSelector(selectLoading);

  const increaseQuantity = () =>
    dispatch(addCartItemStart(cartItems, cartItem));
  const decreaseQuantity = () =>
    dispatch(removeCartItemStart(cartItems, cartItem));

  return (
    <div className="grid max-w-min grid-cols-[32px_42px_32px] h-8 border border-gray-200 items-center">
      <Button
        variant={"ghost"}
        name="decrease"
        type="button"
        aria-label="decrease item quantity"
        disabled={loading}
        className="size-full  cursor-pointer rounded-none flex-center border-none p-0 h-full text-gray-500"
        onClick={decreaseQuantity}
      >
        <MinusIcon className="size-4" />
      </Button>
      <span
        className=" border-0 m-0 p-0 flex-center bg-gray-300/20 text-center h-full border-l border-r border-gray-200 rounded-none appearance-none text-sm"
        aria-label={`quantity of ${cartItem.name}`}
      >
        {cartItem.quantity}
      </span>
      <Button
        variant={"ghost"}
        name="increase"
        type="button"
        aria-label="increase item quantity"
        disabled={loading}
        className=" cursor-pointer rounded-none flex-center border-none p-0 h-full text-gray-500"
        onClick={increaseQuantity}
      >
        <PlusIcon className="size-4" />
      </Button>
    </div>
  );
};

export default CartItemUtils;
