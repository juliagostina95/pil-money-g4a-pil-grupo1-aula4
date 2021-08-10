import { Component, OnInit } from '@angular/core';


export interface InversionesDetalle {
  fecha: Date;
  descripcion: string;
  monto: number
}

const ELEMENT_DATA: InversionesDetalle[] = [
  {descripcion: 'hello', fecha: new Date("January 25"), monto: 1.0079},
  {descripcion: 'hello', fecha: new Date("December 25"), monto: 4.0026},
  {descripcion: 'hello', fecha: new Date("December 25"), monto: 6.941},
  {descripcion: 'hello', fecha: new Date("December 25"), monto: 9.0122},
  {descripcion: 'hello', fecha: new Date("December 25"), monto: 10.811},
  {descripcion: 'hello', fecha: new Date("December 25"), monto: 12.0107},
  {descripcion: 'hello', fecha: new Date("December 25"), monto: 14.0067}
];

@Component({
  selector: 'app-inversiones',
  templateUrl: './inversiones.component.html',
  styleUrls: ['./inversiones.component.css']
})
export class InversionesComponent implements OnInit {

  displayedColumns: string[] = ['descripcion', 'fecha', 'monto'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
