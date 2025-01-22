import {
  menLinks,
  NavSubmenu,
  sportsLinks,
  womenLinks,
} from "@/constants/navbarLinks";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";

const NavLinkItem = (props: NavSubmenu) => {
  return (
    <NavigationMenuItem className="rounded-none border-none">
      <NavigationMenuTrigger className="font-heading uppercase text-sm">
        {props.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white rounded-none border-t border-gray-100 max-h-[400px]">
        <ul className="w-screen section-container">
          <ul className="flex py-8 col-span-8 justify-evenly">
            {props.submenu.map((submenuItem) => (
              <div key={submenuItem.id} className="flex flex-col gap-4">
                <h3 className="font-heading uppercase text-sm font-medium text-gray-500">
                  {submenuItem.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {submenuItem.links.map((submenuLink) => (
                    <li
                      key={submenuLink.id}
                      className="font-heading font-medium text-gray-800 text-sm capitalize"
                    >
                      <Link to={submenuLink.route}>{submenuLink.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
          <div className="col-span-4">
            <img
              loading="lazy"
              decoding="async"
              alt={`${props.title} shoes`}
              height={1280}
              width={960}
              src={props.ctaImage}
              className="size-full object-contain"
            />
          </div>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const NavLinks = () => {
  return (
    <NavigationMenu className="static">
      <NavigationMenuList>
        <NavLinkItem
          id={menLinks.id}
          title={menLinks.title}
          ctaImage={menLinks.ctaImage}
          submenu={menLinks.submenu}
        />
        <NavLinkItem
          id={womenLinks.id}
          title={womenLinks.title}
          ctaImage={womenLinks.ctaImage}
          submenu={womenLinks.submenu}
        />
        <NavLinkItem
          id={sportsLinks.id}
          title={sportsLinks.title}
          ctaImage={sportsLinks.ctaImage}
          submenu={sportsLinks.submenu}
        />
        <NavigationMenuItem>
          <Link
            className={`${navigationMenuTriggerStyle()} text-sm font-heading uppercase`}
            to="/shop/isFeatured"
          >
            Featured
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            className={`${navigationMenuTriggerStyle()} text-sm font-heading uppercase`}
            to="/shop/new"
          >
            New
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            className={`${navigationMenuTriggerStyle()} text-sm font-heading uppercase text-red-500`}
            to="/shop/isOnsale"
          >
            Sale
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
