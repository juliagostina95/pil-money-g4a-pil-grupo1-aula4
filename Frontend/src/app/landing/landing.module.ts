import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderDirective } from '../directives/header.directive';
import { LogoDirective } from '../directives/logo.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderDirective,
    LogoDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, LandingPageComponent, AboutUsComponent, ContactComponent, HeaderDirective, LogoDirective]
})
export class LandingModule { }
