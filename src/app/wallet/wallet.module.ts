import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { HeaderWalletComponent } from './header-wallet/header-wallet.component';





@NgModule({
  declarations: [WalletPageComponent, HeaderWalletComponent],
  imports: [
    CommonModule
  ],
  exports: [WalletPageComponent, HeaderWalletComponent]
})
export class WalletModule { }
