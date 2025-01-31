import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { selectCartCount } from "@/store/cart/cart.selector";
import { ShoppingCartIcon } from "lucide-react";
import { useSelector } from "react-redux";
import CartWrap from "./CartWrap";
import CartEmpty from "./CartEmpty";

const Cart = () => {
  const cartItemsCount = useSelector(selectCartCount);

  return (
    <Drawer direction="right">
      <div className="relative  cursor-pointer">
        <DrawerTrigger
          className={`${navigationMenuTriggerStyle()} cursor-pointer`}
        >
          <ShoppingCartIcon />
        </DrawerTrigger>
        {cartItemsCount > 0 && (
          <div className=" bg-gray-950/80 text-white absolute right-2 top-0 -z-0 bg-opacity-80    pointer-events-none tracking-tighter flex justify-center items-center size-4 rounded-full text-[8px]  text-center">
            {cartItemsCount > 10 ? "+10" : cartItemsCount}
          </div>
        )}
      </div>

      {cartItemsCount > 0 ? <CartWrap /> : <CartEmpty />}
    </Drawer>
  );
};

export default Cart;
