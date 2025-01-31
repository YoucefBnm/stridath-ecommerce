import { Route, Routes } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import NavMobile from "@layouts/NavMobile";
import NavDesktop from "@layouts/NavDesktop";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useCheckUserSession } from "./hooks/useCheckUserSession";
import { lazy } from "react";

const Home = lazy(() => import("@routes/Home"));
const Auth = lazy(() => import("@/routes/Auth"));
const Shop = lazy(() => import("@routes/Shop"));
const Product = lazy(() => import("@routes/Product"));
const Checkout = lazy(() => import("@routes/Checkout"));
const MainNav = () => {
  const windowWidth = useWindowWidth();

  return windowWidth < 850 ? <NavMobile /> : <NavDesktop />;
};

function App() {
  useScrollToTop();
  useCheckUserSession();

  return (
    <>
      <Routes>
        <Route path="/" element={<MainNav />}>
          <Route index element={<Home />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route
            path="/shop/:gender?/sport?/:sport?/brand?/:brand?/isfeatured?/:featured?/isonsale?/:sale?"
            element={<Shop />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
