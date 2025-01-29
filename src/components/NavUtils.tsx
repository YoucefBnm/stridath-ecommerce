import Cart from "@/features/cart/Cart";
import NavAuth from "../features/auth/NavAuth";
import Search from "@/features/Search/Search";

const NavUtils = () => {
  return (
    <div className="header-desktop-utils">
      <div className="flex items-center">
        <Search />
        <NavAuth />
        <Cart />
      </div>
    </div>
  );
};

export default NavUtils;
