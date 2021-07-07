import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { HeaderWalletComponent } from './header-wallet/header-wallet.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';








@NgModule({
  declarations: [WalletPageComponent, HeaderWalletComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [WalletPageComponent, HeaderWalletComponent]
})
export class WalletModule { }
