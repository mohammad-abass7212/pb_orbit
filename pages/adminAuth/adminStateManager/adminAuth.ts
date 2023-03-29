import axios from "axios";
import { AdminSignUpModel, AdminLoginModel } from "../models/AdminAuthModels";
import {
  ADMIN_LOGIN_API_ENDPOINT,
  ADMIN_SIGNUP_API_ENDPOINT,
  BASE_API_URL,
} from "../../api/apiVariables";
import {
  USER_TYPE_HEADER,
  CONTENT_TYPE_HEADER_SIGNUP,
  CONTENT_TYPE_HEADER_LOGIN,
} from "../headers/adminRequestHeaders";

export const AdminSignupCaller = async (formData: AdminSignUpModel) => {
  try {
    console.log("formdata", formData);
    const response = await axios.post(ADMIN_SIGNUP_API_ENDPOINT, formData, {
      headers: {
        "Content-Type": CONTENT_TYPE_HEADER_SIGNUP,
        user_type: USER_TYPE_HEADER,
      },
    });
    console.log("Response from API:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error from API:", error);
    alert(error);
    throw error;
  }
};

export const AdminLoginCaller = async (formData: any) => {
  try {
    console.log(formData);
    //
    const response = await axios.post(ADMIN_LOGIN_API_ENDPOINT, formData, {
      headers: {
        "Content-Type": CONTENT_TYPE_HEADER_LOGIN,
        user_type: USER_TYPE_HEADER,
      },
    });
    console.log("Response from API:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error from API:", error);
    return error;
  }
};
