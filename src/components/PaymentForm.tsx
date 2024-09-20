import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useState } from "react";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import { selectCartTotal } from "@/store/cart/cart.selector";
import { selectCurrentUser } from "@/store/user/user.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState<boolean>(false);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Something went wrong. Try again later.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: amount * 100 }),
        }
      ).then((res) => res.json());

      const {
        paymentIntent: { client_secret },
      } = response;

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        toast.error("Card information is incomplete. Please try again.");
        setLoading(false);
        return;
      }

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: currentUser?.displayName || "Guest",
            email: currentUser?.email || "guest@example.com",
          },
        },
      });

      if (paymentResult.error) {
        toast.error(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={paymentHandler}
      className="section-col-md flex flex-col gap-6"
    >
      <CardElement className="mt-6" />
      <Button disabled={loading} type="submit">
        {loading ? <Spinner /> : "Pay now"}
      </Button>
    </form>
  );
};

export default PaymentForm;
