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

const routes:Routes = [
  {
    path:'',
    children:[
      {
        path:'inicio',
        component:InicioComponent
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
         path: 'sugerencias',
         component: SugerenciasComponent
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
