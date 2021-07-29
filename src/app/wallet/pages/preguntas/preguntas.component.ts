import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
