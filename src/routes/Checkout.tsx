import CartItem from "@/components/CartItem";
import PaymentForm from "@/components/PaymentForm";
import Seo from "@/components/Seo";
import Spinner from "@/components/Spinner";
import { Separator } from "@/components/ui/separator";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  selectLoading,
} from "@/store/cart/cart.selector";
import { formatPrice } from "@/utils/price.utils";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <Seo
        title="Actifeet | Checkout"
        description="Review your cart and complete your purchase securely at Actifeet"
        url="https://actifeet.netlify.app/checkout"
      />
      <main>
        <section className="py-12 px-default">
          <div>
            <h2 className="heading-md mb-6">Shopping cart</h2>
            <span className="text-neutral-500 heading-base align-middle">
              {cartCount} Item(s)
            </span>
          </div>
          <Separator className="my-4" />

          <div className="section-container flex justify-between items-start">
            <div className="section-col-xl">
              <div className="relative py-2 px-4">
                {cartItems.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}

                {isLoading && (
                  <div className="absolute inset-0 size-full bg-black bg-opacity-15 flex-center">
                    <Spinner />
                  </div>
                )}
              </div>
              <Separator className="my-4" />

              <div className="flex items-center justify-between">
                <h3 className="heading-base">Total</h3>
                <h3 className="heading-base">${formatPrice(cartTotal)}</h3>
              </div>
            </div>

            <PaymentForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;
