import { StylesService } from './../../services/styles.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  imgFondo: string


  constructor(private router: Router, public styles: StylesService) {
    this.imgFondo = '/assets/imagenes/img-fondo.png'

  }

  ngOnInit(): void {
  }

  redirectToLanding(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> this.router.navigate([''])) && console.log('navengado por la landing')
 }



}
