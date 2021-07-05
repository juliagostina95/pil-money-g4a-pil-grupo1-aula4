import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WalletModule } from './wallet/wallet.module';
import { SpinnerModule } from './spinner/spinner.module'
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module'
import { ToastrModule } from 'ngx-toastr';
import { LandingModule} from './landing/landing.module';

@NgModule({
  declarations: [
    AppComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    WalletModule,
    SpinnerModule,
    UsersModule,
    LandingModule,
    ToastrModule.forRoot()
  ],
  providers: [

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
