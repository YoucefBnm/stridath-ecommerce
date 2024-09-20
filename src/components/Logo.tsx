import NavLogo from "@assets/icons/logo.svg?react&svgr";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="block" to="/">
      <img
        width={131}
        height={20}
        alt="actifeet logo"
        loading="lazy"
        decoding="async"
        src={NavLogo}
      />
    </Link>
  );
};

export default Logo;
