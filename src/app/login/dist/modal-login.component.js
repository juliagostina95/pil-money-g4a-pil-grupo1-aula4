"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalLoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ModalLoginComponent = /** @class */ (function () {
    function ModalLoginComponent(formBuilder, sanitizer, dialogRef, router, user) {
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.router = router;
        this.user = user;
        this.hide = false;
        this.myForm = this.formBuilder.group({
            email: ['', forms_1.Validators.required],
            contraseña: ['', forms_1.Validators.required]
        });
    }
    ModalLoginComponent_1 = ModalLoginComponent;
    ModalLoginComponent.prototype.cerrarDialog = function () {
        this.dialogRef.close(ModalLoginComponent_1);
    };
    ModalLoginComponent.prototype.nombreErrores = function () {
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
    ModalLoginComponent.prototype.passwordErrores = function () {
        var _a, _b, _c, _d, _e, _f;
        var mensaje;
        if ((((_a = this.myForm.get('contraseña')) === null || _a === void 0 ? void 0 : _a.dirty) && ((_b = this.myForm.get('contraseña')) === null || _b === void 0 ? void 0 : _b.errors))) {
            mensaje = "El campo esta sin llenar";
        }
        if (((_c = this.myForm.get('contraseña')) === null || _c === void 0 ? void 0 : _c.hasError('pattern')) && ((_d = this.myForm.get('contraseña')) === null || _d === void 0 ? void 0 : _d.errors)) {
            mensaje = "El campo esta incorrecto";
        }
        else if (((_e = this.myForm.get('contraseña')) === null || _e === void 0 ? void 0 : _e.hasError('minlength')) && ((_f = this.myForm.get('contraseña')) === null || _f === void 0 ? void 0 : _f.errors)) {
            mensaje = "El minimo de letras es 8";
        }
        return mensaje;
    };
    ModalLoginComponent.prototype.login = function (form) {
        var _this = this;
        this.user.register(form).subscribe(function (data) {
            if (data) {
                _this.user.loged = true;
                _this.router.navigate(['/user']);
            }
        });
    };
    ModalLoginComponent.prototype.ngOnInit = function () { };
    var ModalLoginComponent_1;
    ModalLoginComponent = ModalLoginComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-modal-login',
            templateUrl: './modal-login.component.html',
            styleUrls: ['./modal-login.component.css']
        })
    ], ModalLoginComponent);
    return ModalLoginComponent;
}());
exports.ModalLoginComponent = ModalLoginComponent;
