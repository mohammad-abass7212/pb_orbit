export interface AdminSignUpModel {
  email: string;
  password: string;
  mobile_number: string;
  country_code: string;
  social_login: string;
}

export class AdminLoginModel {

  username: string;
  password: string;
  constructor(usrnm:string, pss:string){
    this.username = usrnm,
    this.password = pss
  };
}
