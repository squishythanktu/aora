import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(100, "First name must be at most 100 characters")
    .required("First name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required(),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required(),
});
