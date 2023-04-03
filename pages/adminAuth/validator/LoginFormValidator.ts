import { AdminLoginModel } from "../models/AdminAuthModels";

export const LoginFormValidate = (formData: AdminLoginModel) => {
  const errors: any = {};

  if (!formData.username) {
    errors.username = "username is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
    errors.username = "username is invalid";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};
