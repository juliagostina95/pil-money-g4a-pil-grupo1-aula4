import { Component, OnInit } from '@angular/core';


interface Opciones{
  value    :number,
  viewValue:string
}


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})

export class CompraComponent implements OnInit {

  icono:string = '../../../assets/imagenes/arrow_right_alt_black_48dp.svg'
  opciones:Opciones[] = [
                         {value:0,viewValue:'Dólares (Compra)'},
                         {value:1,viewValue:'Dólares (Venta)'},
                         {value:2,viewValue:'BTC (Compra)'},
                         {value:3,viewValue:'BTC (Venta)'}
                        ]
  opcionElegida: number = -1;
  monto: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  validarCotizacion(opcionElegida:number){
    if (this.opcionElegida === 0) {
      return `Cotización del día (${new Date().toLocaleDateString()}): Ars$177.00`;
    } else if (this.opcionElegida === 1) {
      return `Cotización del día (${new Date().toLocaleDateString()}): Ars$180.00`;
    } else if (this.opcionElegida === 2) {
      return `Cotización del día (${new Date().toLocaleDateString()}): Ars$7.130.273,36`;
    }else if (this.opcionElegida === 3) {
      return `Cotización del día (${new Date().toLocaleDateString()}): Ars$6.858.764,73`;
    }else {
      return;
    }
  }

   operacion(monto:number){
    if (this.opcionElegida === 0) {
      return monto/177.00;
    } else if (this.opcionElegida === 1) {
      return (monto*180.00);
    }else if (this.opcionElegida === 2) {
      return (monto/7130273.36);
    }else if (this.opcionElegida === 3) {
      return (monto*6858764.73);
    }else {
      return;
    }
  }

}
