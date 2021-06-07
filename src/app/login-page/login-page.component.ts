import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  fullImagePath: string
  fullImagePathDos: string

  constructor() {

    this.fullImagePath = '/assets/imagenes/img3.jpg'
    this.fullImagePathDos = '/assets/imagenes/img4.jpg'

  }

  ngOnInit(): void {
  }

}
