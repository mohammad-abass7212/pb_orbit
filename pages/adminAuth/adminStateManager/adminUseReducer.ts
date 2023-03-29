import { useState, useReducer } from "react";
import { AdminSignUpModel, AdminLoginModel } from "../models/AdminAuthModels";
import { AdminSignupCaller, AdminLoginCaller } from "./adminAuth";

// SIGNUP LOGIC
interface SIGNUP_STATE {
  formData: AdminSignUpModel;
  isLoading: boolean;
  error: any;
  response: {};
}

const initialState: SIGNUP_STATE = {
  formData: {
    email: "",
    password: "",
    mobile_number: "",
    country_code: "+91",
    social_login: "false",
  },
  response: {},
  isLoading: false,
  error: null,
};

type SIGNUP_ACTION =
  | { type: "SET_FORM_DATA"; payload: AdminSignUpModel }
  | { type: "SET_IS_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: any }
  | { type: "SET_SUCESS"; payload: any };

const reducer = (state: SIGNUP_STATE, action: SIGNUP_ACTION): SIGNUP_STATE => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return {
        ...state,
        formData: action.payload,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_SUCESS":
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};

export const useSignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: "SET_FORM_DATA",
      payload: {
        ...state.formData,
        [name]: value,
      },
    });
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    dispatch({ type: "SET_IS_LOADING", payload: true });
    try {
      const response = await AdminSignupCaller(state.formData);
      console.log("Response from API:", response);
      dispatch({ type: "SET_SUCESS", payload: response });
      dispatch({ type: "SET_IS_LOADING", payload: false });
      // handle successful signup
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error });
      dispatch({ type: "SET_IS_LOADING", payload: false });
      // handle error
    }
  };

  return {
    formData: state.formData,
    isLoading: state.isLoading,
    error: state.error,
    response: state.response,
    handleFormSubmit,
    handleInputChange,
  };
};

// LOGIN LOGIC
interface LOGIN_STATE {
  formData: AdminLoginModel;
  isLoading: boolean;
  error: any;
  response: {};
}

const LOGIN_INITIAL_STATE: LOGIN_STATE = {
  formData: {
    username: "",
    password: "",
  },
  response: {},
  isLoading: false,
  error: null,
};

type LOGIN_ACTION =
  | { type: "SET_FORM_DATA"; payload: AdminLoginModel }
  | { type: "SET_IS_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: any }
  | { type: "SET_SUCESS"; payload: any };

const LOGIN_REDUSER = (
  state: LOGIN_STATE,
  action: LOGIN_ACTION
): LOGIN_STATE => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return {
        ...state,
        formData: action.payload,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_SUCESS":
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};

export const USE_LOGIN = () => {
  const [state, dispatch] = useReducer(LOGIN_REDUSER, LOGIN_INITIAL_STATE);

  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    dispatch({
      type: "SET_FORM_DATA",
      payload: {
        ...state,
        [name]: value,
      },
    });
  };

  const handleLoginSubmit = async (event: any) => {
    event.preventDefault();
    dispatch({ type: "SET_IS_LOADING", payload: true });
    try {
      const response = await AdminLoginCaller(state);
      dispatch({ type: "SET_SUCESS", payload: response });
      dispatch({ type: "SET_IS_LOADING", payload: false });
      // handle successful signup
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error });
      dispatch({ type: "SET_IS_LOADING", payload: false });
      // handle error
    }
  };

  return {
    formData: state.formData,
    isLoading: state.isLoading,
    error: state.error,
    response: state.response,
    handleLoginInput,
    handleLoginSubmit,
  };
};
