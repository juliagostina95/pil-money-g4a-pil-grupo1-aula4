"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, sanitizer, router, user, toast) {
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.router = router;
        this.user = user;
        this.toast = toast;
        this.verificar = false;
        this.hide = false;
        this.myForm = this.formBuilder.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.nombreErrores = function () {
        var _a, _b, _c, _d;
        var mensaje;
        if ((((_a = this.myForm.get('email')) === null || _a === void 0 ? void 0 : _a.dirty) && ((_b = this.myForm.get('email')) === null || _b === void 0 ? void 0 : _b.errors))) {
            mensaje = "El campo esta sin llenar";
        }
        if (((_c = this.myForm.get('email')) === null || _c === void 0 ? void 0 : _c.hasError('pattern')) && ((_d = this.myForm.get('email')) === null || _d === void 0 ? void 0 : _d.errors)) {
            mensaje = "El campo esta incorrecto";
        }
        return mensaje;
    };
    LoginComponent.prototype.passwordErrores = function () {
        var _a, _b, _c, _d, _e, _f;
        var mensaje;
        if ((((_a = this.myForm.get('password')) === null || _a === void 0 ? void 0 : _a.dirty) && ((_b = this.myForm.get('password')) === null || _b === void 0 ? void 0 : _b.errors))) {
            mensaje = "El campo esta sin llenar";
        }
        if (((_c = this.myForm.get('password')) === null || _c === void 0 ? void 0 : _c.hasError('pattern')) && ((_d = this.myForm.get('password')) === null || _d === void 0 ? void 0 : _d.errors)) {
            mensaje = "El campo esta incorrecto";
        }
        else if (((_e = this.myForm.get('password')) === null || _e === void 0 ? void 0 : _e.hasError('minlength')) && ((_f = this.myForm.get('password')) === null || _f === void 0 ? void 0 : _f.errors)) {
            mensaje = "El minimo de letras es 8";
        }
        return mensaje;
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.user.login(form).subscribe(function (data) {
            if (data) {
                setTimeout(function () {
                    _this.router.navigate(['/wallet']);
                }, 2000);
                _this.toast.success('Se Inicio Sesion con la Cuenta Registrada', 'Correcto');
                _this.user.loged = true;
            }
        }, function (error) {
            console.log(error);
            _this.toast.error('No esta registrada esta cuenta de Usuario', 'Error');
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.user.logout();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
