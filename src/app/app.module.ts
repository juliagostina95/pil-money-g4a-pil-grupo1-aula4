import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import{MatInputModule} from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button'
import{MatDialogModule} from '@angular/material/dialog'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FormNamePasswordComponent } from './form-name-password/form-name-password.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { LoginComponent } from './login/login.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { SpinnerComponent } from './spinner/spinner.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { LoginPageComponent } from './login-page/login-page.component'
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    FormNamePasswordComponent,
    ButtonLoginComponent,
    LoginComponent,
    WalletPageComponent,
    SpinnerComponent,
    LoginPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [
      CookieService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
