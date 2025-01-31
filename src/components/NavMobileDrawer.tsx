import { FC } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { XIcon } from "lucide-react";
import { NavSubmenu } from "@/constants/navbarLinks";
import { useNavigate } from "react-router-dom";

type NavMobileDrawerProps = {
  title: NavSubmenu["title"];
  submenu: NavSubmenu["submenu"];
};
const NavMobileDrawer: FC<NavMobileDrawerProps> = ({ title, submenu }) => {
  const navigate = useNavigate();
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <span
          className={`${navigationMenuTriggerStyle()} text-sm font-heading uppercase`}
        >
          {title}
        </span>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="justify-end">
          <DrawerClose>
            <XIcon />
          </DrawerClose>
        </DrawerHeader>
        <ul className="flex flex-col items-start gap-2 px-6">
          {submenu.map((item) =>
            item.links.map((link) => (
              <DrawerClose
                onClick={() => navigate(link.route)}
                className="font-heading capitalize text-sm"
                key={link.id}
              >
                {link.title}
              </DrawerClose>
            ))
          )}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default NavMobileDrawer;
