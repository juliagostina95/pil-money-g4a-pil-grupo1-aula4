import { HttpClient } from '@angular/common/http';
import { tipoMoneda } from './../interfaces/tipo-moneda.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoMonedaService {
   urlDos: string = 'https://localhost:44385/api/tipoMonedas/2/'
   urlUno: string = 'https://localhost:44385/api/tipoMonedas/1/'
   urlTres: string = 'https://localhost:44385/api/tipoMonedas/3/'
  constructor(private http: HttpClient) { }

  obtenerMonedaId2() : Observable<tipoMoneda>{
      return this.http.get<tipoMoneda>(this.urlDos)

  }

  obtenerMonedaId1() : Observable<tipoMoneda>{
    return this.http.get<tipoMoneda>(this.urlUno)

}

obtenerMonedaId3() : Observable<tipoMoneda>{
  return this.http.get<tipoMoneda>(this.urlTres)

}

}
