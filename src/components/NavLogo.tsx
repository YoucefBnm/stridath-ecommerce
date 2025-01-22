import { Link } from "react-router-dom";
import { Logo } from "@/assets";
const NavLogo = () => {
  return (
    <Link className="block" to="/">
      <img
        width={121}
        height={25}
        alt="stridath logo"
        src={Logo}
        className="inline-block align-middle"
      />
    </Link>
  );
};

export default NavLogo;
