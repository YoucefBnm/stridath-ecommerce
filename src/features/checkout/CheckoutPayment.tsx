import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHandlePayment } from "@/hooks/useHandlePayment";
import { selectCartCount, selectCartTotal } from "@/store/cart/cart.selector";
import { formatPrice } from "@/utils/price.utils";
import { CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

const CheckoutPayment = () => {
  const { paymentHandler, isProcessing } = useHandlePayment();
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);

  return (
    <section className="relative top-auto left-auto md:sticky md:top-20 md:left-0 px-4 z-20 py-6 rounded-sm max-h-min w-full col-span-12 md:col-span-6">
      <Card className="rounded-sm">
        <form onSubmit={paymentHandler}>
          <CardHeader>
            <div className="mb-6 space-y-2">
              <CardTitle>Payment: ${formatPrice(cartTotal)}</CardTitle>
              <CardDescription>Bought {cartCount} items</CardDescription>
            </div>
            <CardElement />
          </CardHeader>
          <CardFooter>
            <Button
              disabled={isProcessing}
              type="submit"
              className="mt-4 w-full"
              size={"lg"}
            >
              {isProcessing ? <Spinner /> : "Pay now"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
};

export default CheckoutPayment;
