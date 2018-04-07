webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/add-list/add-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".push-button-down {\r\n\tmargin-top: 5%;\r\n}\r\n\r\n.custom-margin{\r\n\tmargin-top: 43px;\t\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/add-list/add-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h3 class= \"custom-title\">Add New List</h3>\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n      <div  class=\"form-group col-md-4\">\r\n        <label for=\"title\"><h4>Title</h4></label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newList.title\" name=\"title\" required>\r\n      </div>\r\n \r\n      <div class=\"form-group col-md-2\">\r\n        <label for=\"category\"><h4>Category</h4></label>\r\n        <select class=\"form-control\" name=\"cat\" [(ngModel)]=\"newList.category\" >\r\n        \t\r\n  \t\t\t<option value=\"High\">High Priority</option>\r\n  \t\t\t<option value=\"Medium\">Medium Priority</option>\r\n  \t\t\t<option value=\"Low\">Low Prioirty</option>\r\n  \t\t\r\n\t\t</select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"description\"><h4>Description</h4></label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newList.description\" name=\"description\" required>\r\n      </div>\r\n        <div class=\"form-group col-md-2 custom-margin\">\r\n          <button type=\"submit\" class=\" btn btn-success\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/add-list/add-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddListComponent = (function () {
    function AddListComponent(listServ) {
        this.listServ = listServ;
        this.addList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    AddListComponent.prototype.ngOnInit = function () {
        this.newList = {
            title: '',
            category: '',
            description: '',
            _id: ''
        };
    };
    AddListComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.newList.category);
        this.listServ.addList(this.newList).subscribe(function (response) {
            if (response.success == true)
                _this.addList.emit(_this.newList);
        });
    };
    return AddListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], AddListComponent.prototype, "addList", void 0);
AddListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-add-list',
        template: __webpack_require__("./src/app/add-list/add-list.component.html"),
        styles: [__webpack_require__("./src/app/add-list/add-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === "function" && _b || Object])
], AddListComponent);

var _a, _b;
//# sourceMappingURL=add-list.component.js.map

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_list_add_list_component__ = __webpack_require__("./src/app/add-list/add-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_list_view_list_component__ = __webpack_require__("./src/app/view-list/view-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_others_list_view_others_list_component__ = __webpack_require__("./src/app/view-others-list/view-others-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_tab_navigation_tab_component__ = __webpack_require__("./src/app/navigation-tab/navigation-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_validation_confirm_equal_validator_directive__ = __webpack_require__("./src/app/directives/validation/confirm-equal-validator.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routingComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'bucketlist', component: __WEBPACK_IMPORTED_MODULE_8__navigation_tab_navigation_tab_component__["a" /* NavigationTabComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__registration_registration_component__["a" /* RegistrationComponent */], __WEBPACK_IMPORTED_MODULE_5__add_list_add_list_component__["a" /* AddListComponent */],
    __WEBPACK_IMPORTED_MODULE_6__view_list_view_list_component__["a" /* ViewListComponent */], __WEBPACK_IMPORTED_MODULE_7__view_others_list_view_others_list_component__["a" /* ViewOthersListComponent */], __WEBPACK_IMPORTED_MODULE_8__navigation_tab_navigation_tab_component__["a" /* NavigationTabComponent */], __WEBPACK_IMPORTED_MODULE_9__directives_validation_confirm_equal_validator_directive__["a" /* ConfirmEqualValidatorDirective */]];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-class{\r\n    padding-top: 40px;\r\n    margin-top: 0px;\r\n    padding-bottom: 40px;\r\n    background-color: #5cb85c;\r\n    color: white;\r\n    background: linear-gradient(to right, rgba(86, 171, 47, 1), rgba(86, 171, 47, .7));\r\n    margin-bottom: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\r\n<div style=\"text-align:center\">\r\n  <h1 class=\"header-class\">\r\n     {{title}}\r\n  </h1>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Awesome Bucketlist App';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_registration_service__ = __webpack_require__("./src/app/services/registration.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { ConfirmEqualValidatorDirective } from './directives/validation/confirm-equal-validator.directive';
//import { HomeComponent } from './home/home.component';
// import { AddListComponent } from './add-list/add-list.component';
// import { ViewListComponent } from './view-list/view-list.component';
// import { LoginComponent } from './login/login.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { NavigationTabComponent } from './navigation-tab/navigation-tab.component';
// import { ViewOthersListComponent } from './view-others-list/view-others-list.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        //Components are added here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* routingComponents */],
        ],
        //All the modules are declared as imports
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["b" /* AppRoutingModule */]
        ],
        //All the services go here.
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_list_service__["a" /* ListService */], __WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_8__services_registration_service__["a" /* RegistrationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/directives/validation/confirm-equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEqualValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    return ConfirmEqualValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* Directive */])({
        selector: '[appConfirmEqualValidator]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* NG_VALIDATORS */],
                useExisting: ConfirmEqualValidatorDirective_1,
                multi: true
            }]
    })
], ConfirmEqualValidatorDirective);

var ConfirmEqualValidatorDirective_1;
//# sourceMappingURL=confirm-equal-validator.directive.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <app-login> </app-login>\n  <app-registration> </app-registration>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-5 col-sm-offset-1\" style=\"padding: 3%;\">\r\n  <h3>Login</h3>\r\n<p class=\"text-muted left-alignment\">\r\n  Please fill out the form below to login to your account.\r\n</p>\r\n<div class=\"form-white\">\r\n    <form (ngSubmit)=\"login()\" ngNativeValidate #form=\"ngForm\">\r\n      <div class=\"form-group left-alignment\">\r\n        <label for=\"email\" class=\"float-left\"><span class=\"asterix\">*</span>Username</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newLogin.username\" name=\"username\" placeholder=\"Enter username\" #username=\"ngModel\" required>\r\n        <span class=\"help-block error-text\"\r\n        *ngIf=\"username.touched && username.errors?.required\">\r\n        Username is required\r\n      </span>\r\n      </div>\r\n\r\n      <div class=\"form-group left-alignment\">\r\n        <label for=\"password\"><span class=\"asterix\">*</span>Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newLogin.password\" name=\"password\" placeholder=\"Password\" #password=\"ngModel\" required>\r\n        <span class=\"help-block error-text\"\r\n        *ngIf=\"password.touched && password.errors?.required\">\r\n        Password is required\r\n      </span>\r\n      </div>\r\n\r\n      <div class=\"checkbox\">\r\n      </div>\r\n\r\n      <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-block btn-color btn-xxl btn-success\">Login</button>\r\n    </form>\r\n\r\n    <br>\r\n    <div *ngIf=\"incorrectPwd\" id=\"incorrect-password\" class=\"asterix fontsize\">\r\n      <p>Incorrect Username or Password!</p>\r\n    </div>\r\n\r\n    <div *ngIf=\"usernameNotExists\" class=\"asterix fontsize hidden\">\r\n      <p>Username does not exists</p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<!-- Sign Up form -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginServ, router) {
        this.loginServ = loginServ;
        this.router = router;
        this.incorrectPwd = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("Initial data!");
        this.newLogin = {
            username: '',
            password: '',
        };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        //console.log(this.newLogin.password);
        var response = this.loginServ.login(this.newLogin)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.router.navigate(['bucketlist']);
        }, function (err) {
            console.log(err);
            _this.incorrectPwd = true;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/navigation-tab/navigation-tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-tabs>li>a{\r\n    color: #56ab2f;\r\n}\r\n.nav-tabs>li.active>a{\r\n    /* background-color: #5cb85c; */\r\n    color: #56ab2f;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/navigation-tab/navigation-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul class=\"nav nav-pills\">\r\n    <li class=\"active\"><a href=\"#\">My List</a></li>\r\n    <li><a href=\"#\">View others list</a></li>\r\n\r\n  </ul> -->\r\n  <div>\r\n  <ul class=\"nav nav-tabs\">\r\n      <li class=\"active\"><a data-toggle=\"pill\" href=\"#myList\">My List</a></li>\r\n      <li><a data-toggle=\"pill\" href=\"#othersList\">Others list</a></li>\r\n    </ul>\r\n\r\n    <div class=\"tab-content\">\r\n      <div id=\"myList\" class=\"tab-pane fade in active\">\r\n        <app-add-list (addList)=\"onAddList($event)\"> </app-add-list>\r\n        <app-view-list></app-view-list>\r\n      </div>\r\n      <div id=\"othersList\" class=\"tab-pane fade\">\r\n        <app-view-others-list></app-view-others-list>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/navigation-tab/navigation-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationTabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationTabComponent = (function () {
    function NavigationTabComponent() {
    }
    NavigationTabComponent.prototype.ngOnInit = function () {
    };
    return NavigationTabComponent;
}());
NavigationTabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-navigation-tab',
        template: __webpack_require__("./src/app/navigation-tab/navigation-tab.component.html"),
        styles: [__webpack_require__("./src/app/navigation-tab/navigation-tab.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavigationTabComponent);

//# sourceMappingURL=navigation-tab.component.js.map

/***/ }),

/***/ "./src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-5\" style=\"padding: 3%; border-left: 2px solid green;\">\r\n  <h3 class=\"text-right-xs\">Register</h3>\r\n<p class=\"text-muted text-right-xs left-alignment\">\r\n  Please fill out the form below to create a new account.\r\n</p>\r\n<div class=\"form-white\">\r\n  <form (ngSubmit)=\"registration()\" ngNativeValidate #form=\"ngForm\">\r\n    <div class=\"form-group left-alignment\">\r\n      <label for=\"username\"><span class=\"asterix\">*</span>Username</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newRegistration.username\" name=\"username\" placeholder=\"Enter username\" #username=\"ngModel\" required>\r\n    <span class=\"help-block error-text\"\r\n        *ngIf=\"username.touched && username.errors?.required\">\r\n        Username is required\r\n      </span>\r\n    </div>\r\n    <div class=\"form-group left-alignment\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n      <label for=\"password2\"><span class=\"asterix\">*</span>Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newRegistration.password2\" name=\"password2\" id=\"password2\" placeholder=\"Password\" #password2=\"ngModel\" minlength=\"8\" required>\r\n      <span class=\"help-block error-text\"\r\n        *ngIf=\"password2.touched && password2.errors?.required\">\r\n        Password is required\r\n      </span>\r\n       <span class=\"help-block error-text\" *ngIf=\"password2.errors?.minlength\">\r\n          Password must be at least 8 characters long.\r\n        </span>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n      <label for=\"password2\"><span class=\"asterix\">*</span>Confirm password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newRegistration.password3\" name=\"password3\" id=\"password3\" appConfirmEqualValidator=\"password2\"  placeholder=\"Confirm Password\" #password3=\"ngModel\" required>\r\n      <!-- <span *ngIf=\"areNotEqual\" class=\"asterix fontsize\">Password does not match!</span> -->\r\n      <span class=\"help-block error-text\"\r\n        *ngIf=\"password3.touched && password3.errors?.required\">\r\n        Confirm Password is required\r\n      </span>\r\n      <span class=\"help-block error-text\"\r\n        *ngIf=\"password3.touched && password3.errors?.notEqual\">\r\n        Password does not match\r\n      </span>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"checkbox\">\r\n      </div>\r\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-block btn-color btn-xxl btn-success\">Create an account</button>\r\n  </form>\r\n  <br>\r\n  <div id=\"already-exists\" class=\"hidden\">\r\n    <p class=\"asterix fontsize\">Username already exists! Try with different Username</p>\r\n  </div>\r\n  <div *ngIf=\"userAdded\" id=\"user-created\">\r\n      <p class=\"success\">User added successfully!</p>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_registration_service__ = __webpack_require__("./src/app/services/registration.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = (function () {
    function RegistrationComponent(registrationServ) {
        this.registrationServ = registrationServ;
        this.userAdded = false;
        this.areNotEqual = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        console.log("Initial data!");
        this.newRegistration = {
            username: '',
            password2: '',
            password3: ''
        };
    };
    RegistrationComponent.prototype.registration = function () {
        if (this.newRegistration.password2 == this.newRegistration.password3) {
            this.areNotEqual = false;
            var response = this.registrationServ.registration(this.newRegistration);
            if (response == true) {
                console.log("In true");
                this.userAdded = true;
            }
        }
        else {
            this.areNotEqual = true;
            //password3.setCustomValidity("Passwords Don't Match");
        }
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("./src/app/registration/registration.component.html"),
        styles: [__webpack_require__("./src/app/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_registration_service__["a" /* RegistrationService */]) === "function" && _a || Object])
], RegistrationComponent);

var _a;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "./src/app/services/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = (function () {
    function ListService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    ListService.prototype.getAllLists = function () {
        // let URI = `${this.serverApi}/bucketlist/`;
        //   return this.http.get(URI)
        return this.http.get('./assets/data/data.json')
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res.list;
        });
    };
    ListService.prototype.deleteList = function (listId) {
        console.log("inside delete function " + listId);
        var URI = this.serverApi + "/bucketlist/" + listId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.addList = function (list) {
        var URI = this.serverApi + "/bucketlist/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        var body = JSON.stringify({ title: list.title, description: list.description, category: list.category });
        console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ListService;
}());
ListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ListService);

var _a;
//# sourceMappingURL=list.service.js.map

/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    LoginService.prototype.login = function (login) {
        var URI = this.serverApi + "/api/login";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        var body = JSON.stringify({ username: login.username, password: login.password });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "./src/app/services/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationService = (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.registration = function (registration) {
        //let URI = `${this.serverApi}/bucketlist/`;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */];
        var body = JSON.stringify({ username: registration.username });
        console.log(body);
        if (registration.username == 'rohit' && registration.password2 == 'Welcome123') {
            console.log("In If " + body);
            return true;
        }
        else {
            return false;
        }
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RegistrationService);

var _a;
//# sourceMappingURL=registration.service.js.map

/***/ }),

/***/ "./src/app/view-list/view-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-danger {\r\n\tcolor: #eeeeee;\r\n}\r\n\r\n.align-center {\r\n\ttext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/view-list/view-list.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- <app-navigation-tab></app-navigation-tab> -->\r\n  <br>\r\n  <!-- Table starts here -->\r\n  <h3 class= \"custom-title\">My List</h3>\r\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue table-striped\">\r\n      <thead>\r\n        <tr class=\"align-center\">\r\n          <th class=\"align-center\">Priority Level</th>\r\n          <th class=\"align-center\">Title</th>\r\n          <th class=\"align-center\"> Description</th>\r\n          <th class=\"align-center\"> Assign </th>\r\n          <th class=\"align-center\"> Delete </th>\r\n          \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      \t<tr *ngFor=\"let list of lists\">\r\n      \t  <td>{{list.category}}</td>\r\n          <td>{{list.title}}</td>\r\n          <td>{{list.description}}</td>\r\n          <td> <button type=\"button\" class=\"btn btn-success\" (click)=\"assignList(list); $event.stopPropagation();\">Assign</button></td>  \r\n          <td> <button type=\"button\" class=\"btn btn-danger\"  (click)=\"deleteList(list); $event.stopPropagation();\">Delete</button></td>\r\n        </tr>\r\n      </tbody>\r\n   </table>\r\n   <hr>\r\n\r\n\r\n "

/***/ }),

/***/ "./src/app/view-list/view-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewListComponent = (function () {
    function ViewListComponent(listServ) {
        this.listServ = listServ;
        //lists propoerty which is an array of List type
        this.lists = [];
    }
    ViewListComponent.prototype.ngOnInit = function () {
        //Load all list on init 
        this.loadLists();
    };
    ViewListComponent.prototype.loadLists = function () {
        var _this = this;
        //Get all lists from server and update the lists property
        this.listServ.getAllLists().subscribe(function (response) { return _this.lists = response; });
    };
    //The deleted list is being filtered out using the .filter method
    ViewListComponent.prototype.deleteList = function (list) {
        var _this = this;
        this.listServ.deleteList(list._id).subscribe(function (response) { return _this.lists = _this.lists.filter(function (lists) { return lists !== list; }); });
    };
    //onAddList will be invoked when the child component emits an event
    ViewListComponent.prototype.onAddList = function (newList) {
        this.lists = this.lists.concat(newList);
    };
    return ViewListComponent;
}());
ViewListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-view-list',
        template: __webpack_require__("./src/app/view-list/view-list.component.html"),
        styles: [__webpack_require__("./src/app/view-list/view-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === "function" && _a || Object])
], ViewListComponent);

var _a;
//# sourceMappingURL=view-list.component.js.map

/***/ }),

/***/ "./src/app/view-others-list/view-others-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-danger {\r\n\tcolor: #eeeeee;\r\n}\r\n\r\n.align-center {\r\n\ttext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/view-others-list/view-others-list.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- <app-navigation-tab></app-navigation-tab> -->\r\n  <br>\r\n  <!-- Table starts here -->\r\n  <h3 class= \"custom-title\">Others List</h3>\r\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue\">\r\n      <thead>\r\n        <tr class=\"align-center\">\r\n          <th class=\"align-center\">Priority Level</th>\r\n          <th class=\"align-center\">Title</th>\r\n          <th class=\"align-center\"> Description</th>\r\n          <th class=\"align-center\"> Claim </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      \t<tr *ngFor=\"let list of lists\">\r\n      \t  <td>{{list.category}}</td>\r\n          <td>{{list.title}}</td>\r\n          <td>{{list.description}}</td>\r\n          <td> <button type=\"button\" class=\"btn btn-success\" (click)=\"claimList(list); $event.stopPropagation();\">Claim</button></td>  \r\n        </tr>\r\n      </tbody>\r\n   </table>\r\n\r\n\r\n <!-- <app-add-list (addList)=\"onAddList($event)\"> </app-add-list> -->"

/***/ }),

/***/ "./src/app/view-others-list/view-others-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__("./src/app/services/list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOthersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewOthersListComponent = (function () {
    function ViewOthersListComponent(listServ) {
        this.listServ = listServ;
        this.lists = [];
    }
    ViewOthersListComponent.prototype.ngOnInit = function () {
        //Load all list on init 
        this.loadLists();
    };
    ViewOthersListComponent.prototype.loadLists = function () {
        var _this = this;
        //Get all lists from server and update the lists property
        this.listServ.getAllLists().subscribe(function (response) { return _this.lists = response; });
    };
    //The deleted list is being filtered out using the .filter method
    ViewOthersListComponent.prototype.deleteList = function (list) {
        var _this = this;
        this.listServ.deleteList(list._id).subscribe(function (response) { return _this.lists = _this.lists.filter(function (lists) { return lists !== list; }); });
    };
    //onAddList will be invoked when the child component emits an event
    ViewOthersListComponent.prototype.onAddList = function (newList) {
        this.lists = this.lists.concat(newList);
    };
    return ViewOthersListComponent;
}());
ViewOthersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-view-others-list',
        template: __webpack_require__("./src/app/view-others-list/view-others-list.component.html"),
        styles: [__webpack_require__("./src/app/view-others-list/view-others-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */]) === "function" && _a || Object])
], ViewOthersListComponent);

var _a;
//# sourceMappingURL=view-others-list.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map