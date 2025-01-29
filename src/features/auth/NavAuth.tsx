import { selectCurrentUser } from "@/store/user/user.selector";
import { useSelector } from "react-redux";
import NavAuthDropdown from "./NavAuthDropdown";
import UserAvatar from "./UserAvatar";

const NavAuth = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {currentUser ? (
        <UserAvatar currentUser={currentUser} />
      ) : (
        <NavAuthDropdown
          title="Create your account for free"
          lead="Create your account or if you are already a member login to get members benefits like fast checkout, coupons, discounts, special offers, and our newest shoes and collections."
        />
      )}
    </>
  );
};

export default NavAuth;
