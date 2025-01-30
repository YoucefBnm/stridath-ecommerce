import { CardTitle } from "@/components/ui/card";
import { UserData } from "@/firebase/types";
import { FC } from "react";
import UserAvatar from "./UserAvatar";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { signOutStart } from "@/store/user/user.action";
import { LogOutIcon } from "lucide-react";

type LoggedProps = {
  currentUser: UserData;
};
const Logged: FC<LoggedProps> = ({ currentUser }) => {
  const dispatch = useDispatch();
  const signout = () => dispatch(signOutStart());

  return (
    <div className="flex items-center flex-wrap  gap-2">
      <UserAvatar currentUser={currentUser} />

      <CardTitle className="font-heading">
        Hello {currentUser.displayName && currentUser.displayName}
      </CardTitle>

      <Button
        title="log out"
        aria-label="log out"
        variant={"ghost"}
        size={"icon"}
        onClick={signout}
      >
        <LogOutIcon />
      </Button>
    </div>
  );
};

export default Logged;
