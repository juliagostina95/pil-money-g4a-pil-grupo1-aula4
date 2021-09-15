import { RegisterI } from './../interfaces/register.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url:string = 'https://localhost:44385/api/usuarios/';

  constructor(private http:HttpClient) { }

  crearUsuario(usuario:RegisterI):Observable<RegisterI>{

    return this.http.post<RegisterI>(this.url, usuario)

  }




}
