import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { LoginI } from '../../interfaces/login.interface';
import { ToastrService } from 'ngx-toastr';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  fullImagePath: string
  fullImagePathDos: string
  hide: boolean = false;

  constructor(public formBuilder: FormBuilder, public sanitizer: DomSanitizer, private router: Router, private user: UsersService, private toast: ToastrService, public commonForm: FormService) {

    this.fullImagePath = '/assets/imagenes/img3.jpg'
    this.fullImagePathDos = '/assets/imagenes/img4.jpg'

  }

  myForm = this.formBuilder.group({
    email : this.commonForm.email,
    password : this.commonForm.password
  })

  login(form : LoginI) {

    this.user.login(form).subscribe(data =>{
      if(data){
        setTimeout(() =>{
          this.router.navigate(['wallet']);
         }, 2000)
         this.toast.success('Se Inicio Sesion con la Cuenta Registrada', 'Correcto')

       this.user.loged = true

      }

    }, error =>{
      console.log(error)
      this.toast.error('No esta registrada esta cuenta de Usuario', 'Error')
    })
  }

  ngOnInit(): void {

    this.user.logout()

  }
}
