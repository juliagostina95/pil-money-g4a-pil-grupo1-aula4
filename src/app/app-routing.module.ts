import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './users/login-page/login-page.component';
import { RegistrationPageComponent } from './users/registration-page/registration-page.component';
import { RoutesGuard } from './guards/routes.guard';
import { WalletPageComponent } from './wallet/wallet-page/wallet-page.component';

const routes: Routes = [
  {
    path:'',
    component: RegistrationPageComponent,
    pathMatch: "full"
  },
  {
    path:'wallet',
    component: WalletPageComponent,
    canActivate: [RoutesGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


