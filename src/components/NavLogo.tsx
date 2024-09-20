import { Logo } from "@/assets";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link className="block" to="/">
      <img
        width={131}
        height={20}
        alt="actifeet logo"
        loading="lazy"
        decoding="async"
        src={Logo}
      />
    </Link>
  );
};

export default NavLogo;
