import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  logoPil    : string = 'assets/imagenes/pil-Money-Logo.png';
  imgMoney : string = 'assets/imagenes/stephen-phillips-hostreviews-co-uk-em37kS8WJJQ-unsplash.jpg';
  constructor() { }

  ngOnInit(): void {
  }

  selected = 'Cuenta MN';

  checked = false;
  indeterminate = false;
  labelPosition: 'plazoFijoARS' | 'plazoFijoUSD' | 'FCIARS' | 'FCIUSD' = 'plazoFijoARS';
  disabled = false;
  labelRenovacion: 'si' | 'no' = 'si';
}
