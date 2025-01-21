import { Link } from "react-router-dom";
import { Logo } from "@/assets";
const NavLogo = () => {
  return (
    <Link className="block" to="/">
      <img
        width={150}
        height={31}
        alt="stridath logo"
        src={Logo}
        className="inline-block align-middle"
      />
    </Link>
  );
};

export default NavLogo;
