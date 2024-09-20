import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import {
  emailSignInStart,
  googleSignInStart,
  signOutStart,
  signUpStart,
} from "@/store/user/user.action";
import { selectCurrentUser, selectLoading } from "@/store/user/user.selector";
import { authFormSchema, authType } from "@/utils/authFormSchema.utils";
import { useNavigate } from "react-router-dom";
import Spinner from "@/components/Spinner";
import { UserData } from "@/firebase/types";
import UserAvatar from "@/components/UserAvatar";
import { Separator } from "@/components/ui/separator";
import { LogoutIcon } from "@/assets";
import NavLogo from "@/components/NavLogo";
import AuthInput from "@/components/AuthInput";

const AuthFormHeaderLoggedIn = ({ currentUser }: { currentUser: UserData }) => {
  const dispatch = useDispatch();
  const signout = () => dispatch(signOutStart());

  return (
    <div className="flex items-center flex-wrap gap-4 justify-start">
      <h3 className="heading-base">
        Hello {currentUser.displayName && currentUser.displayName}
      </h3>
      <UserAvatar currentUser={currentUser} />

      <Badge variant={"outline"} className="py-1 px-4 flex-center gap-2">
        <NavLogo />

        <span className=" text-neutral-500 font-normal leading-none text-xs">
          Member
        </span>
      </Badge>

      <Button
        title="logout"
        aria-label="logout"
        variant={"ghost"}
        size={"icon"}
        onClick={signout}
      >
        <img width={20} height={20} aria-hidden src={LogoutIcon} />
      </Button>
    </div>
  );
};

const AuthFormHeaderLoggedOut = ({ authType }: { authType: authType }) => {
  return (
    <div className="flex max-w-fit flex-col items-start gap-4">
      <h2 className="heading-md capitalize">{authType}</h2>
      {authType === "signup" && (
        <p className="text-xs text-neutral-500 max-w-[38ch]">
          Create your account to get members benefits like fast checkout,
          coupons, discounts, special offers, and ournewest shoes and
          collections.
        </p>
      )}
      <Separator className="mb-4" />
    </div>
  );
};

const AuthForm = ({ type }: { type: authType }) => {
  const currentUser = useSelector(selectCurrentUser);
  const loading = useSelector(selectLoading);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInWithGoogle = async () => {
    try {
      dispatch(googleSignInStart());
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const { displayName, email, password } = data;
      if (type === "signup") {
        displayName && dispatch(signUpStart(email, password, displayName));
      }
      if (type === "signin") {
        dispatch(emailSignInStart(email, password));
      }
      if (currentUser) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="py-12 px-default">
      <div>
        <>
          {currentUser ? (
            <AuthFormHeaderLoggedIn currentUser={currentUser} />
          ) : (
            <AuthFormHeaderLoggedOut authType={type} />
          )}
        </>

        {currentUser ? (
          <div className=" mt-2 text-neutral-500">{currentUser.email}</div>
        ) : (
          <div className="relative py-4 px-6 mx-auto w-4/5 md:w-3/5 xl:w-2/5">
            {loading && (
              <div className="absolute inset-0 size-full bg-transparent z-10 flex-center">
                <Spinner />
              </div>
            )}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="form-layout"
              >
                {type === "signup" && (
                  <AuthInput
                    control={form.control}
                    label="Display Name"
                    name="displayName"
                    placeholder="Enter your name"
                  />
                )}

                <AuthInput
                  control={form.control}
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                />
                <AuthInput
                  control={form.control}
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                />

                {type === "signup" && (
                  <AuthInput
                    control={form.control}
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                  />
                )}
                <Button className="link w-ful" size={"lg"} type="submit">
                  {type}
                </Button>
              </form>
              <Button
                variant={"outline"}
                className="link mt-2 w-full"
                size={"lg"}
                onClick={signInWithGoogle}
              >
                Signin with Google
              </Button>
              <div className="flex-center gap-1 mt-4">
                <small className="text-sm text-neutral-500">
                  {type === "signin"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </small>

                <Button
                  onClick={() =>
                    type === "signin" ? navigate("signup") : navigate("signin")
                  }
                  variant={"link"}
                  className="link"
                >
                  {type === "signin" ? "Sign up" : "Sign in"}
                </Button>
              </div>
            </Form>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuthForm;
