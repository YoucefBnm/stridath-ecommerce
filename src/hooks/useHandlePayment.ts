import { selectCartTotal } from "@/store/cart/cart.selector";
import { selectCurrentUser } from "@/store/user/user.selector";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export function useHandlePayment() {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: cartTotal * 100,
      }),
    }).then((res) => res.json());
    const { client_secret } = response;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
        billing_details: {
          name: currentUser?.displayName || "Guest",
        },
      },
    });
    setIsProcessing(false);

    if (paymentResult.error) {
      toast.error(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment Successful");
      }
    }
  };

  return {
    paymentHandler,
    isProcessing,
  };
}
