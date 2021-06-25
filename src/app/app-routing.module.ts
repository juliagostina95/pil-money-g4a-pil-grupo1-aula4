import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './landing/about-us/about-us.component';
import { LoginPageComponent } from './users/login-page/login-page.component';
import { RegistrationPageComponent } from './users/registration-page/registration-page.component';
import { RoutesGuard } from './guards/routes.guard';
import { WalletPageComponent } from './wallet/wallet-page/wallet-page.component';
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
    component: WalletPageComponent,
    canActivate: [RoutesGuard]
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
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


