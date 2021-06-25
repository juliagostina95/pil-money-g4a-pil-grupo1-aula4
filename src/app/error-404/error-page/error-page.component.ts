import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

   errorImg: string

  constructor() {
    this.errorImg = 'assets/imagenes/error404.jpg'
  }

  ngOnInit(): void {
  }

}
