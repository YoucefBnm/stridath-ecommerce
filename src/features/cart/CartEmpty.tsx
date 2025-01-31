import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();
  const navigateToMenShop = () => navigate("/shop/men");
  const navigateToWomenShop = () => navigate("/shop/women");
  return (
    <DrawerContent>
      <DrawerHeader className="border-b border-gray-100 flex items-center justify-between">
        <DrawerTitle>Your cart is empty</DrawerTitle>
        <DrawerClose className={navigationMenuTriggerStyle()}>
          <XIcon />
        </DrawerClose>
      </DrawerHeader>

      <div className="p-4 space-y-4">
        <h2 className="heading-base">Your cart is empty</h2>
        <div className="flex gap-2">
          <DrawerClose>
            <Button
              size="lg"
              aria-label="navigate to men page"
              onClick={navigateToMenShop}
            >
              Shop Men
            </Button>
          </DrawerClose>
          <DrawerClose>
            <Button
              size="lg"
              aria-label="navigate to women page"
              onClick={navigateToWomenShop}
            >
              Shop Women
            </Button>
          </DrawerClose>
        </div>
      </div>
    </DrawerContent>
  );
};

export default CartEmpty;
