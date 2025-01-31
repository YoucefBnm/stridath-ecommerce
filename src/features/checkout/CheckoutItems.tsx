import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import {
  selectCartItems,
  selectCartTotal,
  selectLoading,
} from "@/store/cart/cart.selector";
import Spinner from "@/components/Spinner";
import { formatPrice } from "@/utils/price.utils";

const CheckoutItems = () => {
  const cartItems = useSelector(selectCartItems);
  const loading = useSelector(selectLoading);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <section className="col-span-12 md:col-span-6">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="flex items-center my-2 justify-between">
        <h5 className="font-heading">Subtotal</h5>
        <h5 className="font-heading text-right">${formatPrice(cartTotal)}</h5>
      </div>
      {loading && (
        <div className="absolute inset-0 bg-gray-200/50 flex-center size-full">
          <Spinner />
        </div>
      )}
    </section>
  );
};

export default CheckoutItems;
