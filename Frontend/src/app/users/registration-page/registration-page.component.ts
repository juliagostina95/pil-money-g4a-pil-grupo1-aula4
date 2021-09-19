import { RegisterService } from './../../services/register.service';
import { RegisterI } from '../../interfaces/register.interface';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { error } from '@angular/compiler/src/util';
import { ToastrService } from 'ngx-toastr';
import { FormService } from 'src/app/services/form.service';
import { CuentasService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  fullImagePath: string;
  fullImagePathDos: string;
  hide: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public sanitizer: DomSanitizer,
    private router: Router,
    public userService: RegisterService,
    private toast: ToastrService,
    public commonForm: FormService,
    public cuentasService: CuentasService
  ) {
    this.fullImagePath = '/assets/imagenes/img1.jpg';
    this.fullImagePathDos = '/assets/imagenes/img2.jpg';
  }

  public previsualizacion: string = '';
  public archivos: any = [];
  myForm = this.formBuilder.group({
    imagenDNI: new FormControl('', [Validators.required]),
    email: this.commonForm.email,
    contraseña: this.commonForm.contraseña,
    nombreCompleto: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    cuil: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
  });


  extraerBase64 = async ($event: any) =>
    new Promise((resolve, _reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {}
    });

  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    });
    this.archivos.push(archivoCapturado);
  }

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }

  
  ngOnInit(): void {}
}
