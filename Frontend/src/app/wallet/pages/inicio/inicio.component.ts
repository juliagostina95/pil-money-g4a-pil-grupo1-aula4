import { UsersService } from './../../../services/users.service';

import { Observable } from 'rxjs';

import { RegisterI, ResponseI } from './../../../interfaces/register.interface';
import { Component, OnInit } from '@angular/core';
import { CuentasService } from 'src/app/services/cuentas.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombreCompleto!: string;

  logoPil    : string = 'assets/imagenes/pil-Money-Logo.png';
  imgMoney : string = 'assets/imagenes/stephen-phillips-hostreviews-co-uk-em37kS8WJJQ-unsplash.jpg';
  dataUser!: RegisterI
  constructor(public cuentas: CuentasService, public userService: RegisterService) {



  }






/* getNombre(nombre: string){
   this.userService.getNombreUsuario(nombre).subscribe(
     (data: RegisterI) =>{
       if(this.userService.crearUsuario(data))
       {
         this.data.nombreCompleto = data.nombreCompleto;

       }

     }
   )

} */



  ngOnInit(): void {
     this.userService.getNombreUsuario().subscribe(
       res =>{
         this.dataUser.nombreCompleto = res.nombreCompleto;
       }
     )
  }

  selected = 'Cuenta MN';

  checked = false;
  indeterminate = false;
  labelPosition: 'plazoFijoARS' | 'plazoFijoUSD' | 'FCIARS' | 'FCIUSD' = 'plazoFijoARS';
  disabled = false;
  labelRenovacion: 'si' | 'no' = 'si';
}


