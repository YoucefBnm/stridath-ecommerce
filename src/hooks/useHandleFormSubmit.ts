import { authFormSchema, authType } from "@/utils/authFormSchema.utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailSignInStart,
  googleSignInStart,
  signUpStart,
} from "@/store/user/user.action";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "@/store/user/user.selector";

export function useHandleFormSubmit(type: authType) {
  const formSchema = authFormSchema(type);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

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

  return {
    form,
    signInWithGoogle,
    onSubmit,
  };
}
