import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  logo     : string = 'assets/imagenes/money-check-alt-solid.svg';
  imgMoney : string = 'assets/imagenes/kisspng-money-bag-drawing-clip-art-stack-of-money-5b0490b132c9c0.795382731527025841208.png';
  constructor() { }

  ngOnInit(): void {
  }

}
