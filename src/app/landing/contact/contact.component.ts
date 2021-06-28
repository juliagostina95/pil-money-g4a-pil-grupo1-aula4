import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  imgFondo: string

  constructor() { 
    this.imgFondo = '/assets/imagenes/contacto.jpg'
  }

  ngOnInit(): void {
  }

}
