import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button'
import{MatDialogModule} from '@angular/material/dialog'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WalletModule } from './wallet/wallet.module';
import { SpinnerModule } from './spinner/spinner.module'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module'
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    WalletModule,
    SpinnerModule,
    UsersModule,
    ToastrModule.forRoot()

  ],
  providers: [

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
