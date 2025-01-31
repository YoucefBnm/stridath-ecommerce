import { clearCartItemStart } from "@/store/cart/cart.action";
import { selectCartItems } from "@/store/cart/cart.selector";
import { CartItemProps } from "@/store/cart/cart.types";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemUtils from "./CartItemUtils";
import { DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { formatPrice } from "@/utils/price.utils";

type CartItem = {
  cartItem: CartItemProps;
};
const CartItem: FC<CartItem> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearItem = () => dispatch(clearCartItemStart(cartItems, cartItem));
  const navigate = useNavigate();
  const navigateToItemPage = () => navigate(cartItem.link);
  return (
    <div className="px-4 py-5 last-of-type:border-b-0 border-b border-gray-100">
      <div title={cartItem.name}>
        <div className="grid grid-cols-[140px_1fr] justify-start gap-x-4 gap-y-2">
          <div className="relative bg-white aspect-square flex-center">
            <DrawerClose className="cursor-pointer flex-center">
              <img
                title={`navigate to ${cartItem.name} page`}
                aria-label={`go to ${cartItem.name} page`}
                alt={cartItem.name}
                className="max-w-[80%] max-h-[60%]"
                src={cartItem.mainImage}
                onClick={navigateToItemPage}
              />
            </DrawerClose>
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
          </div>

          <div>
            <h4
              title={cartItem.name}
              className="font-heading mb-2 uppercase max-w-[12ch] md:max-w-full truncate text-ellipsis"
            >
              {cartItem.name}
            </h4>

            <div className="flex flex-col justify-between gap-1">
              <h5
                className="font-heading max-w-full text-sm text-gray-600 capitalize max-w-[12ch] md:max-w-full truncate text-ellipsis"
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
      </div>
    </div>
  );
};

export default CartItem;
