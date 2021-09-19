import { cuentas } from './../interfaces/cuenta.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  url:string = 'https://localhost:44385/api/cuentas/';
  

  constructor(private http:HttpClient) { }

  crearCuentas(cuentas:cuentas):Observable<cuentas>{

    return this.http.post<cuentas>(this.url, cuentas)

  }




}
