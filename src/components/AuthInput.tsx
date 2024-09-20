import { memo } from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { AuthInputProps } from "@/types";
import { Input } from "./ui/input";

const AuthInput = memo(function AuthInput(props: AuthInputProps) {
  const { control, label, name, placeholder } = props;

  const isPassword = name === "password" || name === "confirmPassword";
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          <FormLabel htmlFor={name} className="font-heading">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className=" border-neutral-500 "
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
});

export default AuthInput;
