import { Route, Routes } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import NavMobile from "@layouts/NavMobile";
import NavDesktop from "@layouts/NavDesktop";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useCheckUserSession } from "./hooks/useCheckUserSession";
import { lazy } from "react";

const Home = lazy(() => import("@routes/Home"));

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
