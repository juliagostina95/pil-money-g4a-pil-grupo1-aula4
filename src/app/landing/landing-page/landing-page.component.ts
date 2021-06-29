import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  imgFondo: string
  imgIcon: string

  constructor(private router: Router) {
    this.imgFondo = '/assets/imagenes/img-fondo.png'
    this.imgIcon = '/assets/imagenes/money-check-alt-solid.svg'
  }

  ngOnInit(): void {
  }

  redirectToLanding(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> this.router.navigate([''])) && console.log('navengado por la landing')
 }

}
