import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { LoginI } from '../../models/login.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  fullImagePath: string
  fullImagePathDos: string
  hide: boolean = false;

  constructor(public formBuilder: FormBuilder, public sanitizer: DomSanitizer, private router: Router, private user: UsersService, private toast: ToastrService) {

    this.fullImagePath = '/assets/imagenes/img3.jpg'
    this.fullImagePathDos = '/assets/imagenes/img4.jpg'

  }

  myForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })


  nombreErrores(){
    let mensaje;
    if((this.myForm.get('email')?.dirty && this.myForm.get('email')?.errors)){
      mensaje = "El campo esta sin llenar";
    }
    if(this.myForm.get('email')?.hasError('pattern') && this.myForm.get('email')?.errors){
      mensaje = "El campo esta incorrecto";
    }

    return mensaje;
  }

  passwordErrores(){
    let mensaje;
    if((this.myForm.get('password')?.dirty && this.myForm.get('password')?.errors)){
      mensaje = "El campo esta sin llenar";
     }

     if(this.myForm.get('password')?.hasError('pattern') && this.myForm.get('password')?.errors){
      mensaje = "El campo esta incorrecto";
    }

    else if(this.myForm.get('password')?.hasError('minlength') && this.myForm.get('password')?.errors){
      mensaje = "El minimo de letras es 8";
    }
    return mensaje;
  }

  login(form : LoginI) {

    this.user.login(form).subscribe(data =>{
      if(data){
        setTimeout(() =>{
          this.router.navigate(['/wallet']);
         }, 2000)
         this.toast.success('Se Inicio Sesion con la Cuenta Registrada', 'Correcto')

        this.user.loged = true;
      }

    }, error =>{
      console.log(error)
      this.toast.error('No esta registrada esta cuenta de Usuario', 'Error')
    })
  }

  ngOnInit(): void {
    this.user.logout();

  }
}


