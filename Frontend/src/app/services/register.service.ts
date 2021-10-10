import { cuentas, cuentasAlias } from './../interfaces/cuenta.interface';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RegisterI, ResponseI } from './../interfaces/register.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

const params = new HttpParams()
    .set('cuil', '"$key"')
    .set('limitToFirst', "1");


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url:string = 'https://localhost:44385/api/usuarios/';
  usuario!: RegisterI;
  urlCuenta:string ='https://localhost:44385/api/cuentas/';
  cuenta!: cuentas;


  constructor(private http:HttpClient, private router: Router, private toast: ToastrService) { }

  crearUsuario(usuario:RegisterI){
    
    return this.http.post<RegisterI>(this.url, usuario)

  }


  crearCuenta(){
    return this.http.post<cuentas>(this.url, this.cuenta)
  }



}












