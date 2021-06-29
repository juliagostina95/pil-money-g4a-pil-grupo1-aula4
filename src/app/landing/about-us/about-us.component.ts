import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  imgFondo: string
  imgIcon: string

  constructor(private router: Router) {
    this.imgFondo = '/assets/imagenes/nosotros.jpg'
    this.imgIcon = '/assets/imagenes/money-check-alt-solid.svg'
  }

  redirectToAbout(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> this.router.navigate(['aboutus'])) && console.log('navengado por el about')
 }

  ngOnInit(): void {
  }

}
