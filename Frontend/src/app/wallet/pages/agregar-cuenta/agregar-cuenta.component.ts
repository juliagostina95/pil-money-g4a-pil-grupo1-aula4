import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoMonedaService } from './../../../services/tipo-moneda.service';
import { tipoMoneda } from './../../../interfaces/tipo-moneda.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.component.html',
  styleUrls: ['./agregar-cuenta.component.css']
})

export class AgregarCuentaComponent implements OnInit {

myForm = this.formBuilder.group({
  nombreCuenta: new FormControl('', [Validators.required])
})

nombre!: tipoMoneda;


   constructor(private formBuilder: FormBuilder, private monedaService: TipoMonedaService, private toast: ToastrService, private router: Router) {

   }

  ngOnInit(): void {
  }

  checked = false;
  indeterminate = false;
  labelPosition: 'ARS' | 'USD' | 'BIT' = "ARS";

  disabled = false;
  labelRenovacion: 'si' | 'no' = 'si';
   enviarMoneda(nombre: tipoMoneda){
    if(this.labelPosition == 'ARS'){
       this.monedaService.obtenerMonedaId2().subscribe(
        (data) => {
          {

              this.router.navigate(['/wallet/inicio']);

           this.toast.success('Cuenta creada correctamente', 'Correcto');

         }
       },
       (error) => {
         console.log(error);
         this.toast.error('Debe seleccionar o llenar todos los campos', 'Error');
       }
     );
   }
   if(this.labelPosition == 'USD'){
    this.monedaService.obtenerMonedaId1().subscribe(
     (data) => {
       {

           this.router.navigate(['/wallet/inicio']);

        this.toast.success('Cuenta creada correctamente', 'Correcto');

      }
    },
    (error) => {
      console.log(error);
      this.toast.error('Debe seleccionar o llenar todos los campos', 'Error');
    }
  );
}
if(this.labelPosition == 'BIT'){
  this.monedaService.obtenerMonedaId3().subscribe(
   (data) => {
     {

         this.router.navigate(['/wallet/inicio']);

      this.toast.success('Cuenta creada correctamente', 'Correcto');

    }
  },
  (error) => {
    console.log(error);
    this.toast.error('Debe seleccionar o llenar todos los campos', 'Error');
  }
);
}
  }
}
