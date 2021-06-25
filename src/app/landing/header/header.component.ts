import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imgIcon: string

  constructor(private router: Router) {
    this.imgIcon = '/assets/imagenes/money-check-alt-solid.svg'
  }

  ngOnInit(): void {
  }

}
