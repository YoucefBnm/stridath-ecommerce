import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { useHandlePayment } from "@/hooks/useHandlePayment";
import { CardElement } from "@stripe/react-stripe-js";

const CheckoutPayment = () => {
  const { paymentHandler, isProcessing } = useHandlePayment();

  return (
    <section className="relative top-auto left-auto md:sticky md:top-20 md:left-0 px-4 z-20 py-6 rounded-sm max-h-min w-full col-span-12 md:col-span-6">
      <Card>
        <form onSubmit={paymentHandler}>
          <CardHeader>
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
