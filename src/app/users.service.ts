import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { LoginI } from './login.interface';
import {catchError, map} from 'rxjs/operators'
import { Users } from './users.interface';
import { ResponseI, ResponseU } from './response.interface';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private loggedin = new BehaviorSubject<boolean>(false)

  urlRegister:string = "http://localhost:3000/users";
  urlLogin:string = "http://localhost:3000/login";

get isLogged(): Observable<boolean>{
  return this.loggedin.asObservable()
}
  constructor(private http:HttpClient, private toast: ToastrService) { }

  loged: boolean = false;
  ejemplo: boolean = false;

  register(form:LoginI):Observable<ResponseI | void>{
    let direccion = this.urlRegister;
    return this.http.post<ResponseI>(direccion,form).pipe(
      map((res: ResponseI) =>{
            this.loggedin.next(true)
            return res;
      }),
      catchError((err) => this.handlerError(err))

    )
  }

  logout() : void{
    localStorage.removeItem('token');
    this.loggedin.next(false)
  }

  login(form:Users):Observable<ResponseU | void>{
    let direccion = this.urlLogin;
    return this.http.post<ResponseU>(direccion,form).pipe(
      map((res: ResponseU) =>{
            this.saveToken(res.accessToken)
            this.loggedin.next(true)
            return res;
      })
    )
  }

  saveToken(token: string) : void{
     localStorage.setItem('token', token);
  }

   handlerError(err: any): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    return throwError(errorMessage);
  }


}
