import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresaryretirar',
  templateUrl: './ingresaryretirar.component.html',
  styleUrls: ['./ingresaryretirar.component.css']
})
export class IngresaryretirarComponent implements OnInit {
  cuentaEj : string = '/assets/imagenes/cuenta.png';
  constructor() { }

  ngOnInit(): void {
  }

  selected = 'Cuenta Pesos 1';

  checked = false;
  indeterminate = false;
  labelPosition: 'plazoFijoARS' | 'plazoFijoUSD' | 'FCIARS' | 'FCIUSD' = 'plazoFijoARS';
  disabled = false;
  labelRenovacion: 'si' | 'no' = 'si';
}
