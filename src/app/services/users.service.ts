import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RegisterI } from '../interfaces/register.interface';
import { map} from 'rxjs/operators'
import { LoginI } from '../interfaces/login.interface';
import { ResponseI } from '../interfaces/response.interface';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlRegister:string = "http://localhost:3000/users";
  urlLogin:string = "http://localhost:3000/login";

  constructor(private http:HttpClient, private toast: ToastrService) { }

  loged: boolean = false;

  register(form:RegisterI):Observable<ResponseI | void>{
    let direccion = this.urlRegister;
    return this.http.post<ResponseI>(direccion,form).pipe(
      map((res: ResponseI) =>{
            return res;
      })
    )
  }

  logout() : void{
    localStorage.removeItem('token');
  }

  login(form:LoginI):Observable<ResponseI | void>{
    let direccion = this.urlLogin;
    return this.http.post<ResponseI>(direccion,form).pipe(
      map((res: ResponseI) =>{
            this.saveToken(res.accessToken)
            return res;
      })
    )
  }

  saveToken(token: string) : void{
     localStorage.setItem('token', token);
  }

}
