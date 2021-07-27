import { Component, OnInit } from '@angular/core';


export interface InversionesDetalle {
  nombre: string;
  alias: string;
  cvu: number
}

const ELEMENT_DATA: InversionesDetalle[] = [
  {nombre: 'hello', alias: 'a.a.a', cvu: 12345678912345678912},
  {nombre: 'hello', alias: 'b.b.b', cvu: 12345678912345678912},
  {nombre: 'hello', alias: 'c.c.c', cvu: 12345678912345678912},
  {nombre: 'hello', alias: 'd.d.d', cvu: 12345678912345678912},
  {nombre: 'hello', alias: 'e.e.e', cvu: 12345678912345678912},
  {nombre: 'hello', alias: 'f.f.f', cvu: 12345678912345678912},
  {nombre: 'hello', alias: 'g.g.g', cvu: 12345678912345678912}
];

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  

  displayedColumns: string[] = ['nombre', 'alias', 'cvu'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }


}
