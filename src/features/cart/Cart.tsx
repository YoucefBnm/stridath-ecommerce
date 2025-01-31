import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ShoppingCartIcon } from "lucide-react";

const Cart = () => {
  return (
    <div className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
      <ShoppingCartIcon />
    </div>
  );
};

export default Cart;
