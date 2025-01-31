import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserData } from "@/firebase/types";
import { FC } from "react";
import UserAvatar from "./UserAvatar";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { signOutStart } from "@/store/user/user.action";
import { LogOutIcon } from "lucide-react";
import { cn } from "@/utils/shadcn";
import { Form } from "@/components/ui/form";
import { useHandleFormSubmit } from "@/hooks/useHandleFormSubmit";
import { selectLoading } from "@/store/user/user.selector";
import AuthInput from "@/components/AuthInput";
import Spinner from "@/components/Spinner";

type LoggedFormProps = {
  currentUser: UserData;
  className?: string;
};
const LoggedForm: FC<LoggedFormProps> = ({ currentUser, className }) => {
  const dispatch = useDispatch();
  const signout = () => dispatch(signOutStart());
  const { loggedInForm, onUpdateUserInfo } = useHandleFormSubmit("signin");
  const loading = useSelector(selectLoading);

  return (
    <Card className={cn("rounded-sm relative overflow-hidden", className)}>
      {loading && (
        <div className="absolute inset-0 size-full bg-gray-50/80 flex-center">
          <Spinner />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2 justify-start">
          <UserAvatar currentUser={currentUser} />

          <CardTitle className="font-heading font-normal">
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
      </CardHeader>

      <CardContent>
        <Form {...loggedInForm}>
          <form
            onSubmit={loggedInForm.handleSubmit(onUpdateUserInfo)}
            className="space-y-4"
          >
            <AuthInput
              control={loggedInForm.control}
              label="Name"
              name="displayName"
            />
            <AuthInput
              control={loggedInForm.control}
              label="Email"
              name="email"
            />
            <AuthInput
              control={loggedInForm.control}
              label="Password"
              name="password"
            />
            <Button
              className="w-full font-heading font-normal capitalize rounded-sm"
              aria-label="Submit"
              type="submit"
              size={"lg"}
            >
              edit info
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoggedForm;
