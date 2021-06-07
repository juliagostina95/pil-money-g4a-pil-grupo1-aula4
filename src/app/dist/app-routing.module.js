"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_page_component_1 = require("./login-page/login-page.component");
var registration_page_component_1 = require("./registration-page/registration-page.component");
var routes_guard_1 = require("./routes.guard");
var wallet_page_component_1 = require("./wallet-page/wallet-page.component");
var routes = [
    {
        path: '',
        component: registration_page_component_1.RegistrationPageComponent,
        pathMatch: "full"
    },
    {
        path: 'wallet',
        component: wallet_page_component_1.WalletPageComponent,
        canActivate: [routes_guard_1.RoutesGuard]
    },
    {
        path: 'login',
        component: login_page_component_1.LoginPageComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
