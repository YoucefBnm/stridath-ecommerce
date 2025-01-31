import { clearCartItemStart } from "@/store/cart/cart.action";
import { selectCartItems } from "@/store/cart/cart.selector";
import { CartItemProps } from "@/store/cart/cart.types";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemUtils from "./CartItemUtils";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { formatPrice } from "@/utils/price.utils";
import { cn } from "@/utils/shadcn";

type CartItem = {
  cartItem: CartItemProps;
  className?: string;
};
const CartItem: FC<CartItem> = ({ cartItem, className }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearItem = () => dispatch(clearCartItemStart(cartItems, cartItem));
  return (
    <div
      title={cartItem.name}
      className={cn(
        "px-4 py-5 last-of-type:border-b-0 grid grid-cols-[140px_1fr] justify-start gap-x-4 gap-y-2 border-b border-gray-100",
        className
      )}
    >
      <Link
        to={cartItem.link}
        className="block relative bg-white aspect-square flex-center"
        title={`navigate to ${cartItem.name} page`}
        aria-label={`go to ${cartItem.name} page`}
      >
        <img
          alt={cartItem.name}
          className="max-w-[80%] cursor-pointer max-h-[60%]"
          src={cartItem.mainImage}
        />
        <div className="absolute inset-0 bg-gray-500 bg-opacity-5 rounded-sm pointer-events-none" />
        <Button
          size="icon"
          variant={"ghost"}
          aria-label="remove cart item"
          title="remove cart item"
          className="absolute z-10 top-0 right-0 rounded-full text-gray-500 hover:text-gray-900"
          onClick={clearItem}
        >
          <XIcon />
        </Button>
      </Link>

      <div>
        <h4
          title={cartItem.name}
          className="font-heading mb-2 uppercase max-w-[12ch] md:max-w-full truncate text-ellipsis"
        >
          {cartItem.name}
        </h4>

        <div className="flex flex-col justify-between gap-1">
          <h5
            className="font-heading text-sm text-gray-600 capitalize max-w-[12ch] md:max-w-full truncate text-ellipsis"
            title={`${cartItem.gender} ${cartItem.sport} ${cartItem.brand}`}
          >
            {cartItem.gender} {cartItem.sport} {cartItem.brand}
          </h5>

          <h5
            className="font-heading text-sm text-gray-600 capitalize max-w-[12ch] md:max-w-full truncate text-ellipsis"
            title={`${cartItem.size}`}
          >
            Size: {cartItem.size}
          </h5>
          <h5
            className="font-heading text-sm text-gray-600 capitalize max-w-[12ch] md:max-w-full truncate text-ellipsis"
            title={`${cartItem.color}`}
          >
            Color: {cartItem.color}
            <span
              className="size-2 inline-block align-middle ml-1 rounded-full border border-gray-50"
              style={{ backgroundColor: cartItem.color }}
            />
          </h5>
          <h5
            className="font-heading text-sm text-gray-600 capitalize text-ellipsis truncate"
            title={`${cartItem.price}`}
          >
            Price:&nbsp;$
            {cartItem.isOnSale
              ? formatPrice(cartItem.salePrice)
              : formatPrice(cartItem.price)}
          </h5>
        </div>
      </div>
      <p className=" flex items-center">
        <span className="text-gray-500">Subtotal:</span> &nbsp;$
        {cartItem.isOnSale
          ? formatPrice(cartItem.salePrice * cartItem.quantity)
          : formatPrice(cartItem.price * cartItem.quantity)}
      </p>
      <CartItemUtils cartItem={cartItem} />
    </div>
  );
};

export default CartItem;
