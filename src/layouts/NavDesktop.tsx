import NavLinks from "@/components/NavLinks";
import NavLogo from "@/components/NavLogo";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const NavDesktop = () => {
  return (
    <>
      <header className="header header-desktop">
        <NavLogo />

        <div className="flex-center flex-1 header-desktop-links">
          <NavLinks />
        </div>
      </header>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NavDesktop;
