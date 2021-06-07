import { LoginI } from './../login.interface';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { error } from '@angular/compiler/src/util';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-form-name-password',
  templateUrl: './form-name-password.component.html',
  styleUrls: ['./form-name-password.component.css']
})
export class FormNamePasswordComponent implements OnInit{

  hide: boolean = false;

  constructor(public formBuilder: FormBuilder, public sanitizer: DomSanitizer, private router: Router, private userService: UsersService, private toast: ToastrService) {

  }

  public previsualizacion: string = '';
  public archivos: any = []

  myForm = this.formBuilder.group({
    file: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]

  })

  extraerBase64 = async ($event: any) => new Promise((resolve, _reject) => {

    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
    }
  })

  capturarFile(event : any): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    })
    this.archivos.push(archivoCapturado)
  }

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }

  nombreErrores(){
    let mensaje;
    if((this.myForm.get('email')?.dirty || this.myForm.get('email')?.touched) && this.myForm.get('email')?.errors){
      mensaje = "El campo esta sin llenar";

    }
    if(this.myForm.get('email')?.hasError('pattern') && this.myForm.get('email')?.errors){
      mensaje = "El campo esta incorrecto";

    }

   /*  else if(this.myForm.get('username')?.hasError('minlength') && this.myForm.get('username')?.errors){
      mensaje = "El minimo de letras es 8";

    } */
    return mensaje;
  }

  passwordErrores(){
    let mensaje;
    if((this.myForm.get('password')?.dirty || this.myForm.get('password')?.touched) && this.myForm.get('password')?.errors){
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


  register(form : LoginI) {
    this.userService.register(form).subscribe(data =>{
      if(data){
        setTimeout(() =>{
          this.router.navigate(['/login']);
         }, 2000)
         this.toast.success('Cuenta Registrada', 'Correcto')
        this.userService.loged = true;

      }


    }, error =>{
      console.log(error)
      this.toast.error('La cuenta ya esta Registrada', 'Error')
    })


  }
  ngOnInit(): void {

 }

}
