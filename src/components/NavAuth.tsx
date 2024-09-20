import { selectCurrentUser } from "@/store/user/user.selector";
import { ReactNode, memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { IconUser } from "@/assets";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import UserAvatar from "./UserAvatar";

interface AuthDropdownProps {
  title: string;
  lead: string;
  children: ReactNode;
}

const AuthDropdown = memo(function AuthDropdown({
  title,
  lead,
  children,
}: AuthDropdownProps) {
  return (
    <Popover>
      <PopoverTrigger
        aria-label="authentication dropdown trigger"
        className="cursor-pointer py-2 mx-2"
      >
        <img width={24} height={24} aria-hidden src={IconUser} />
      </PopoverTrigger>

      <PopoverContent className="flex mt-4 flex-col gap-4 mr-4 w-80 py-6 px-4">
        <h4 className="font-heading">{title}</h4>

        <p className="text-sm leading-normal text-neutral-500">{lead}</p>

        <Separator />
        <div className="flex flex-col gap-2 items-stretch">{children}</div>
      </PopoverContent>
    </Popover>
  );
});

const NavAuth = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {currentUser ? (
        <div className="mx-2">
          <UserAvatar currentUser={currentUser} />
        </div>
      ) : (
        <AuthDropdown
          title="Create your account for free"
          lead="Create your account or if you are already a member login to get members benefits like fast checkout, coupons, discounts, special offers, and our newest shoes and collections."
        >
          <Button variant={"outline"}>
            <Link
              className=" text-sm font-heading capitalize"
              to="/auth/signup"
            >
              Register
            </Link>
          </Button>
          <Button variant={"default"}>
            <Link
              className=" text-sm font-heading capitalize"
              to="/auth/signin"
            >
              Login
            </Link>
          </Button>
        </AuthDropdown>
      )}
    </>
  );
};

export default NavAuth;
