import { AdminSignUpModel } from "../models/AdminAuthModels";

export const validate = (formData: AdminSignUpModel) => {
  const errors: any = {};

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (!formData.mobile_number) {
    errors.mobile_number = "Mobile number is required";
  }

  return errors;
};
