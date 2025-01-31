import { AuthError } from "firebase/auth";
import { z } from "zod";

export type authType = "signin" | "signup";
// Validate authType
export const isAuthType = (type: string | undefined): type is authType =>
  type === "signin" || type === "signup";

export const authFormSchema = (authType: authType) =>
  z
    .object({
      displayName:
        authType === "signup" ? z.string().min(3) : z.string().optional(),
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword:
        authType === "signup"
          ? z.string().min(8)
          : z.string().min(8).optional(),
    })
    .superRefine((values, ctx) => {
      if (authType === "signup" && values.password !== values.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Passwords must match",
          path: ["confirmPassword"],
        });
      }
    });
export const loggedInFormSchema = z.object({
  displayName: z.string().min(3).optional(),
  email: z.string().email().optional(),
  password: z.string().min(8),
});

// Custom type guard function without using `any`
export function isAuthError(error: unknown): error is AuthError {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
  );
}
