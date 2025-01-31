import NavLogo from "@/components/NavLogo";
import NavMobileDrawer from "@/components/NavMobileDrawer";
import NavToggleBtn from "@/components/NavToggleBtn";
import NavUtils from "@/components/NavUtils";
import Spinner from "@/components/Spinner";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { menLinks, womenLinks } from "@/constants/navbarLinks";
import { XIcon } from "lucide-react";
import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const NavMobile = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="header header-mobile">
        <NavLogo />
        <div className="flex items-center">
          <Drawer direction="right">
            <DrawerTrigger
              className={`${navigationMenuTriggerStyle()} cursor-pointer`}
            >
              <NavToggleBtn />
            </DrawerTrigger>
            <DrawerContent className="">
              <DrawerHeader className="justify-end">
                <XIcon
                  className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                />
              </DrawerHeader>

              <ul className="flex justify-start items-start flex-col px-6 py-4 gap-4">
                <NavMobileDrawer title="men" submenu={menLinks.submenu} />
                <NavMobileDrawer title="women" submenu={womenLinks.submenu} />
                <DrawerClose
                  className={`${navigationMenuTriggerStyle()} text-sm font-heading uppercase`}
                  onClick={() => navigate("/shop/isfeatured/featured")}
                >
                  Featured
                </DrawerClose>
                <DrawerClose
                  className={`${navigationMenuTriggerStyle()} text-sm font-heading uppercase text-red-500`}
                  onClick={() => navigate("/shop/isonsale/sale")}
                >
                  Sale
                </DrawerClose>
              </ul>
            </DrawerContent>
          </Drawer>
          <NavUtils />
        </div>
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

export default NavMobile;
