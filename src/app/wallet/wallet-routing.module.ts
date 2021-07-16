import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IngresaryretirarComponent } from './pages/ingresaryretirar/ingresaryretirar.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { InversionesComponent } from './pages/inversiones/inversiones.component';
import { CompraComponent } from './pages/compra/compra.component';
import { MisDatosComponent } from './pages/mis-datos/mis-datos.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes:Routes = [
  {
    path:'',
    children:[
      {
        path:'inicio',
        component:SidebarComponent
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
        path:'compra',
        component:CompraComponent
      },
      {
        path:'misdatos',
        component:MisDatosComponent
      },
      {
        path:'**',
        redirectTo:'./404'
      },
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
