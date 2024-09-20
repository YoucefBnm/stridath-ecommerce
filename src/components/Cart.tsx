import { IconCart } from "@/assets";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useSelector } from "react-redux";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  selectLoading,
} from "@/store/cart/cart.selector";
import { ScrollArea } from "./ui/scroll-area";
import { useWindowHeight } from "@react-hook/window-size/throttled";
import { CartItemProps } from "@/store/cart/cart.types";
import CartItem from "./CartItem";
import Spinner from "./Spinner";
import { formatPrice } from "@/utils/price.utils";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "@/store/user/user.selector";
import { Separator } from "./ui/separator";

const CartContainer = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
  const isLoading = useSelector(selectLoading);
  const windowHeight = useWindowHeight();

  const navigate = useNavigate();
  const navigateToCheckout = () => navigate("/checkout");

  return (
    <DrawerContent className="px-4">
      <DrawerHeader className="border-b border-neutral-300 h-16 flex items-center">
        <DrawerTitle>Cart</DrawerTitle>
        <DrawerClose className="  w-full flex items-center justify-between">
          <span className="font-heading text-neutral-500">
            Your Cart: <span className=" text-black">{cartCount}</span>
            &nbsp;item(s)
          </span>
          <span className="text-2xl">&times;</span>
        </DrawerClose>
      </DrawerHeader>

      <ScrollArea
        style={{ height: windowHeight - 185 }}
        className=" pr-2  relative w-full"
      >
        {cartItems.map((cartItem: CartItemProps) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
        {isLoading && (
          <div className="bg-black bg-opacity-10 flex justify-center items-center absolute inset-0 size-full">
            <Spinner />
          </div>
        )}
      </ScrollArea>

      <DrawerFooter className="sticky bottom-0  bg-white border-t border-t-neutral-200">
        <div className="flex flex-col  w-full gap-4">
          <div className="flex w-full items-center">
            <h4 className="flex-1  text-neutral-500">Total</h4>
            <h4 className=" text-xl">${formatPrice(cartTotal)}</h4>
          </div>

          <DrawerClose asChild onClick={navigateToCheckout} className="block">
            <Button
              size={"lg"}
              className="w-full font-heading text-sm capitalize"
            >
              Go to Checkout
            </Button>
          </DrawerClose>
        </div>
      </DrawerFooter>
    </DrawerContent>
  );
};

const CartEmpty = () => {
  const currentUser = useSelector(selectCurrentUser);

  const navigate = useNavigate();
  const navigateToMenShop = () => navigate("/shop/men");
  const navigateToWomenShop = () => navigate("/shop/women");
  const navigateToLoginPage = () => navigate("/auth/login");

  return (
    <DrawerContent>
      <DrawerHeader className="relative  text-left pl-8">
        <DrawerClose className="absolute right-4">
          <span className=" text-neutral-500 text-2xl">&times;</span>
        </DrawerClose>
        <h4 className="font-heading">Your cart is Empty</h4>
        <p className="text-xs text-neutral-500">
          Explore our collections through our various shops tailored for you and
          all your activities.
        </p>
      </DrawerHeader>

      <Separator />
      <div className="flex flex-wrap gap-2 w-full mt-8 px-4">
        <DrawerClose asChild onClick={navigateToMenShop} className="block">
          <Button variant={"ghost"} className="link">
            Shop Men
          </Button>
        </DrawerClose>

        <DrawerClose asChild onClick={navigateToWomenShop} className="block">
          <Button
            onClick={navigateToWomenShop}
            variant={"ghost"}
            className="link"
          >
            Shop Women
          </Button>
        </DrawerClose>
        {!currentUser && (
          <DrawerClose asChild onClick={navigateToLoginPage} className="block ">
            <Button variant={"default"} className="link">
              Login
            </Button>
          </DrawerClose>
        )}
      </div>
    </DrawerContent>
  );
};
const Cart = () => {
  const cartItemsCount = useSelector(selectCartCount);

  return (
    <Drawer direction="right">
      <div className="relative cursor-pointer py-2 mx-2  flex items-center">
        <DrawerTrigger className="">
          <img width={24} height={24} aria-hidden src={IconCart} />
        </DrawerTrigger>

        {cartItemsCount > 0 && (
          <div className=" bg-black text-white absolute -right-1 -top-px -z-0 bg-opacity-80    pointer-events-none tracking-tighter flex justify-center items-center size-4 rounded-full text-[8px]  text-center">
            {cartItemsCount > 10 ? "+10" : cartItemsCount}
          </div>
        )}
      </div>

      {cartItemsCount > 0 ? <CartContainer /> : <CartEmpty />}
    </Drawer>
  );
};

export default Cart;
