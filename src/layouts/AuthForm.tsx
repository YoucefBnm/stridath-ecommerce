import LoggedForm from "@/features/auth/LoggedForm";
import VisitorForm from "@/features/auth/VisitorForm";
import { selectCurrentUser } from "@/store/user/user.selector";
import { authType, isAuthType } from "@/utils/authFormSchema.utils";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const AuthForm = () => {
  const location = useLocation();
  const pathAuthType = location.pathname.split("/").at(-1);
  const authType: authType = isAuthType(pathAuthType) ? pathAuthType : "signin"; // or "signup"

  const currentUser = useSelector(selectCurrentUser);
  const cardStyles = "w-full md:w-3/5 xl:w-2/5 relative overflow-hidden";
  return (
    <section className="bg-gray-50  px-default py-12 flex-center">
      {currentUser ? (
        <LoggedForm className={cardStyles} currentUser={currentUser} />
      ) : (
        <VisitorForm authType={authType} className={cardStyles} />
      )}
    </section>
  );
};

export default AuthForm;
