import NavLogo from "@/components/NavLogo";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const NavDesktop = () => {
  return (
    <>
      <header className="header header-desktop">
        <NavLogo />
      </header>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NavDesktop;
