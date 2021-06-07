import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  fullImagePath: string;
  fullImagePathDos: string;
  
  constructor() {
  
    this.fullImagePath = '/assets/imagenes/img1.jpg'
    this.fullImagePathDos = '/assets/imagenes/img2.jpg'
  }

  ngOnInit(): void {}

}
