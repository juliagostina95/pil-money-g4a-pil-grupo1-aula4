"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var UsersService = /** @class */ (function () {
    function UsersService(http, toast) {
        this.http = http;
        this.toast = toast;
        this.loggedin = new rxjs_1.BehaviorSubject(false);
        this.urlRegister = "http://localhost:3000/users";
        this.urlLogin = "http://localhost:3000/login";
        this.loged = false;
        this.ejemplo = false;
    }
    Object.defineProperty(UsersService.prototype, "isLogged", {
        get: function () {
            return this.loggedin.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    UsersService.prototype.register = function (form) {
        var _this = this;
        var direccion = this.urlRegister;
        return this.http.post(direccion, form).pipe(operators_1.map(function (res) {
            _this.loggedin.next(true);
            return res;
        }), operators_1.catchError(function (err) { return _this.handlerError(err); }));
    };
    UsersService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedin.next(false);
    };
    UsersService.prototype.login = function (form) {
        var _this = this;
        var direccion = this.urlLogin;
        return this.http.post(direccion, form).pipe(operators_1.map(function (res) {
            _this.saveToken(res.accessToken);
            _this.loggedin.next(true);
            return res;
        }));
    };
    UsersService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
    };
    UsersService.prototype.handlerError = function (err) {
        var errorMessage = 'An errror occured retrienving data';
        if (err) {
            errorMessage = "Error: code " + err.message;
        }
        return rxjs_1.throwError(errorMessage);
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
