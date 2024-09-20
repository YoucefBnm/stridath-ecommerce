import Seo from "@/components/Seo";
import AuthForm from "@/sections/AuthForm";
import { authType, isAuthType } from "@/utils/authFormSchema.utils";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();

  const pathAuthType = location.pathname.split("/").at(-1);

  const authType: authType = isAuthType(pathAuthType) ? pathAuthType : "signin"; // or "signup"

  return (
    <>
      <Seo
        title={`Actifeet |  ${authType} `}
        description="Access your Actifeet account to manage orders, track purchases, and customize your shopping experience. Login or create an account now."
      >
        <meta name="robots" content="noindex, nofollow" />
      </Seo>
      <main>
        <AuthForm type={authType} />
      </main>
    </>
  );
};

export default Auth;
