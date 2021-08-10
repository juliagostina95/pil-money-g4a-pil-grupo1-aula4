import { RegisterI } from "./register.interface";
import { LoginI } from "./login.interface";

export interface ResponseI extends RegisterI, LoginI{
  accessToken: string
}

