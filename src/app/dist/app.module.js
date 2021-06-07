"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var form_field_1 = require("@angular/material/form-field");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var slider_1 = require("@angular/material/slider");
var input_1 = require("@angular/material/input");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var dialog_1 = require("@angular/material/dialog");
var animations_1 = require("@angular/platform-browser/animations");
var registration_page_component_1 = require("./registration-page/registration-page.component");
var form_name_password_component_1 = require("./form-name-password/form-name-password.component");
var button_login_component_1 = require("./button-login/button-login.component");
var login_component_1 = require("./login/login.component");
var wallet_page_component_1 = require("./wallet-page/wallet-page.component");
var spinner_component_1 = require("./spinner/spinner.component");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var http_1 = require("@angular/common/http");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var login_page_component_1 = require("./login-page/login-page.component");
var ngx_toastr_1 = require("ngx-toastr");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                registration_page_component_1.RegistrationPageComponent,
                form_name_password_component_1.FormNamePasswordComponent,
                button_login_component_1.ButtonLoginComponent,
                login_component_1.LoginComponent,
                wallet_page_component_1.WalletPageComponent,
                spinner_component_1.SpinnerComponent,
                login_page_component_1.LoginPageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                slider_1.MatSliderModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                dialog_1.MatDialogModule,
                animations_1.BrowserAnimationsModule,
                progress_spinner_1.MatProgressSpinnerModule,
                http_1.HttpClientModule,
                ngx_toastr_1.ToastrModule.forRoot()
            ],
            providers: [
                ngx_cookie_service_1.CookieService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
