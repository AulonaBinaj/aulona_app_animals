webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <app-header></app-header> -->\n\n\n<router-outlet></router-outlet> \n<!-- <div id=\"fullPage\">\n        <app-lista-pacient-mat (pacientSelected)=\"selectedPacient = $event\"></app-lista-pacient-mat>\n</div>\n -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pacientet_pacientet_service__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { routing } from './header/routes';
// import { HeaderComponent }  from './header/header.component';
// import { LoginComponent } from './login/login.component';
// import { InputPacientiComponent } from './pacientet/input-pacienti/input-pacienti.component';
// import { PacientetService } from './pacientet/pacientet.service';


var AppComponent = /** @class */ (function () {
    function AppComponent(nav) {
        this.nav = nav;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.nav.hide();
        this.nav.show();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__pacientet_pacientet_service__["a" /* PacientetService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_header_header_service__["a" /* HeaderService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_dropdown_directive__ = __webpack_require__("../../../../../src/app/header/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pacientet_pacientet_component__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__receta_receta_component__ = __webpack_require__("../../../../../src/app/receta/receta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pacientet_lista_pacientet_lista_pacientet_component__ = __webpack_require__("../../../../../src/app/pacientet/lista-pacientet/lista-pacientet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pacientet_input_pacienti_input_pacienti_component__ = __webpack_require__("../../../../../src/app/pacientet/input-pacienti/input-pacienti.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__receta_lista_receta_lista_receta_component__ = __webpack_require__("../../../../../src/app/receta/lista-receta/lista-receta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__receta_input_receta_input_receta_component__ = __webpack_require__("../../../../../src/app/receta/input-receta/input-receta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__receta_receta_service__ = __webpack_require__("../../../../../src/app/receta/receta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pacientet_detajet_pacientit_detajet_pacientit_component__ = __webpack_require__("../../../../../src/app/pacientet/detajet-pacientit/detajet-pacientit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pacientet_pacientet_service__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pacientet_filter_pipe__ = __webpack_require__("../../../../../src/app/pacientet/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pacientet_lista_pacient_mat_lista_pacient_mat_component__ = __webpack_require__("../../../../../src/app/pacientet/lista-pacient-mat/lista-pacient-mat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_11__pacientet_pacientet_component__["a" /* PacientetComponent */],
                __WEBPACK_IMPORTED_MODULE_12__receta_receta_component__["a" /* RecetaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pacientet_lista_pacientet_lista_pacientet_component__["a" /* ListaPacientetComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pacientet_input_pacienti_input_pacienti_component__["a" /* InputPacientiComponent */],
                __WEBPACK_IMPORTED_MODULE_15__receta_lista_receta_lista_receta_component__["a" /* ListaRecetaComponent */],
                __WEBPACK_IMPORTED_MODULE_16__receta_input_receta_input_receta_component__["a" /* InputRecetaComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pacientet_detajet_pacientit_detajet_pacientit_component__["a" /* DetajetPacientitComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pacientet_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pacientet_lista_pacient_mat_lista_pacient_mat_component__["a" /* ListaPacientMatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__material_module__["a" /* MaterialModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_17__receta_receta_service__["a" /* RecetaService */], __WEBPACK_IMPORTED_MODULE_19__pacientet_pacientet_service__["a" /* PacientetService */], __WEBPACK_IMPORTED_MODULE_20_app_header_header_service__["a" /* HeaderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/header/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    Object.defineProperty(DropdownDirective.prototype, "opened", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.open = function () {
        this.isOpen = true;
    };
    DropdownDirective.prototype.close = function () {
        this.isOpen = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.open'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DropdownDirective.prototype, "opened", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "close", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" *ngIf=\"nav.visible\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n      <a [routerLink]=\"['/pacientet']\"class=\"navbar-brand\">App Animals</a>\n    </div>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\">\n          <a [routerLink]=\"['/pacientet']\">Pacient</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a [routerLink]=\"['/recetat']\">Receta</a>\n        </li>\n\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\" appDropdown>\n          <a \n          class=\"dropdown-toggle\" \n          role=\"button\" \n          aria-haspopup=\"true\" \n          aria-expanded=\"false\">Pacient Management<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n              <li> <a (click)=\"onStore()\" style=\"cursor: pointer;\">Dergo Pacientet</a>\n              <li> <a (click)=\"onFetch()\" style=\"cursor: pointer;\">Therrit Pacientet</a>\n              <li> <a [routerLink]=\"['/login']\">LogOut</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pacientet_pacientet_service__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(nav, ps) {
        this.nav = nav;
        this.ps = ps;
    }
    HeaderComponent.prototype.onStore = function () {
        this.ps.storeData().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    HeaderComponent.prototype.onFetch = function () {
        this.ps.fetchData();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_header_header_service__["a" /* HeaderService */], __WEBPACK_IMPORTED_MODULE_2__pacientet_pacientet_service__["a" /* PacientetService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this.visible = true;
    }
    HeaderService.prototype.hide = function () { this.visible = true; };
    HeaderService.prototype.show = function () { this.visible = true; };
    HeaderService.prototype.toggle = function () { this.visible = !this.visible; };
    HeaderService.prototype.doSomethingElseUseful = function () { };
    HeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.container {\r\n    padding: 50px;\r\n    width: 40%;\r\n    height: 70%;\r\n}\r\nbutton {\r\n    background-color: rgb(25, 93, 196);\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<form (ngSubmit)=\"InLogin()\">\n\t\t<div class=\"input\">\n\t\t\t<label>Username</label>\n\t\t\t<input type=\"text\" class=\"form-control\" ngModel name=\"username\">\n\t\t</div>\n\t\t<br>\n\t\t<br>\n\t\t<div class=\"input\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"Password\" class=\"form-control\" ngModel name=\"password\">\n\t\t</div>\n\t\t<br>\n\t\t<br>\n\t\t<div class=\"input\">\n\t\t\t<button type=\"submit\" value=\"Login\">Login</button>\n\t\t\t<!-- <input type=\"submit\"> -->\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { routing } from '../routes';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.data = {};
        this.username = 'admin';
        this.password = 'admin';
        this.isNew = false;
    }
    LoginComponent.prototype.InLogin = function () {
        if (this.username == 'admin' && this.password == 'admin') {
            this.router.navigate(['/pacientet']);
        }
        else {
            this.router.navigate(['login']);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/pacientet/child_pacient.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PA_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_pacienti_input_pacienti_component__ = __webpack_require__("../../../../../src/app/pacientet/input-pacienti/input-pacienti.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detajet_pacientit_detajet_pacientit_component__ = __webpack_require__("../../../../../src/app/pacientet/detajet-pacientit/detajet-pacientit.component.ts");


//ROUTER QE DO TE SHERBEJNE SI FEMIJE
var PA_ROUTES = [
    //{ path: '', component: ListaPacientetComponent },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_0__input_pacienti_input_pacienti_component__["a" /* InputPacientiComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_1__detajet_pacientit_detajet_pacientit_component__["a" /* DetajetPacientitComponent */] },
    { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_0__input_pacienti_input_pacienti_component__["a" /* InputPacientiComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/pacientet/detajet-pacientit/detajet-pacientit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pacientet/detajet-pacientit/detajet-pacientit.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <app-lista-pacientet *ngFor=\"let pacient of selectedPacient?.pacients\">{{selectedPacient?.emri_pacientit}}</app-lista-pacientet> -->\n\n<div class=\"row\" style=\"text-align: right;\">\n <p>{{selectedPacient?.emri_pacientit}}</p>\n\n <br>\n  <button class=\"btn btn-success text-left\" (click)=\"ToAddReceta()\">R</button>\n  <button class=\"btn btn-danger text-left\" (click)=\"onDelete()\">X</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pacientet/detajet-pacientit/detajet-pacientit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetajetPacientitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_receta_receta_service__ = __webpack_require__("../../../../../src/app/receta/receta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_pacientet_pacientet_service__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Subscription, AnonymousSubscription, TeardownLogic } from 'rxjs/Subscription';


var DetajetPacientitComponent = /** @class */ (function () {
    // private subscrib: Subscription;
    function DetajetPacientitComponent(ps, rs, router, route) {
        this.ps = ps;
        this.rs = rs;
        this.router = router;
        this.route = route;
    }
    DetajetPacientitComponent.prototype.ngOnInit = function () {
        //    this.subscrib = this.route.params.subscribe(
        //  (params: any) => {
        //   this.pacientindex = params['id'];
        //      this.selectedPacient = this.ps.getPacient(this.pacientindex);
        //   }
        //  );
    };
    // onDelete() {
    //   this.ps.deletePacient(this.selectedPacient);
    //   this.router.navigate(['/pacientet']);
    // }
    DetajetPacientitComponent.prototype.ToAddReceta = function () {
        this.rs.addItems(this.selectedPacient.receta);
        this.router.navigate(['/recetat']);
    };
    DetajetPacientitComponent.prototype.ngOnDestroy = function () {
        // this.subscrib.unsubscribe( );
    };
    DetajetPacientitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detajet-pacientit',
            template: __webpack_require__("../../../../../src/app/pacientet/detajet-pacientit/detajet-pacientit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pacientet/detajet-pacientit/detajet-pacientit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_pacientet_pacientet_service__["a" /* PacientetService */],
            __WEBPACK_IMPORTED_MODULE_1_app_receta_receta_service__["a" /* RecetaService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DetajetPacientitComponent);
    return DetajetPacientitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pacientet/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (pacients, search) {
        if (search === undefined)
            return pacients;
        return pacients.filter(function (pacient) {
            return pacient.emri_pacientit.toLowerCase().includes(search.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pacientet/input-pacienti/input-pacienti.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-button-row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pacientet/input-pacienti/input-pacienti.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <!-- <a class=\"btn btn-success\" [routerLink]=\"['new']\">Shto nje klient</a> -->\n    <form id=\"input-receta\" (ngSubmit)=\"onSubmitt(f.value)\" #f=\"ngForm\">\n      <!-- <form [formGroup] =\"myForm\" (ngSubmit)=\"onSubmit()\"> -->\n      <h1 style=\"text-align: center; color: red\">Shto te dhenat e Pacientit </h1>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Emri Pacientit</label>\n            <input type=\"text\" id=\"emri_pacientit\" class=\"form-control\" [ngModel]='pacient.emri_pacientit' name=\"emri_pacientit\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Rraca</label>\n            <input type=\"text\" id=\"rraca\" class=\"form-control\" [ngModel]='pacient.rraca' name=\"rraca\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Data e lindjes</label>\n            <input type=\"date\" id=\"data\" class=\"form-control\" [ngModel]='pacient.data' name=\"data\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Emri Pronarit</label>\n            <input type=\"text\" id=\"emri_pronarit\" class=\"form-control\" [ngModel]='pacient.emri_pronarit' name=\"emri_pronarit\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"content\">Shenim</label>\n            <textarea type=\"text\" id=\"shenim\" rows=\"6\" class=\"form-control\" [ngModel]='pacient.shenime' name=\"shenim\">\n            </textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" style=\"text-align: right;\">\n        <div class=\"col-xs-12\">\n          <button type=\"submit\" class=\"btn btn-success\">RUAJ</button>\n          <a class=\"btn btn-danger\" (click)=\"reset()\">PASTRO</a>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pacientet/input-pacienti/input-pacienti.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPacientiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pacient__ = __webpack_require__("../../../../../src/app/pacientet/pacient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pacientet_service__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputPacientiComponent = /** @class */ (function () {
    function InputPacientiComponent(ps) {
        this.ps = ps;
        this.cleared = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isAdd = true;
    }
    InputPacientiComponent.prototype.onSubmitt = function (pacient) {
        var newPacient = new __WEBPACK_IMPORTED_MODULE_1__pacient__["a" /* Pacient */](pacient.emri_pacientit, pacient.rraca, pacient.data, pacient.age, pacient.emri_pronarit, pacient.shenime, pacient.receta);
        if (!this.isAdd) {
            this.ps.editPacient(this.pacient, newPacient);
            this.ps.storeData().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }
        else {
            this.pacient = newPacient;
            this.ps.addPacient(this.pacient);
            this.ps.storeData().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            //console.log(pacient)
        }
    };
    InputPacientiComponent.prototype.reset = function () {
        this.isAdd = true;
        this.cleared.emit(null);
    };
    InputPacientiComponent.prototype.ngOnChanges = function (changes) {
        if (changes.pacient.currentValue === null) {
            this.isAdd = true;
            this.pacient = { emri_pacientit: null, rraca: null, data: null, age: null, emri_pronarit: null, shenime: null, receta: null };
        }
        else {
            this.isAdd = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__pacient__["a" /* Pacient */])
    ], InputPacientiComponent.prototype, "pacient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], InputPacientiComponent.prototype, "cleared", void 0);
    InputPacientiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input-pacienti',
            template: __webpack_require__("../../../../../src/app/pacientet/input-pacienti/input-pacienti.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pacientet/input-pacienti/input-pacienti.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pacientet_service__["a" /* PacientetService */]])
    ], InputPacientiComponent);
    return InputPacientiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pacientet/lista-pacient-mat/lista-pacient-mat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pacientet/lista-pacient-mat/lista-pacient-mat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-input-pacienti [pacient]=\"selectedPacient\" (cleared)=\"onCleared()\"></app-input-pacienti>\n</div>\n<hr>\n\n<div class=\"row\" style=\"text-align: right;\">\n  <div class=\"col-xs-12\">\n    <p>{{selectedPacient?.emri_pacientit}}</p>\n    <br>\n\n    <button class=\"btn btn-success\" (click)=\"ToAddReceta()\">R</button>\n    <button class=\"btn btn-danger \" (click)=\"onDelete()\">X</button>\n  </div>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n\n\n  <mat-table [routerLink]=\"i\" class=\"group\" style=\"cursor: pointer\" #table [dataSource]=\"displayedData\">\n\n    <ng-container matColumnDef=\"emri_pacientit\">\n      <mat-header-cell *matHeaderCellDef> Emri Pacientit </mat-header-cell>\n      <mat-cell *matCellDef=\"let pacient ;let i=index\" (click)=\"onSelectedPacient(pacient)\"> {{pacient.emri_pacientit}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"rraca\">\n      <mat-header-cell *matHeaderCellDef> Rraca </mat-header-cell>\n      <mat-cell *matCellDef=\"let pacient;let i=index\" (click)=\"onSelectedPacient(pacient)\"> {{pacient.rraca}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"data\">\n      <mat-header-cell *matHeaderCellDef> Data e lindjes </mat-header-cell>\n      <mat-cell *matCellDef=\"let pacient;let i=index\" (click)=\"onSelectedPacient(pacient)\"> {{pacient.data}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"age\">\n      <mat-header-cell *matHeaderCellDef> Mosha </mat-header-cell>\n      <mat-cell *matCellDef=\"let pacient;let i=index\" (click)=\"onSelectedPacient(pacient)\"> {{OnAge(pacient.data)}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"shenime\">\n      <mat-header-cell *matHeaderCellDef> Shenime </mat-header-cell>\n      <mat-cell *matCellDef=\"let pacient;let i=index\" (click)=\"onSelectedPacient(pacient)\"> {{pacient.shenime}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"emri_pronarit\">\n      <mat-header-cell *matHeaderCellDef> Emri Pronarit </mat-header-cell>\n      <mat-cell *matCellDef=\"let pacient;let i=index\" (click)=\"onSelectedPacient(pacient)\"> {{pacient.emri_pronarit}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n<br>\n<br>\n<hr>"

/***/ }),

/***/ "../../../../../src/app/pacientet/lista-pacient-mat/lista-pacient-mat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPacientMatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_pacientet_pacientet_service__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_receta_receta_service__ = __webpack_require__("../../../../../src/app/receta/receta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Pacient } from 'app/pacientet/pacient';
var ListaPacientMatComponent = /** @class */ (function () {
    function ListaPacientMatComponent(ps, rs, router) {
        var _this = this;
        this.ps = ps;
        this.rs = rs;
        this.router = router;
        this.selectedPacient = null;
        this.pacientSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.pacients = [];
        //@Input() pacient: Pacient;
        this.displayedColumns = ['emri_pacientit', 'rraca', 'data', 'age', 'emri_pronarit', 'shenime'];
        this.pacients = this.ps.getPacients();
        //this.ps.fetchData();
        this.displayedData = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](this.pacients);
        this.ps.Update.subscribe(function (value) {
            _this.pacients = _this.ps.getPacients();
            _this.displayedData = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](_this.pacients);
        });
    }
    ListaPacientMatComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.displayedData.filter = filterValue;
    };
    ListaPacientMatComponent.prototype.OnAge = function (datelindja) {
        var age = (new Date().getFullYear() - new Date(datelindja).getFullYear());
        return age;
    };
    ListaPacientMatComponent.prototype.onSelected = function (pacient) {
        this.pacientSelected.emit(pacient);
    };
    ListaPacientMatComponent.prototype.onSelectedPacient = function (pacient) {
        this.selectedPacient = pacient;
        this.onSelected(pacient);
    };
    ListaPacientMatComponent.prototype.onCleared = function () {
        this.selectedPacient = null;
    };
    ListaPacientMatComponent.prototype.onDelete = function () {
        this.ps.deletePacient(this.selectedPacient);
        this.ps.deleteData();
        this.router.navigate(['/pacientet']);
    };
    ListaPacientMatComponent.prototype.ToAddReceta = function () {
        this.rs.addItems(this.selectedPacient.receta);
        this.router.navigate(['/recetat']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ListaPacientMatComponent.prototype, "selectedPacient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ListaPacientMatComponent.prototype, "pacientSelected", void 0);
    ListaPacientMatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lista-pacient-mat',
            template: __webpack_require__("../../../../../src/app/pacientet/lista-pacient-mat/lista-pacient-mat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pacientet/lista-pacient-mat/lista-pacient-mat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_pacientet_pacientet_service__["a" /* PacientetService */], __WEBPACK_IMPORTED_MODULE_3_app_receta_receta_service__["a" /* RecetaService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ListaPacientMatComponent);
    return ListaPacientMatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pacientet/lista-pacientet/lista-pacientet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <app-input-pacienti [pacient]=\"selectedPacient\" (cleared)=\"onCleared()\"></app-input-pacienti>\r\n</div>\r\n<h1 style=\"text-align: center; color: blue\">Lista e Pacienteve </h1>\r\n<hr>\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Kerko me emer</label>\r\n      <input type=\"text\" name='search' class=\"form-control\" [(ngModel)]=\"search\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<table class=\"table table-bordered\">\r\n  <thead>\r\n    <tr>\r\n      <th>Emri Pacientit</th>\r\n      <th>Rraca</th>\r\n      <th>Datelindja</th>\r\n      <th>Mosha</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr [routerLink]=\"i\" class=\"group\" style=\"cursor: pointer\" *ngFor=\"let pacient of pacients | filter: search ; let i=index\"\r\n      (click)=\"onSelectedPacient(pacient)\">\r\n      <td>{{pacient.emri_pacientit}}</td>\r\n      <td>{{pacient.rraca}}</td>\r\n      <td>{{pacient.data}} </td>\r\n      <td>{{OnAge(pacient.data)}} &nbsp; Vjec </td>\r\n\r\n      <!-- <td> &nbsp; &nbsp;&nbsp;&nbsp;\r\n        <button class=\"btn btn-danger\" (click)=\"onDelete()\">X</button>\r\n        &nbsp; &nbsp;&nbsp;&nbsp;\r\n        <button class=\"btn btn-info\" (click)=\"ToAddReceta()\">R</button>\r\n\r\n      </td>-->\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<br>\r\n<br>\r\n<hr>"

/***/ }),

/***/ "../../../../../src/app/pacientet/lista-pacientet/lista-pacientet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPacientetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pacient__ = __webpack_require__("../../../../../src/app/pacientet/pacient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pacientet_service__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_receta_receta_service__ = __webpack_require__("../../../../../src/app/receta/receta.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaPacientetComponent = /** @class */ (function () {
    function ListaPacientetComponent(ps, rs) {
        this.ps = ps;
        this.rs = rs;
        this.pacients = [];
        // @Input() pacientId: number = 0;
        this.selectedPacient = null;
        this.pacientSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.pacients = this.ps.getPacients();
    }
    ListaPacientetComponent.prototype.ngOnInit = function () {
        this.pacients = this.ps.getPacients();
    };
    ListaPacientetComponent.prototype.onSelected = function (pacient) {
        this.pacientSelected.emit(pacient);
    };
    ListaPacientetComponent.prototype.onSelectedPacient = function (pacient) {
        this.selectedPacient = pacient;
        this.onSelected(pacient);
    };
    ListaPacientetComponent.prototype.OnAge = function (datelindja) {
        var age = (new Date().getFullYear() - new Date(datelindja).getFullYear());
        return age;
    };
    ListaPacientetComponent.prototype.onCleared = function () {
        this.selectedPacient = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__pacient__["a" /* Pacient */])
    ], ListaPacientetComponent.prototype, "pacient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__pacient__["a" /* Pacient */])
    ], ListaPacientetComponent.prototype, "selectedPacient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ListaPacientetComponent.prototype, "pacientSelected", void 0);
    ListaPacientetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lista-pacientet',
            template: __webpack_require__("../../../../../src/app/pacientet/lista-pacientet/lista-pacientet.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pacientet_service__["a" /* PacientetService */], __WEBPACK_IMPORTED_MODULE_3_app_receta_receta_service__["a" /* RecetaService */]])
    ], ListaPacientetComponent);
    return ListaPacientetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pacientet/pacient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pacient; });
var Pacient = /** @class */ (function () {
    function Pacient(emri_pacientit, rraca, data, age, emri_pronarit, shenime, receta) {
        this.emri_pacientit = emri_pacientit;
        this.rraca = rraca;
        this.data = data;
        this.age = age;
        this.emri_pronarit = emri_pronarit;
        this.shenime = shenime;
        this.receta = receta;
    }
    return Pacient;
}());



/***/ }),

/***/ "../../../../../src/app/pacientet/pacientet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pacientet/pacientet.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fullPage\">\n      <app-header></app-header>\n</div>\n<div class=\"container\">\n      \n     \n      <router-outlet></router-outlet>\n      <app-lista-pacient-mat (pacientSelected)=\"selectedPacient = $event\"></app-lista-pacient-mat>\n\n</div> "

/***/ }),

/***/ "../../../../../src/app/pacientet/pacientet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacientetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_pacientet_pacientet_service__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PacientetComponent = /** @class */ (function () {
    function PacientetComponent(ps) {
        this.ps = ps;
    }
    PacientetComponent.prototype.ngOnInit = function () {
    };
    PacientetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pacientet',
            template: __webpack_require__("../../../../../src/app/pacientet/pacientet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pacientet/pacientet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_pacientet_pacientet_service__["a" /* PacientetService */]])
    ], PacientetComponent);
    return PacientetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pacientet/pacientet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacientetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PacientetService = /** @class */ (function () {
    function PacientetService(http) {
        this.http = http;
        this.Update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        //pacientsChange = new EventEmitter();
        // private pacients: Pacient[] = [
        //     new Pacient('Lesi', 'Rraca', "2016-11-16", [], 'emri pronarit', 'shenim test', [
        //         new Receta('emri_pacientit1', '2016-11-16', ['ilaci1', 'ilaci2'], 'diagnoza'),
        //         new Receta('emri_pacientit1', '2016-11-16', [], 'diagnoza')
        //     ]),
        //     new Pacient('Max', 'RracaRraca', "2017-11-16", [], 'emri pronarit1', 'shenim test1', [
        //         new Receta('emri_pacientit2', '2016-11-16', [], 'diagnoza'),
        //         new Receta('emri_pacientit2', '2016-11-16', [], 'diagnoza')
        //     ]),
        //     new Pacient('Lulu', 'Rraca', "2017-11-16", [], 'emri pronarit 2', 'shenim test2', []),
        //     new Pacient('Coco', 'Rraca', "2017-11-16", [], 'emri pronarit 3', 'shenim test3', [])
        // ];
        this.pacients = [
            {
                emri_pacientit: 'Lesi', rraca: 'Macja “Ekzotike qimeshkurtër”', data: '2016-11-16', age: [], emri_pronarit: 'emri pronarit1', shenime: 'shenim test', receta: [
                    {
                        emri_pacientit: 'Lesi', data_lindjes: '2016-11-16', ilacet: [
                            'Ilaci 1', 'ilaci 2'
                        ], diagnoza: 'sh mire'
                    },
                    {
                        emri_pacientit: 'Lesi', data_lindjes: '2016-11-16', ilacet: [
                            'Ilaci 1', 'ilaci 2'
                        ], diagnoza: 'sh mire'
                    }
                ]
            },
            {
                emri_pacientit: 'Lulu', rraca: 'Macja “Sfinks', data: '2015-11-16', age: [], emri_pronarit: 'emri pronarit2', shenime: 'shenim test', receta: []
            },
            {
                emri_pacientit: 'Coco', rraca: 'Orientale', data: '2014-11-16', age: [], emri_pronarit: 'emri pronarit3', shenime: 'shenim test', receta: []
            },
            {
                emri_pacientit: 'Lej', rraca: ' Macja “Qimeshkurtër amerikane"', data: '2013-11-16', age: [], emri_pronarit: 'emri pronarit4', shenime: 'shenim test', receta: []
            },
            {
                emri_pacientit: 'Lusi', rraca: 'Macja “Birman”', data: '2012-11-16', age: [], emri_pronarit: 'emri pronarit5', shenime: 'shenim test', receta: []
            },
            {
                emri_pacientit: 'Bubi', rraca: 'Macja Perse', data: '2011-11-16', age: [], emri_pronarit: 'emri pronarit6', shenime: 'shenim test', receta: []
            }
        ];
    }
    PacientetService.prototype.getPacients = function () {
        return this.pacients;
    };
    PacientetService.prototype.getPacient = function (id) {
        return this.pacients[id];
    };
    PacientetService.prototype.deletePacient = function (pacient) {
        this.pacients.splice(this.pacients.indexOf(pacient), 1);
        this.Update.next();
    };
    PacientetService.prototype.addPacient = function (pacient) {
        this.pacients.push(pacient);
        this.Update.next();
        //console.log(pacient)
    };
    PacientetService.prototype.addReceta = function (recetat) {
    };
    PacientetService.prototype.editPacient = function (oldPacient, newPacient) {
        this.pacients[this.pacients.indexOf(oldPacient)] = newPacient;
        this.Update.next();
        // console.log(newPacient)
    };
    PacientetService.prototype.storeData = function () {
        var body = JSON.stringify(this.pacients);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://app-animals.firebaseio.com/pacients.json', body, { headers: headers });
    };
    PacientetService.prototype.fetchData = function () {
        var _this = this;
        return this.http.get('https://app-animals.firebaseio.com/pacients.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (da) {
            _this.pacients = da;
            _this.Update.emit(_this.pacients);
        });
    };
    PacientetService.prototype.deleteData = function () {
        return this.http.delete('https://app-animals.firebaseio.com/pacients/0')
            .map(function (response) { return response.text(); })
            .subscribe(
        // data => {
        //     this.pacients.splice(this.pacients.indexOf(data), 1);
        function (data) { return console.log(data); }, function (error) { return console.error(error); });
        //  const body = JSON.stringify(this.pacients);
        //  const headers = new Headers({
        //      'Content-Type': 'application/json'
        // console.log(this.pacients);   
    };
    PacientetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PacientetService);
    return PacientetService;
}());



/***/ }),

/***/ "../../../../../src/app/receta/input-receta/input-receta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/receta/input-receta/input-receta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n\n    <!--Forma-->\n    <!-- <form id=\"input-receta\" (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\"> -->\n    <form [formGroup]=\"MyForm\" (ngSubmit)=\"onRuaj()\">\n      <h1 style=\"text-align: center; color: red\">Shto nje Recet</h1>\n      <ul>{{today | date}}</ul>\n      <hr>\n      <div class=\"row\" style=\"text-align: right;\">\n        <div class=\"col-xs-12\">\n          <button type=\"submit\" class=\"btn btn-success\">RUAJ</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\">Anullo</button>\n        </div>\n      </div>\n      <!--Vendosa e inputeve-->\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Emri Pacientit </label>\n            <input \n            type=\"text\" \n            id=\"emri_pacientit\" \n            class=\"form-control\" \n            formControlName=\"emri_pacientit\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Data e lindjes</label>\n            <input \n            type=\"date\" \n            id=\"data_lindjes\" \n            class=\"form-control\" \n            formControlName=\"data_lindjes\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"content\">Diagnoza</label>\n            <textarea \n            type=\"text\" \n            id=\"diagnoza\" \n            rows=\"6\" \n            class=\"form-control\" \n            formControlName=\"diagnoza\"\n            ></textarea>\n          </div>\n        </div>\n      </div>\n\n\n      <div formArrayName=\"ilacet\">\n        <div class=\"form-group\" *ngFor=\"let recet of MyForm.get('ilacet').controls; let i = index\">\n          <br>\n          <input type=\"text\" class=\"form-control\" formControlName=\"{{i}}\">\n        </div>\n      </div>\n  \n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onAddItem ()\">+</button>\n    </form>\n  \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/receta/input-receta/input-receta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputRecetaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__receta__ = __webpack_require__("../../../../../src/app/receta/receta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receta_service__ = __webpack_require__("../../../../../src/app/receta/receta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputRecetaComponent = /** @class */ (function () {
    function InputRecetaComponent(route, recetaService, formBuilder, router) {
        this.route = route;
        this.recetaService = recetaService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isNew = true;
        this.isAdd = true;
        this.MyForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            'emri_pacientit': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](),
            'data_lindjes': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](),
            'diagnoza': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](),
            'ilacet': formBuilder.array(['Vendos Ilacet'])
        });
    }
    InputRecetaComponent.prototype.onAddItem = function () {
        this.MyForm.get('ilacet').push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required));
    };
    InputRecetaComponent.prototype.onRuaj = function () {
        var newReceta = this.MyForm.value;
        if (this.isNew) {
            this.recetaService.AddReceta(newReceta);
        }
    };
    InputRecetaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.item.currentValue === null) {
            this.isAdd = true;
            this.item = { emri_pacientit: null, data_lindjes: null, diagnoza: null, ilacet: null };
            console.log(this.item);
        }
        else {
            this.isAdd = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__receta__["a" /* Receta */])
    ], InputRecetaComponent.prototype, "item", void 0);
    InputRecetaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input-receta',
            template: __webpack_require__("../../../../../src/app/receta/input-receta/input-receta.component.html"),
            styles: [__webpack_require__("../../../../../src/app/receta/input-receta/input-receta.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__receta_service__["a" /* RecetaService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], InputRecetaComponent);
    return InputRecetaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/receta/lista-receta/lista-receta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/receta/lista-receta/lista-receta.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <app-input-receta> </app-input-receta>\r\n</div>\r\n  \r\n<p style=\"text-align: right;\">{{today | date}}</p> \r\n<p>{{recetaSelected?.emri_pacientit}}</p>\r\n\r\n<h1  style=\"text-align: center; color: blue\" >Lista e Recetave </h1>\r\n\r\n<hr>\r\n<!-- <a  (click)=\"onEditReceta()\"> -->\r\n\r\n<ul class=\"list-group\">\r\n\r\n  <a class=\"list-group-item\" style=\" \" *ngFor='let item of items' (click)=\"onSelectItem(item)\">\r\n      <ul>{{item.data_lindjes}}</ul><ul> {{item.ilacet}} </ul></a>\r\n\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/receta/lista-receta/lista-receta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaRecetaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__receta_service__ = __webpack_require__("../../../../../src/app/receta/receta.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaRecetaComponent = /** @class */ (function () {
    function ListaRecetaComponent(rs) {
        this.rs = rs;
        this.items = [];
        this.recetaSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.today = Date.now();
    }
    ListaRecetaComponent.prototype.ngOnInit = function () {
        this.items = this.rs.getItems();
    };
    ListaRecetaComponent.prototype.onSelectItem = function (item) {
        this.recetaSelected.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ListaRecetaComponent.prototype, "recetaSelected", void 0);
    ListaRecetaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lista-receta',
            template: __webpack_require__("../../../../../src/app/receta/lista-receta/lista-receta.component.html"),
            styles: [__webpack_require__("../../../../../src/app/receta/lista-receta/lista-receta.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__receta_service__["a" /* RecetaService */]])
    ], ListaRecetaComponent);
    return ListaRecetaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/receta/receta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/receta/receta.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <app-input-receta></app-input-receta> -->\n<div id=\"fullPage\">\n    <app-header></app-header> \n</div>\n<div class=\"container\">\n        <app-lista-receta ></app-lista-receta>\n  \n        \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/receta/receta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecetaComponent = /** @class */ (function () {
    function RecetaComponent() {
    }
    RecetaComponent.prototype.ngOnInit = function () {
    };
    RecetaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-receta',
            template: __webpack_require__("../../../../../src/app/receta/receta.component.html"),
            styles: [__webpack_require__("../../../../../src/app/receta/receta.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecetaComponent);
    return RecetaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/receta/receta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetaService; });
var RecetaService = /** @class */ (function () {
    function RecetaService() {
        this.items = [];
    }
    RecetaService.prototype.getItems = function () {
        return this.items;
    };
    RecetaService.prototype.addItems = function (items) {
        Array.prototype.push.apply(this.items, items);
    };
    RecetaService.prototype.AddReceta = function (receta) {
        this.items.push(receta);
    };
    RecetaService.prototype.getReceta = function (id) {
        return this.items[id];
    };
    RecetaService.prototype.editReceta = function (oldReceta, newReceta) {
        this.items[this.items.indexOf(oldReceta)] = newReceta;
    };
    return RecetaService;
}());



/***/ }),

/***/ "../../../../../src/app/receta/receta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Receta; });
var Receta = /** @class */ (function () {
    function Receta(emri_pacientit, data_lindjes, ilacet, diagnoza) {
        this.emri_pacientit = emri_pacientit;
        this.data_lindjes = data_lindjes;
        this.ilacet = ilacet;
        this.diagnoza = diagnoza;
    }
    return Receta;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pacientet_pacientet_component__ = __webpack_require__("../../../../../src/app/pacientet/pacientet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receta_receta_component__ = __webpack_require__("../../../../../src/app/receta/receta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pacientet_child_pacient_routes__ = __webpack_require__("../../../../../src/app/pacientet/child_pacient.routes.ts");





// ROUTER KRYESOR
var APP_ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'pacientet', component: __WEBPACK_IMPORTED_MODULE_1__pacientet_pacientet_component__["a" /* PacientetComponent */], children: __WEBPACK_IMPORTED_MODULE_4__pacientet_child_pacient_routes__["a" /* PA_ROUTES */] },
    { path: 'recetat', component: __WEBPACK_IMPORTED_MODULE_3__receta_receta_component__["a" /* RecetaComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map