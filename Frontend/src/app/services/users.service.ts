import { RegisterI } from './../interfaces/register.interface';
import { LoginI } from './../interfaces/login.interface';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";


import { map} from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';
import { ProviderMeta } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  urlLogin: string = "https://localhost:44385/api/login/authenticate";

  loggedIn= new BehaviorSubject<boolean>(false);
  currentUserSubject: BehaviorSubject<LoginI>;
  currentUser: Observable<LoginI>;

  loged: boolean = false;
  tokenOtro: any = localStorage.getItem('token')

  constructor(private http:HttpClient, private toast: ToastrService) {


  console.log("Servicio de Atuenticación está corriendo");
  this.currentUserSubject = new BehaviorSubject<LoginI>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  this.currentUser = this.currentUserSubject.asObservable();

  }

  login(usuario: LoginI): Observable<any> {  //de inicio de sesión viene acá y general el token.
    return this.http.post<any>(this.urlLogin, usuario)
      .pipe(map(data => {
        localStorage.setItem('currentUser', JSON.stringify(data ));
        this.currentUserSubject.next(data);
        this.loggedIn.next(true);
        console.log(data);   //

        return data;
      }));
  }

  logout(): void{
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);

  }

  get usuarioAutenticado(): LoginI{
    return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {

    return this.loggedIn.asObservable();
  }



}
