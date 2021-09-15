import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button'
import{MatDialogModule} from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    RouterModule
  ],
  exports: [LoginPageComponent, RegistrationPageComponent]
})
export class UsersModule { }
