import { AuthInputProps } from "@/types";
import { FC } from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const AuthInput: FC<AuthInputProps> = (props) => {
  const { control, label, name, placeholder } = props;

  const isPassword = name === "password" || name === "confirmPassword";
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          <FormLabel htmlFor={name} className="font-heading capitalize">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              className="rounded-sm"
              placeholder={placeholder}
              type={isPassword ? "password" : "text"}
              id={name}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </div>
      )}
    />
  );
};

export default AuthInput;
