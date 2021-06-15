import { RegisterI } from "./register.interface";
import { LoginI } from "./login.interface";

export interface ResponseI extends RegisterI{
  accessToken: string
}

export interface ResponseU extends LoginI{
  accessToken: string;
}
