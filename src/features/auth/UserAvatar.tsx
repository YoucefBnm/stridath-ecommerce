import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLoading } from "@/store/user/user.selector";
import Spinner from "@/components/Spinner";
import { FC } from "react";
import { UserData } from "@/firebase/types";

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
      className="flex-center cursor-pointer transition-opacity hover:opacity-80 size-6 text-sm"
    >
      {loading && <Spinner className="size-5" />}

      <AvatarImage src={currentUser.photoURL} />
      <AvatarFallback className="flex-center bg-gray-900 text-white uppercase font-heading leading-none">
        <span>
          {currentUser.displayName ? currentUser.displayName[0] : "S"}
        </span>
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
