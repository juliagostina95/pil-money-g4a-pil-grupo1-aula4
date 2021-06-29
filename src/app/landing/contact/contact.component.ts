import { StylesService } from 'src/app/services/styles.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  imgFondo: string

  constructor(private router: Router, public styles: StylesService) {
    this.imgFondo = '/assets/imagenes/contacto.jpg'

  }


  redirectToContact(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> this.router.navigate(['contact'])) && console.log('navengado por el contact')
 }

  ngOnInit(): void {
  }



}
