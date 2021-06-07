"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ButtonLoginComponent = void 0;
var core_1 = require("@angular/core");
var ButtonLoginComponent = /** @class */ (function () {
    function ButtonLoginComponent() {
    }
    ButtonLoginComponent.prototype.ngOnInit = function () {
    };
    ButtonLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-button-login',
            templateUrl: './button-login.component.html',
            styleUrls: ['./button-login.component.css']
        })
    ], ButtonLoginComponent);
    return ButtonLoginComponent;
}());
exports.ButtonLoginComponent = ButtonLoginComponent;
