import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "@/store/cart/cart.selector";
import {
  addCartItemStart,
  clearCartItemStart,
  removeCartItemStart,
} from "@/store/cart/cart.action";
import { IconAdd, IconDeduct } from "@/assets";
import { setPrice } from "@/utils/price.utils";
import { Link } from "react-router-dom";
import { CartItemProps } from "@/store/cart/cart.types";
import { Badge } from "./ui/badge";

const CartItemGroup = ({
  segment,
  value,
}: {
  segment: string;
  value: string | number;
}) => {
  return (
    <div
      title={value.toString()}
      className="flex gap-2 w-full  font-heading text-sm capitalize"
    >
      <p className="text-neutral-500 ">{segment}:</p>
      <p className="text-ellipsis truncate">{value}</p>
    </div>
  );
};

const CartItemUtils = ({ cartItem }: { cartItem: CartItemProps }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItem = () => dispatch(addCartItemStart(cartItems, cartItem));
  const removeItem = () => dispatch(removeCartItemStart(cartItems, cartItem));

  return (
    <div className="flex flex-col gap-2 w-32">
      <div className="flex items-center  justify-center gap-1">
        <button
          role="button"
          aria-label="deduct item quantity"
          className="p-1 rounded-full transition-opacity hover:opacity-30"
          onClick={removeItem}
        >
          <img width={16} height={16} src={IconDeduct} aria-hidden="true" />
        </button>
        <div className="text-xs font-semibold">{cartItem.quantity}</div>
        <button
          role="button"
          aria-label="increase item quantity"
          className="p-1 transition-colors hover:bg-neutral-100 rounded-full"
          onClick={addItem}
        >
          <img width={16} height={16} src={IconAdd} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
const CartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItem = () => dispatch(clearCartItemStart(cartItems, cartItem));

  return (
    <div className="flex w-full py-4 px-2 flex-col relative">
      <div className="grid grid-cols-10 grid-rows-[min-content_min-content]">
        <Link
          to={`/product/${cartItem.link}`}
          title={cartItem.name}
          aria-label={`navigate to ${cartItem.name} page`}
          className="row-start-1 row-span-1 col-span-5 relative px-4 py-8 flex-center overflow-hidden"
        >
          <img
            className=" object-contain  bottom-4 max-h-[65%] mt-auto max-w-[70%] pointer-events-none"
            src={cartItem.mainImage}
            alt={cartItem.name}
          />
          <button
            role="button"
            aria-label="clear item from cart"
            title="clear item"
            className=" absolute right-2 top-2 size-4 flex bg-neutral-200 items-center justify-center text-xs p-1 transition-colors hover:bg-neutral-500 rounded-full"
            onClick={clearItem}
          >
            <span>&times;</span>
          </button>
          <div className="absolute inset-0 bg-neutral-950 opacity-5 pointer-events-none" />
        </Link>
        <div className="overflow-hidden row-start-1 col-span-4 col-start-7 flex items-start justify-start flex-col gap-2  ">
          <div className="flex  flex-col  gap-2">
            <CartItemGroup segment="gender" value={cartItem.gender} />
            <CartItemGroup segment="category" value={cartItem.category} />
            <CartItemGroup segment="brand" value={cartItem.brand} />
            <CartItemGroup segment="name" value={cartItem.name} />
            <CartItemGroup segment="size" value={cartItem.size} />
            <CartItemGroup segment="color" value={cartItem.color} />
          </div>
        </div>
        <div className="col-span-4 row-start-2 col-start-7 my-4 ">
          <Badge>
            <CartItemGroup
              segment="Total"
              value={`$${setPrice(+cartItem.price * cartItem.quantity, null)}`}
            />
          </Badge>
        </div>

        <div className="my-4 col-span-5 flex-center row-start-2 col-start-1">
          <CartItemUtils cartItem={cartItem} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
