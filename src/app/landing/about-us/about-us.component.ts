import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StylesService } from 'src/app/services/styles.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  imgFondo: string

  constructor(private router: Router, public styles: StylesService) {
    this.imgFondo = '/assets/imagenes/nosotros.jpg'

  }

  redirectToAbout(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> this.router.navigate(['aboutus'])) && console.log('navengado por el about')
 }

  ngOnInit(): void {
  }

}
