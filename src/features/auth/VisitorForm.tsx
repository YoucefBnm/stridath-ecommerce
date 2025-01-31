import AuthInput from "@/components/AuthInput";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useHandleFormSubmit } from "@/hooks/useHandleFormSubmit";
import { selectLoading } from "@/store/user/user.selector";
import { authType } from "@/utils/authFormSchema.utils";
import { cn } from "@/utils/shadcn";
import { FC } from "react";
import { Control } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type VisitorFormProps = {
  authType: authType;
  className?: string;
};
const VisitorForm: FC<VisitorFormProps> = ({ authType, className }) => {
  const { form, signInWithGoogle, onSubmit } = useHandleFormSubmit(authType);
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);

  return (
    <Card className={cn("relative overflow-hidden", className)}>
      {loading && (
        <div className="absolute inset-0 size-full bg-gray-50/80 flex-center">
          <Spinner />
        </div>
      )}
      <CardHeader>
        <CardTitle className="capitalize font-heading">{authType}</CardTitle>
        <CardDescription>
          Create your account to get members benefits like fast checkout,
          coupons, discounts, special offers, and ournewest shoes and
          collections.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {authType === "signup" && (
              <AuthInput
                control={
                  form.control as Control<
                    | {
                        email: string;
                        password: string;
                        displayName?: string;
                        confirmPassword?: string;
                      }
                    | { password: string; displayName?: string; email?: string }
                  >
                }
                label="Display Name"
                name="displayName"
                placeholder="Enter your name"
              />
            )}
            <AuthInput
              control={
                form.control as Control<
                  | {
                      email: string;
                      password: string;
                      displayName?: string;
                      confirmPassword?: string;
                    }
                  | { password: string; displayName?: string; email?: string }
                >
              }
              label="Email"
              name="email"
              placeholder="Enter your email"
            />
            <AuthInput
              control={
                form.control as Control<
                  | {
                      email: string;
                      password: string;
                      displayName?: string;
                      confirmPassword?: string;
                    }
                  | { password: string; displayName?: string; email?: string }
                >
              }
              label="Password"
              name="password"
              placeholder="Enter your password"
            />
            {authType === "signup" && (
              <AuthInput
                control={
                  form.control as Control<
                    | {
                        email: string;
                        password: string;
                        displayName?: string;
                        confirmPassword?: string;
                      }
                    | { password: string; displayName?: string; email?: string }
                  >
                }
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
              {authType}
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
            {authType === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
          </small>

          <Button
            onClick={() =>
              authType === "signin" ? navigate("signup") : navigate("signin")
            }
            variant={"link"}
            className="font-heading"
          >
            {authType === "signin" ? "Sign up" : "Sign in"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VisitorForm;
