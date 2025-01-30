import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import { authFormSchema, authType } from "@/utils/authFormSchema.utils";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, selectLoading } from "@/store/user/user.selector";
import Logged from "@/features/auth/Logged";
import Visitor from "@/features/auth/Visitor";
import { Form } from "@/components/ui/form";
import { useHandleFormSubmit } from "@/hooks/useHandleFormSubmit";
import AuthInput from "@/components/AuthInput";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import Spinner from "@/components/Spinner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  emailSignInStart,
  googleSignInStart,
  signUpStart,
} from "@/store/user/user.action";
import { toast } from "sonner";

type AuthFormProps = {
  type: authType;
};
const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const formSchema = authFormSchema(type);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const loading = useSelector(selectLoading);

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
      toast.error("error in google sign in");
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
    <section className="bg-gray-50 min-h-svh px-default py-12 flex-center">
      <Card className="w-4/5 md:w-3/5 xl:w-2/5 relative overflow-hidden">
        {loading && (
          <div className="bg-gray-100/80 absolute inset-0 size-full flex-center">
            <Spinner />
          </div>
        )}

        <CardHeader>
          {currentUser ? (
            <Logged currentUser={currentUser} />
          ) : (
            <Visitor authType={type} />
          )}
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

              <Button
                className="w-full font-heading font-normal capitalize"
                aria-label="Submit"
                type="submit"
                size={"lg"}
              >
                {type}
              </Button>
            </form>
          </Form>
          <Separator className="my-4" />
          <Button
            className="w-full font-heading font-normal capitalize"
            aria-label="sign in with google"
            variant={"outline"}
            size={"lg"}
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </Button>
        </CardContent>

        <CardFooter>
          <div className="flex-center gap-1 mt-4">
            <small className="text-sm text-gray-500">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
            </small>

            <Button
              onClick={() =>
                type === "signin" ? navigate("signup") : navigate("signin")
              }
              variant={"link"}
              className="font-heading"
            >
              {type === "signin" ? "Sign up" : "Sign in"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default AuthForm;
