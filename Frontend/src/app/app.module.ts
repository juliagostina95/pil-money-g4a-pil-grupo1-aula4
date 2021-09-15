import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WalletModule } from './wallet/wallet.module';
import { SpinnerModule } from './spinner/spinner.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersModule } from './users/users.module'
import { ToastrModule } from 'ngx-toastr';
import { LandingModule} from './landing/landing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { JwtInterceptor} from './services/interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    WalletModule,
    SpinnerModule,
    UsersModule,
    LandingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  exports:[RouterModule],
  providers: [UsersService,
    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
