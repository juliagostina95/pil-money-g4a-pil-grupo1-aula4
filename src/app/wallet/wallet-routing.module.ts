import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IngresaryretirarComponent } from './pages/ingresaryretirar/ingresaryretirar.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { InversionesComponent } from './pages/inversiones/inversiones.component';
import { CompraComponent } from './pages/compra/compra.component';
import { MisDatosComponent } from './pages/mis-datos/mis-datos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { InvertirComponent } from './pages/invertir/invertir.component';
import { TransferirComponent } from './pages/transferir/transferir.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ContraseniaComponent } from './pages/contrasenia/contrasenia.component';
<<<<<<< HEAD
import { AgregarCuentaComponent } from './pages/agregar-cuenta/agregar-cuenta.component';
=======
import { PreguntasComponent } from './pages/preguntas/preguntas.component'
import { RoutesGuard } from '../guards/routes.guard';
>>>>>>> 73fa5c35bccbdf8af2f34b48ff831ba6601d94a2

const routes:Routes = [
  {
    path:'',
    canActivate: [RoutesGuard],
    children:[
      {
        path:'inicio',
        component:InicioComponent
      },
      {
        path:'agregar',
        component:AgregarCuentaComponent
      },
      {
        path:'ingresaryretirar',
        component:IngresaryretirarComponent
      },
      {
        path:'transferencias',
        component:TransferenciaComponent
      },
      {
        path:'pagos',
        component:PagosComponent
      },
      {
        path:'inversiones',
        component:InversionesComponent
      },
      {
        path:'invertir',
        component:InvertirComponent
      },
      {
        path:'compra',
        component:CompraComponent
      },
      {
        path:'misdatos',
        component:MisDatosComponent
      },
      {
        path: 'contactos',
        component: ContactosComponent
      },
      {
        path: 'password',
        component: ContraseniaComponent
      },
      {
        path: 'preguntas',
        component: PreguntasComponent
      },
      {
         path: 'sugerencias',
         component: SugerenciasComponent
      },
      {
        path: 'transferir',
        component: TransferirComponent
      },
      {
        path:'**',
        redirectTo:'inicio'
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class WalletRoutingModule { }
