"use strict";
exports.__esModule = true;
exports.WINDOW_PROVIDERS = exports.WINDOW = void 0;
var core_1 = require("@angular/core");
exports.WINDOW = new core_1.InjectionToken('window');
var windowProvider = {
    provide: exports.WINDOW,
    useFactory: function () { return window; }
};
exports.WINDOW_PROVIDERS = [
    windowProvider
];
