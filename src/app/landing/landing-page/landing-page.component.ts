import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  imgFondo: string

  constructor() {
    this.imgFondo = '/assets/imagenes/img-fondo.png'
  }

  ngOnInit(): void {
  }

}
