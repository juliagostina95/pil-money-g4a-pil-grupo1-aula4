import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RegisterI, ResponseI } from './../interfaces/register.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url:string = 'https://localhost:44385/api/usuarios/';
  usuario!: RegisterI;
  urlNombre:string ='https://localhost:44385/api/nombreUsuario/';

  constructor(private http:HttpClient, private router: Router, private toast: ToastrService) { }

  crearUsuario(usuario:RegisterI){

    return this.http.post<RegisterI>(this.url, usuario)

  }


getNombreUsuario() : Observable<RegisterI>{

  return this.http.get<RegisterI>(this.urlNombre)

}

register(form: RegisterI) {
  this.crearUsuario(form).subscribe(
    (data) => {
       {

           this.router.navigate(['/login']);

        this.toast.success('Cuenta Registrada', 'Correcto');

      }



    }

    ,
    (error) => {
      console.log(error);
      this.toast.error('La cuenta ya esta Registrada', 'Error');
    }
  );

  }


}












