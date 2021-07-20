import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { HeaderWalletComponent } from './header-wallet/header-wallet.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WalletRoutingModule } from './wallet-routing.module';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { IngresaryretirarComponent } from './pages/ingresaryretirar/ingresaryretirar.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { InversionesComponent } from './pages/inversiones/inversiones.component';
import { CompraComponent } from './pages/compra/compra.component';
import { MisDatosComponent } from './pages/mis-datos/mis-datos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';


@NgModule({
  declarations: [
    WalletPageComponent,
    HeaderWalletComponent,
    TransferenciaComponent,
    IngresaryretirarComponent,
    PagosComponent,
    InversionesComponent,
    CompraComponent,
    MisDatosComponent,
    InicioComponent,
    SugerenciasComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
