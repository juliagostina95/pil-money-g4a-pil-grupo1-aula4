
import { LoginI } from './../../../interfaces/login.interface';
import { UsersService } from './../../../services/users.service';

import { Observable } from 'rxjs';

import { RegisterI, ResponseI } from './../../../interfaces/register.interface';
import { Component, OnInit } from '@angular/core';
import { CuentasService } from 'src/app/services/cuentas.service';
import { RegisterService } from 'src/app/services/register.service';
import { cuentas, cuentasAlias } from 'src/app/interfaces/cuenta.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombreCompleto!: string;
  token!: string
  logoPil    : string = 'assets/imagenes/pil-Money-Logo.png';
  imgMoney : string = 'assets/imagenes/stephen-phillips-hostreviews-co-uk-em37kS8WJJQ-unsplash.jpg';
  dataUser!: RegisterI
  cuil!: string;

randomNumber!: any
cuentaAlias: any
cuentasArray: cuentasAlias[] = []
cuentaRandom!: any
  constructor(public userService: UsersService, public registerService: RegisterService) {

  }

  ngOnInit(): void {

     this.token = this.userService.currentUserSubject.value.nombreCompleto
    this.nombreCompleto = this.userService.getDecodedAccessToken(this.token).unique_name
    /* this.cuil = this.userService.getDecodedAccessToken(this.token).unique_name[1] */
   /*  console.log('prueba')
   console.log(this.cuil)
 */


  }



  selected = 'Cuenta MN';

  checked = false;
  indeterminate = false;
  labelPosition: 'plazoFijoARS' | 'plazoFijoUSD' | 'FCIARS' | 'FCIUSD' = 'plazoFijoARS';
  disabled = false;
  labelRenovacion: 'si' | 'no' = 'si';
}


