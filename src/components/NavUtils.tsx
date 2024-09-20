import Cart from "./Cart";
import NavAuth from "./NavAuth";
import NavSearch from "./NavSearch";

const NavUtils = () => {
  return (
    <ul className="flex justify-end items-center">
      <NavAuth />
      <NavSearch />
      <Cart />
    </ul>
  );
};

export default NavUtils;
