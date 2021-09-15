import { LoginI } from "./login.interface";
import { RegisterI } from "./register.interface";

export interface ResponseI extends RegisterI, LoginI{
  token: string
}

