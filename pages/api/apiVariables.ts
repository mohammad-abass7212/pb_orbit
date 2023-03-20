export const BASE_API_URL = "http://34.148.83.101:5000";
export const ADMIN_LOGIN_API_ENDPOINT = BASE_API_URL + "/auth/login";
export const ADMIN_SIGNUP_API_ENDPOINT = BASE_API_URL + "/auth/signup";
export const ADMIN_LOGOUT_API_ENDPOINT = BASE_API_URL + "/auth/logout";
export const SIGNUP_API_ENDPOINT = BASE_API_URL + ADMIN_SIGNUP_API_ENDPOINT;
export const RESEND_OTP_API_ENDPOINT = BASE_API_URL + "/auth/resend-otp";
export const VERIFY_OTP_API_ENDPOINT = BASE_API_URL + "/auth/verify-otp";
export const SEND_OTP_EMAIL_API_ENDPOINT =
  BASE_API_URL + "/auth/send-otp-email";
export const CHANGE_PASSWORD_API_ENDPOINT =
  BASE_API_URL + "/auth/change-password";
export const LOGIN_USER_API_ENDPOINT = BASE_API_URL + ADMIN_LOGIN_API_ENDPOINT;
export const CREATE_COMMUNITY_API_ENDPOINT =
  BASE_API_URL + "/communities/create";
export const UPLOAD_COMMUNITY_PICTURES_API_ENDPOINT =
  BASE_API_URL + "/communities/upload-pictures";
export const GET_DASHBOARD_DATA_API_ENDPOINT =
  BASE_API_URL + "/communities/dashboard";
export const CREATE_FREE_COMMUNITY_API_ENDPOINT =
  BASE_API_URL + "/communities/create_free";
export const GET_FREE_COMMUNITIES_API_ENDPOINT =
  BASE_API_URL + "/communities/get_free";
export const SEARCH_USERS_API_ENDPOINT = BASE_API_URL + "/users/search";
export const ADD_USERS_TO_COMMUNITY_API_ENDPOINT =
  BASE_API_URL + "/communities/add_users";
export const GET_USERS_LIST_API_ENDPOINT =
  BASE_API_URL + "/communities/users_list";
export const DISABLE_USER_API_ENDPOINT = BASE_API_URL + "/users/disable";
export const ENABLE_USER_API_ENDPOINT = BASE_API_URL + "/users/enable";
export const REMOVE_PLAYER_FROM_COMMUNITY_API_ENDPOINT =
  BASE_API_URL + "/communities/remove_player";
