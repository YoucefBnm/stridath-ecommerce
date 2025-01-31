import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { UserIcon } from "lucide-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type NavAuthDropdownProps = {
  title: string;
  lead: string;
};
const NavAuthDropdown: FC<NavAuthDropdownProps> = ({ title, lead }) => {
  const navigate = useNavigate();
  const navigateToSignIn = () => navigate("/auth/signin");
  const navigateToSignUp = () => navigate("/auth/signup");
  return (
    <Popover>
      <PopoverTrigger
        aria-label="authentication dropdown trigger"
        className={` ${navigationMenuTriggerStyle()} cursor-pointer py-2 mx-2`}
      >
        <UserIcon />
      </PopoverTrigger>

      <PopoverContent className="flex flex-col mr-4 w-80 py-6 px-4">
        <h3 className="font-heading capitalize mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{lead}</p>

        <Separator className="my-4" />

        <div className="flex gap-2 items-stretch">
          <Button
            onClick={navigateToSignIn}
            className="rounded-sm w-full font-heading capitalize"
            variant={"default"}
            title="navigate to signin page"
            aria-label="navigate to signin page"
          >
            Login
          </Button>
          <Button
            onClick={navigateToSignUp}
            className="rounded-sm w-full font-heading capitalize"
            variant={"outline"}
            title="navigate to signup page"
            aria-label="navigate to signup page"
          >
            Register
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NavAuthDropdown;
