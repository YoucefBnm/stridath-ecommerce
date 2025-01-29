import NavLinks from "@/components/NavLinks";
import NavLogo from "@/components/NavLogo";
import NavUtils from "@/components/NavUtils";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const NavDesktop = () => {
  return (
    <>
      <header className="header header-desktop">
        <NavLogo />

        <NavLinks />

        <NavUtils />
      </header>
      <Suspense
        fallback={
          <div className="w-full h-svh flex-center">
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
