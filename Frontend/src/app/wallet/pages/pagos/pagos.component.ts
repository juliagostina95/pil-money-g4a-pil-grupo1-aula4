import { Component, OnInit,} from '@angular/core';

export interface InversionesDetalle {
  fecha: Date;
  descripcion: string;
  monto: number;
  estado: string;
}

const ELEMENT_DATA: InversionesDetalle[] = [
  {descripcion: 'Luz', fecha: new Date("January 25"), monto: 1.0079, estado: "A pagar"},
  {descripcion: 'Gas', fecha: new Date("December 25"), monto: 4.0026, estado: "A pagar"},
  {descripcion: 'Luz', fecha: new Date("December 25"), monto: 6.941, estado: "Pagado"},
  {descripcion: 'Gas', fecha: new Date("December 25"), monto: 9.0122, estado: "Pagado"},
  {descripcion: 'Luz', fecha: new Date("December 25"), monto: 10.811, estado: "Pagado"},
  {descripcion: 'Gas', fecha: new Date("December 25"), monto: 12.0107, estado: "Pagado"},
  {descripcion: 'Luz', fecha: new Date("December 25"), monto: 14.0067, estado: "Pagado"}
];

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  displayedColumns: string[] = ['descripcion', 'fecha', 'monto','estado'];
  dataSource = ELEMENT_DATA;


  ngOnInit(): void {
  }

  selected = 'Cuenta Pesos';

  checked = false;
  indeterminate = false;
  labelPosition: 'plazoFijoARS' | 'plazoFijoUSD' | 'FCIARS' | 'FCIUSD' = 'plazoFijoARS';
  disabled = false;
  labelRenovacion: 'si' | 'no' = 'si';

  
}



