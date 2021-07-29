import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './landing/about-us/about-us.component';
import { ContactComponent } from './landing/contact/contact.component';
import { LoginPageComponent } from './users/login-page/login-page.component';
import { RegistrationPageComponent } from './users/registration-page/registration-page.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { ErrorPageComponent } from './error-404/error-page/error-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path:'wallet',
    loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule)
  },
  {
    path: 'register',
    component: RegistrationPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }


