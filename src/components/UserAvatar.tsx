import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Spinner from "./Spinner";
import { memo } from "react";
import { UserAvatarProps } from "@/types";
import { useSelector } from "react-redux";
import { selectLoading } from "@/store/user/user.selector";

const UserAvatar = memo(function UserAvatar({ currentUser }: UserAvatarProps) {
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
      {loading && (
        <div className="size-5">
          <Spinner />
        </div>
      )}

      <AvatarImage src={currentUser.photoURL} />
      <AvatarFallback className="flex-center bg-black text-white uppercase font-heading leading-none">
        <span>
          {currentUser.displayName ? currentUser.displayName[0] : "a"}
        </span>
      </AvatarFallback>
    </Avatar>
  );
});

export default UserAvatar;
