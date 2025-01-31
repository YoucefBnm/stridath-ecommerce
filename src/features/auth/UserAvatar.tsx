import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLoading } from "@/store/user/user.selector";
import Spinner from "@/components/Spinner";
import { FC } from "react";
import { UserData } from "@/firebase/types";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export interface UserAvatarProps {
  currentUser: UserData;
}
const UserAvatar: FC<UserAvatarProps> = ({ currentUser }) => {
  const navigate = useNavigate();
  const navigateToprofilePage = () => navigate("/auth");
  const loading = useSelector(selectLoading);

  return (
    <Avatar
      title="visit your profile"
      aria-label="profile link"
      onClick={navigateToprofilePage}
      className={`${navigationMenuTriggerStyle()} cursor-pointer`}
    >
      {loading && (
        <div className="absolute inset-0 size-full bg-gray-500/50 flex-center">
          <Spinner className="size-5" />
        </div>
      )}

      <AvatarImage className="rounded-full" src={currentUser.photoURL} />
      <AvatarFallback className="flex-center">
        <span>
          {currentUser.displayName ? currentUser.displayName[0] : "S"}
        </span>
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
