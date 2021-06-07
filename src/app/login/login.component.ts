import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Users } from '../users.interface';
import { LoginI } from '../login.interface';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  verificar: boolean = false
  hide: boolean = false;
  constructor(public formBuilder: FormBuilder, public sanitizer: DomSanitizer, private router: Router, private user: UsersService, private toast: ToastrService) {

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

  login(form : Users) {

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
