import AuthForm from "@/layouts/AuthForm";
import { authType, isAuthType } from "@/utils/authFormSchema.utils";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();

  const pathAuthType = location.pathname.split("/").at(-1);

  const authType: authType = isAuthType(pathAuthType) ? pathAuthType : "signin"; // or "signup"

  return (
    <main>
      <AuthForm type={authType} />
    </main>
  );
};

export default Auth;
