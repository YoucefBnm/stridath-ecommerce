import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  selectLoading,
} from "@/store/cart/cart.selector";
import { XIcon } from "lucide-react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useWindowHeight } from "@react-hook/window-size/throttled";
import Spinner from "@/components/Spinner";
import { formatPrice } from "@/utils/price.utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CartWrap = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsCount = useSelector(selectCartCount);
  const loading = useSelector(selectLoading);
  const cartTotal = useSelector(selectCartTotal);
  const windowHeight = useWindowHeight();
  const navigate = useNavigate();
  const navigateToCheckout = () => navigate("/checkout");
  return (
    <DrawerContent>
      <DrawerHeader className="border-b border-gray-100 flex items-center justify-between">
        <DrawerTitle>Your cart contains {cartItemsCount} items</DrawerTitle>
        <DrawerClose className={navigationMenuTriggerStyle()}>
          <XIcon />
        </DrawerClose>
      </DrawerHeader>
      <ScrollArea style={{ height: windowHeight - 185 }} className="w-full">
        <div className="relative overflow-hidden">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
          {loading && (
            <div className="absolute inset-0 bg-gray-200/50 flex-center size-full">
              <Spinner />
            </div>
          )}
        </div>
      </ScrollArea>
      <DrawerFooter className="border-t border-gray-100">
        <div className="flex justify-between">
          <h5 className="font-heading">Subtotal:</h5>
          <h5 className="font-heading text-right">${formatPrice(cartTotal)}</h5>
        </div>
        <Button
          variant={"default"}
          size={"lg"}
          className="w-full rounded-sm font-heading font-normal"
          aria-label="proceed to checkout"
          onClick={navigateToCheckout}
          title="proceed to checkout"
        >
          Proceed to Checkout
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default CartWrap;
