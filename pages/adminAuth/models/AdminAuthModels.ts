export interface AdminSignUpModel {
  email: string;
  password: string;
  mobile_number: string;
  country_code: string;
  social_login: string;
}

export interface AdminLoginModel {
  email: string;
  password: string;
}
