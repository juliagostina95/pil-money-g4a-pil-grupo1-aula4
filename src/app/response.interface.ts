import { LoginI } from "./login.interface";
import { Users } from "./users.interface";

export interface ResponseI extends LoginI{
  message: string;
  accessToken: string
  userId: number;
}

export interface ResponseU extends Users{
  message: string;
  accessToken: string;
  userId: number;
}
