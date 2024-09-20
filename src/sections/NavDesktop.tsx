import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import NavUtils from "@/components/NavUtils";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const NavDesktop = () => {
  return (
    <>
      <header className="header header-desktop">
        <div>
          <Logo />
        </div>

        <div className="flex-center flex-1">
          <NavLinks />
        </div>

        <div className="">
          <NavUtils />
        </div>
      </header>

      <Suspense
        fallback={
          <div className="w-full h-[95svh] flex-center">
            <Spinner />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default NavDesktop;
