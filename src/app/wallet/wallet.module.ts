import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { HeaderWalletComponent } from './header-wallet/header-wallet.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { WalletRoutingModule } from './wallet-routing.module';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { IngresaryretirarComponent } from './pages/ingresaryretirar/ingresaryretirar.component';
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
import { PreguntasComponent } from './pages/preguntas/preguntas.component';


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
    SugerenciasComponent,
    InvertirComponent,
    TransferirComponent,
    ContactosComponent,
    ContraseniaComponent,
    PreguntasComponent
  ],
  imports: [
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatTableModule,
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
