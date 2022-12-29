import { object, string, ref } from "yup";

export const validationSchema = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  firstName: string().required("Name is required"),
  lastName: string().required("Last name is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: string()
    .required("Password did not match")
    .oneOf([ref("password")], "Password must match"),
});
