import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CheckoutItems from "@/features/checkout/CheckoutItems";
import CheckoutPayment from "@/features/checkout/CheckoutPayment";
import { selectCartCount } from "@/store/cart/cart.selector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();
  const navigateToMenShop = () => navigate("/shop/men");
  const navigateToWomenShop = () => navigate("/shop/women");
  return (
    <main className="px-default place-content-center gap-8 py-10 section-container">
      {cartCount > 0 ? (
        <>
          <CheckoutPayment />
          <CheckoutItems />
        </>
      ) : (
        <div className="col-span-12 text-center">
          <Card className="w-1/3 mx-auto">
            <CardHeader>
              <CardTitle>Your cart is empty</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button
                className="w-full"
                size={"lg"}
                aria-label="go to men shop"
                onClick={navigateToMenShop}
              >
                Proceed to men shop
              </Button>
              <Button
                className="w-full"
                size={"lg"}
                aria-label="go to women shop"
                onClick={navigateToWomenShop}
              >
                Proceed to women shop
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
};

export default Checkout;
