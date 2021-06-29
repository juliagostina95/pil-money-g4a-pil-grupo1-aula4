import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  imgFondo: string
  imgIcon: string

  constructor(private router: Router) {
    this.imgFondo = '/assets/imagenes/contacto.jpg'
    this.imgIcon = '/assets/imagenes/money-check-alt-solid.svg'
  }


  redirectToContact(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> this.router.navigate(['contact'])) && console.log('navengado por el contact')
 }

  ngOnInit(): void {
  }



}
