webpackJsonp(["main"],{

/***/ "../../../../../../node_modules/ngx-cookie-service/cookie-service/cookie.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
// This service is based on the `ng2-cookies` package which sadly is not a service and does
// not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
// Package: https://github.com/BCJTI/ng2-cookies


var CookieService = (function () {
    function CookieService(
        // The type `Document` may not be used here. Although a fix is on its way,
        // we will go with `any` for now to support Angular 2.4.x projects.
        // Issue: https://github.com/angular/angular/issues/12631
        // Fix: https://github.com/angular/angular/pull/14894
        document) {
        this.document = document;
        // To avoid issues with server side prerendering, check if `document` is defined.
        this.documentIsAccessible = document !== undefined;
    }
    /**
     * @param name Cookie name
     * @returns {boolean}
     */
    CookieService.prototype.check = function (name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        var regExp = this.getCookieRegExp(name);
        var exists = regExp.test(this.document.cookie);
        return exists;
    };
    /**
     * @param name Cookie name
     * @returns {any}
     */
    CookieService.prototype.get = function (name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            var regExp = this.getCookieRegExp(name);
            var result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    };
    /**
     * @returns {}
     */
    CookieService.prototype.getAll = function () {
        if (!this.documentIsAccessible) {
            return {};
        }
        var cookies = {};
        var document = this.document;
        if (document.cookie && document.cookie !== '') {
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i += 1) {
                var currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    };
    /**
     * @param name    Cookie name
     * @param value   Cookie value
     * @param expires Number of days until the cookies expires or an actual `Date`
     * @param path    Cookie path
     * @param domain  Cookie domain
     * @param secure  Secure flag
     */
    CookieService.prototype.set = function (name, value, expires, path, domain, secure) {
        if (!this.documentIsAccessible) {
            return;
        }
        var cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieString += 'path=' + path + ';';
        }
        if (domain) {
            cookieString += 'domain=' + domain + ';';
        }
        if (secure) {
            cookieString += 'secure;';
        }
        this.document.cookie = cookieString;
    };
    /**
     * @param name   Cookie name
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CookieService.prototype.delete = function (name, path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', -1, path, domain);
    };
    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CookieService.prototype.deleteAll = function (path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        var cookies = this.getAll();
        for (var cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain);
            }
        }
    };
    /**
     * @param name Cookie name
     * @returns {RegExp}
     */
    CookieService.prototype.getCookieRegExp = function (name) {
        var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    };
    return CookieService;
}());

CookieService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
CookieService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */],] },] },
]; };
//# sourceMappingURL=cookie.service.js.map

/***/ }),

/***/ "../../../../../../node_modules/ngx-cookie-service/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookie_service_cookie_service__ = __webpack_require__("../../../../../../node_modules/ngx-cookie-service/cookie-service/cookie.service.js");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return __WEBPACK_IMPORTED_MODULE_0__cookie_service_cookie_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

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

/***/ "../../../../../src/app/add-list/add-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".push-button-down {\r\n\tmargin-top: 5%;\r\n}\r\n\r\n.custom-margin{\r\n\tmargin-top: 43px;\t\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-list/add-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h4 class= \"custom-title\">Add New List</h4>\r\n    <form (ngSubmit)=\"addTask()\"  #form=\"ngForm\">\r\n      <div class=\"row\">\r\n      <div  class=\"form-group col-md-4\">\r\n        <label for=\"title\"><h4>Title</h4></label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newList.title\" name=\"title\" maxlength=\"25\" required>\r\n      </div>\r\n \r\n      <div class=\"form-group col-md-2\">\r\n        <label for=\"category\"><h4>Category</h4></label>\r\n        <select class=\"form-control\" name=\"cat\" [(ngModel)]=\"newList.priority\" >\r\n        \t\r\n  \t\t\t<option value=\"High\">High Priority</option>\r\n  \t\t\t<option value=\"Medium\">Medium Priority</option>\r\n  \t\t\t<option value=\"Low\">Low Priority</option>\r\n  \t\t\r\n\t\t</select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"description\"><h4>Description</h4></label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newList.description\" name=\"description\" maxlength=\"50\" required>\r\n      </div>\r\n        <div class=\"form-group col-md-2 custom-margin\">\r\n          <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-list/add-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var list_service_1 = __webpack_require__("../../../../../src/app/services/list.service.ts");
var AddListComponent = /** @class */ (function () {
    function AddListComponent(listServ) {
        this.listServ = listServ;
        this.addList = new core_1.EventEmitter();
    }
    AddListComponent.prototype.ngOnInit = function () {
        this.newList = {
            title: '',
            priority: 'Low',
            description: '',
            id: '',
            owner: ''
        };
    };
    AddListComponent.prototype.addTask = function () {
        var _this = this;
        this.listServ.addList(this.newList).subscribe(function (response) {
            if (response.message === 'Task Created Successfully') {
                console.log("task added successfully ");
                _this.addList.emit(_this.newList);
                _this.newList = {
                    title: '',
                    priority: 'Low',
                    description: '',
                    id: '',
                    owner: ''
                };
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AddListComponent.prototype, "addList", void 0);
    AddListComponent = __decorate([
        core_1.Component({
            selector: 'app-add-list',
            template: __webpack_require__("../../../../../src/app/add-list/add-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-list/add-list.component.css")]
        }),
        __metadata("design:paramtypes", [list_service_1.ListService])
    ], AddListComponent);
    return AddListComponent;
}());
exports.AddListComponent = AddListComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var add_list_component_1 = __webpack_require__("../../../../../src/app/add-list/add-list.component.ts");
var view_list_component_1 = __webpack_require__("../../../../../src/app/view-list/view-list.component.ts");
var view_others_list_component_1 = __webpack_require__("../../../../../src/app/view-others-list/view-others-list.component.ts");
var navigation_tab_component_1 = __webpack_require__("../../../../../src/app/navigation-tab/navigation-tab.component.ts");
var confirm_equal_validator_directive_1 = __webpack_require__("../../../../../src/app/directives/validation/confirm-equal-validator.directive.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/auth.guard.ts");
var login_guard_1 = __webpack_require__("../../../../../src/app/login.guard.ts");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', canActivate: [login_guard_1.LoginGuard], component: home_component_1.HomeComponent },
    //{ path: 'bucketlist', component: NavigationTabComponent }
    { path: 'bucketlist', canActivate: [auth_guard_1.AuthGuard], component: navigation_tab_component_1.NavigationTabComponent }
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
exports.routingComponents = [home_component_1.HomeComponent, login_component_1.LoginComponent, registration_component_1.RegistrationComponent, add_list_component_1.AddListComponent,
    view_list_component_1.ViewListComponent, view_others_list_component_1.ViewOthersListComponent, navigation_tab_component_1.NavigationTabComponent, confirm_equal_validator_directive_1.ConfirmEqualValidatorDirective];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-class{\r\n    padding-top: 40px;\r\n    margin-top: 0px;\r\n    padding-bottom: 40px;\r\n    background-color: #5cb85c;\r\n    color: white;\r\n    background: -webkit-gradient(linear, left top, right top, from(rgba(86, 171, 47, 1)), to(rgba(86, 171, 47, .7)));\r\n    background: linear-gradient(to right, rgba(86, 171, 47, 1), rgba(86, 171, 47, .7));\r\n    margin-bottom: 50px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n#logout-btn{\r\n    right: 40px;\r\n}   \r\n}\r\n\r\n#logout-btn {\r\n    position: absolute;\r\n    right: 58px;\r\n    top: 46px;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.welcome-title{\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    line-height: 30px;\r\n    padding: 0 10px;\r\n    background : #17a017;\r\n    border: 1px solid palegreen;\r\n    font-family: verdana;\r\n}\r\n\r\n.vertical-line{\r\n    border-right: 1px solid white;\r\n    margin-right: 5px;\r\n    margin-left: 1px;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\r\n<div style=\"text-align:center\">\r\n\r\n    <h1 class=\"header-class\">\r\n      {{title}}\r\n    </h1>\r\n    <!-- <a class=\"nav-link\" style=\"cursor:pointer;position: absolute;right: 58px;top: 60px;color: white;\" \r\n    *ngIf=\"_loginService.loggedIn()\" (click)=\"_loginService.logoutUser()\">\r\n      <span class=\"glyphicon glyphicon-log-out\"></span>\r\n      Logout\r\n    </a> -->\r\n\r\n    <div id=\"logout-btn\">\r\n      <div class=\"welcome-title\"\r\n        *ngIf=\"_loginService.loggedIn()\" > Howdy, {{ appStateService.userName }}</div>\r\n      &nbsp;\r\n      <span *ngIf=\"_loginService.loggedIn()\" class=\"vertical-line\"></span>\r\n      <button type=\"button\" class=\"btn btn-default btn-sm\" style=\"border-radius: 19px;\"\r\n    *ngIf=\"_loginService.loggedIn()\" (click)=\"_loginService.logoutUser()\">\r\n        <span class=\"glyphicon glyphicon-log-out\"></span> Log out\r\n    </button>\r\n  </div>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_state_service_1 = __webpack_require__("../../../../../src/app/services/app.state.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_loginService, appStateService) {
        this._loginService = _loginService;
        this.appStateService = appStateService;
        this.title = 'Awesome Bucketlist App';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, app_state_service_1.AppStateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var http_2 = __webpack_require__("../../../common/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_routing_module_2 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var list_service_1 = __webpack_require__("../../../../../src/app/services/list.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var registration_service_1 = __webpack_require__("../../../../../src/app/services/registration.service.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/auth.guard.ts");
var login_guard_1 = __webpack_require__("../../../../../src/app/login.guard.ts");
var token_interceptor_service_1 = __webpack_require__("../../../../../src/app/token-interceptor.service.ts");
var app_state_service_1 = __webpack_require__("../../../../../src/app/services/app.state.service.ts");
var ngx_cookie_service_1 = __webpack_require__("../../../../../../node_modules/ngx-cookie-service/index.js");
// import { ConfirmEqualValidatorDirective } from './directives/validation/confirm-equal-validator.directive';
//import { HomeComponent } from './home/home.component';
// import { AddListComponent } from './add-list/add-list.component';
// import { ViewListComponent } from './view-list/view-list.component';
// import { LoginComponent } from './login/login.component';
// import { RegistrationComponent } from './registration/registration.component';
// import { NavigationTabComponent } from './navigation-tab/navigation-tab.component';
// import { ViewOthersListComponent } from './view-others-list/view-others-list.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //Components are added here
            declarations: [
                app_component_1.AppComponent,
                app_routing_module_2.routingComponents,
            ],
            //All the modules are declared as imports
            imports: [
                platform_browser_1.BrowserModule,
                http_2.HttpClientModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            //All the services go here.
            providers: [list_service_1.ListService, login_service_1.LoginService, registration_service_1.RegistrationService,
                auth_guard_1.AuthGuard, login_guard_1.LoginGuard, app_state_service_1.AppStateService, ngx_cookie_service_1.CookieService,
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_service_1.TokenInterceptorService,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(_logService, _router) {
        this._logService = _logService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._logService.loggedIn()) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            this._router.navigate(['/home']);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "../../../../../src/app/directives/validation/confirm-equal-validator.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
    var ConfirmEqualValidatorDirective_1;
}());
exports.ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n  <app-login> </app-login>\r\n  <app-registration> </app-registration>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/login.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var LoginGuard = /** @class */ (function () {
    function LoginGuard(_logService, _router) {
        this._logService = _logService;
        this._router = _router;
    }
    LoginGuard.prototype.canActivate = function () {
        if (!this._logService.loggedIn()) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            this._router.navigate(['/bucketlist']);
            return false;
        }
    };
    LoginGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.Router])
    ], LoginGuard);
    return LoginGuard;
}());
exports.LoginGuard = LoginGuard;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-5 col-sm-offset-1\" style=\"padding: 3%;\">\r\n  <h3>Login</h3>\r\n<p class=\"text-muted left-alignment\">\r\n  Please fill out the form below to login to your account.\r\n</p>\r\n<div class=\"form-white\">\r\n    <form (ngSubmit)=\"login()\" ngNativeValidate #form=\"ngForm\">\r\n      <div class=\"form-group left-alignment\">\r\n        <label for=\"email\" class=\"float-left\"><span class=\"asterix\">*</span>Username</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newLogin.username\" name=\"username\" placeholder=\"Enter username\" #username=\"ngModel\" required>\r\n        <span class=\"help-block error-text\"\r\n        *ngIf=\"username.touched && username.errors?.required\">\r\n        Username is required\r\n      </span>\r\n      </div>\r\n\r\n      <div class=\"form-group left-alignment\">\r\n        <label for=\"password\"><span class=\"asterix\">*</span>Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newLogin.password\" name=\"password\" placeholder=\"Password\" #password=\"ngModel\" required>\r\n        <span class=\"help-block error-text\"\r\n        *ngIf=\"password.touched && password.errors?.required\">\r\n        Password is required\r\n      </span>\r\n      </div>\r\n\r\n      <div class=\"checkbox\">\r\n      </div>\r\n\r\n      <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-block btn-color btn-xxl btn-success\">Login</button>\r\n    </form>\r\n\r\n    <br>\r\n    <div *ngIf=\"incorrectPwd\" id=\"incorrect-password\" class=\"asterix fontsize\">\r\n      <p>Incorrect Username or Password!</p>\r\n    </div>\r\n\r\n    <div *ngIf=\"usernameNotExists\" class=\"asterix fontsize hidden\">\r\n      <p>Username does not exists</p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<!-- Sign Up form -->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
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
        var response = this.loginServ.login(this.newLogin)
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.router.navigate(['bucketlist']);
        }, function (err) {
            console.log(err);
            _this.incorrectPwd = true;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/navigation-tab/navigation-tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-tabs>li>a{\r\n    color: #56ab2f;\r\n}\r\n.nav-tabs>li.active>a{\r\n    /* background-color: #5cb85c; */\r\n    color: #56ab2f;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation-tab/navigation-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul class=\"nav nav-pills\">\r\n    <li class=\"active\"><a href=\"#\">My List</a></li>\r\n    <li><a href=\"#\">View others list</a></li>\r\n\r\n  </ul> -->\r\n  <div>\r\n  <ul class=\"nav nav-tabs\">\r\n      <li class=\"nav-item\" class=\"active\"><a class=\"nav-link active\" data-toggle=\"pill\" href=\"#myList\">My List</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"pill\" href=\"#othersList\">Others list</a></li>\r\n    </ul>\r\n\r\n    <div class=\"tab-content\">\r\n      <div id=\"myList\" class=\"container tab-pane active\">\r\n        <app-view-list #viewList></app-view-list>\r\n      </div>\r\n      <div id=\"othersList\" class=\"container tab-pane fade\">\r\n        <app-view-others-list></app-view-others-list>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation-tab/navigation-tab.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavigationTabComponent = /** @class */ (function () {
    function NavigationTabComponent() {
    }
    NavigationTabComponent.prototype.ngOnInit = function () {
    };
    NavigationTabComponent = __decorate([
        core_1.Component({
            selector: 'app-navigation-tab',
            template: __webpack_require__("../../../../../src/app/navigation-tab/navigation-tab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation-tab/navigation-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationTabComponent);
    return NavigationTabComponent;
}());
exports.NavigationTabComponent = NavigationTabComponent;


/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-5\" style=\"padding: 3%; border-left: 2px solid green;\">\r\n  <h3 class=\"text-right-xs\">Register</h3>\r\n<p class=\"text-muted text-right-xs left-alignment\">\r\n  Please fill out the form below to create a new account.\r\n</p>\r\n<div class=\"form-white\">\r\n  <form (ngSubmit)=\"registration()\" ngNativeValidate #form=\"ngForm\">\r\n    <div class=\"form-group left-alignment\">\r\n      <label for=\"username\"><span class=\"asterix\">*</span>Username</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newRegistration.username\" name=\"username\" placeholder=\"Enter username\" #username=\"ngModel\" required>\r\n    <span class=\"help-block error-text\"\r\n        *ngIf=\"username.touched && username.errors?.required\">\r\n        Username is required\r\n      </span>\r\n    </div>\r\n    <div ngModelGroup=\"passwordGroup\"\r\n     [class.has-error]=\"password3.touched && password3.invalid && !password3.errors?.required\">\r\n    <div class=\"form-group left-alignment\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n      <label for=\"password2\"><span class=\"asterix\">*</span>Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newRegistration.password2\" name=\"password2\" id=\"password2\" (input)=\"password3.control.updateValueAndValidity()\" placeholder=\"Password\" #password2=\"ngModel\" minlength=\"8\" required>\r\n      <span class=\"help-block error-text\"\r\n        *ngIf=\"password2.touched && password2.errors?.required\">\r\n        Password is required\r\n      </span>\r\n       <span class=\"help-block error-text\" *ngIf=\"password2.touched && password2.errors?.minlength\">\r\n          Password must be at least 8 characters long.\r\n        </span>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n      <label for=\"password3\"><span class=\"asterix\">*</span>Confirm password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newRegistration.password3\" name=\"password3\" id=\"password3\" appConfirmEqualValidator=\"password2\"  placeholder=\"Confirm Password\" #password3=\"ngModel\" required>\r\n      <span class=\"help-block error-text\"\r\n        *ngIf=\"password3.touched && password3.errors?.required\">\r\n        Confirm Password is required\r\n      </span>\r\n      <span class=\"help-block error-text\"\r\n        *ngIf=\"password3.touched && password3.errors?.notEqual && !password3.errors?.required\">\r\n        Password does not match\r\n      </span>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n    <div class=\"checkbox\">\r\n      </div>\r\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-block btn-color btn-xxl btn-success\">Create an account</button>\r\n  </form>\r\n  <br>\r\n  <div *ngIf=\"userAlreadyExists\" id=\"already-exists\" >\r\n    <p class=\"asterix fontsize\">Username already exists! Try with different Username</p>\r\n  </div>\r\n  <div *ngIf=\"error\" id=\"error\" >\r\n    <p class=\"asterix fontsize\">Username already exists! Try with different Username</p>\r\n  </div>\r\n  <div *ngIf=\"userAdded\" id=\"user-created\">\r\n      <p class=\"success\">User added successfully!</p>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var registration_service_1 = __webpack_require__("../../../../../src/app/services/registration.service.ts");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(registrationServ) {
        this.registrationServ = registrationServ;
        this.userAdded = false;
        this.userAlreadyExists = false;
        this.error = false;
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
        var _this = this;
        var response = this.registrationServ.registration(this.newRegistration)
            .subscribe(function (res) {
            console.log("registration response " + JSON.stringify(res));
            if (res.message === 'User Id Already Exist') {
                _this.userAlreadyExists = true;
            }
            else {
                _this.userAlreadyExists = false;
                _this.error = false;
                _this.userAdded = true;
            }
        }, function (err) {
            console.log(err);
            _this.error = true;
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [registration_service_1.RegistrationService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/services/app.state.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ngx_cookie_service_1 = __webpack_require__("../../../../../../node_modules/ngx-cookie-service/index.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var list_service_1 = __webpack_require__("../../../../../src/app/services/list.service.ts");
var AppStateService = /** @class */ (function () {
    function AppStateService(cookieService, listServ) {
        this.cookieService = cookieService;
        this.listServ = listServ;
        this.userList = new BehaviorSubject_1.BehaviorSubject([]);
        this.currentUserList = this.userList.asObservable();
    }
    Object.defineProperty(AppStateService.prototype, "userName", {
        get: function () {
            return this.cookieService.get('BKT_USER');
        },
        enumerable: true,
        configurable: true
    });
    AppStateService.prototype.updateCurrentUserList = function (updatedList) {
        this.userList.next(updatedList);
        console.log('Updated injectable list with ' + JSON.stringify(updatedList));
    };
    AppStateService.prototype.refreshUserList = function () {
        var _this = this;
        this.listServ.getAllLists().subscribe(function (response) {
            _this.userList.next(response);
        });
    };
    AppStateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngx_cookie_service_1.CookieService, list_service_1.ListService])
    ], AppStateService);
    return AppStateService;
}());
exports.AppStateService = AppStateService;


/***/ }),

/***/ "../../../../../src/app/services/list.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var ListService = /** @class */ (function () {
    function ListService(http) {
        this.http = http;
        this.serverApi = 'http://10.8.6.43:3000';
    }
    ListService.prototype.getAllLists = function () {
        var URI = this.serverApi + "/api/myBucketList";
        return this.http.get(URI, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.getAllOwners = function () {
        var URI = this.serverApi + "/api/allOwners";
        return this.http.get(URI, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.getAllOthersLists = function () {
        var URI = this.serverApi + "/api/othersBucketList";
        return this.http.get(URI, { withCredentials: true })
            .map(function (res) { return res.json(); });
        // .map(res => <List[]> res.list);
        // let URI = `${this.serverApi}/bucketlist/`;
        //   return this.http.get(URI)
        // return this.http.get('./assets/data/data.json')
        //   .map(res => res.json())
        //   .map(res =>
        //     <List[]>res.list
        //   );
    };
    ListService.prototype.deleteList = function (listId) {
        console.log("inside delete function " + listId);
        var URI = this.serverApi + "/api/deleteTask/" + listId;
        var headers = new http_1.Headers;
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.addList = function (list) {
        var URI = this.serverApi + "/api/addTask/";
        var headers = new http_1.Headers;
        var body = JSON.stringify({ title: list.title, description: list.description, priority: list.priority });
        console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    ListService.prototype.claimTask = function (list) {
        var URL = this.serverApi + "/api/claimTask";
        var headers = new http_1.Headers;
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({ id: list.id, oldOwner: list.owner });
        return this.http.post(URL, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;


/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var LoginService = /** @class */ (function () {
    function LoginService(http, _router) {
        this.http = http;
        this._router = _router;
        this.serverApi = 'http://10.8.6.43:3000';
    }
    LoginService.prototype.login = function (login) {
        var URI = this.serverApi + "/api/login";
        var headers = new http_1.Headers;
        var body = JSON.stringify({ username: login.username, password: login.password });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    LoginService.prototype.logoutUser = function () {
        var _this = this;
        var URI = this.serverApi + "/api/logout";
        this.http.get(URI, {
            withCredentials: true
        })
            .map(function (res) { return res.json; })
            .subscribe(function (res) {
            localStorage.removeItem('token');
            _this._router.navigate(['/home']);
        }, function (err) {
            console.log('Unable to logout user');
        });
    };
    LoginService.prototype.getUsername = function () {
        var URI = this.serverApi + "/api/getUsername";
        this.http.get(URI, {
            withCredentials: true
        })
            .map(function (res) { return res.json; });
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "../../../../../src/app/services/registration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
        this.serverApi = 'http://10.8.6.43:3000';
    }
    RegistrationService.prototype.registration = function (registration) {
        var URI = this.serverApi + "/api/registration";
        var headers = new http_1.Headers;
        var body = JSON.stringify({ username: registration.username, password: registration.password2 });
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RegistrationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RegistrationService);
    return RegistrationService;
}());
exports.RegistrationService = RegistrationService;


/***/ }),

/***/ "../../../../../src/app/token-interceptor.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var loginService = this.injector.get(login_service_1.LoginService);
        var tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + loginService.getToken())
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());
exports.TokenInterceptorService = TokenInterceptorService;


/***/ }),

/***/ "../../../../../src/app/view-list/view-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-danger {\r\n\tcolor: #eeeeee;\r\n}\r\n\r\n.align-center {\r\n\ttext-align: center;\r\n}\r\n\r\n.custom-modal{\r\n\topacity: 1;\r\n\ttop : 30px !important;\r\n}\r\n\r\n/* .model-content .custom-modal{\r\n\ttop : 30px !important;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-list/view-list.component.html":
/***/ (function(module, exports) {

module.exports = "  <br>\r\n  <app-add-list (addList)=\"onAddList($event)\"> </app-add-list>\r\n  <br>\r\n  <!-- Table starts here -->\r\n  <h4 class= \"custom-title\">My List</h4>\r\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue table-striped\">\r\n      <thead>\r\n        <tr class=\"align-center\">\r\n          <th class=\"align-center\">Priority Level</th>\r\n          <th class=\"align-center\">Title</th>\r\n          <th class=\"align-center\"> Description</th>\r\n          <th class=\"align-center\"> Assign </th>\r\n          <th class=\"align-center\"> Delete </th>\r\n          \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      \t<tr *ngFor=\"let list of lists\">\r\n      \t  <td>{{list.priority}}</td>  \r\n          <td>{{list.title}}</td>\r\n          <td>{{list.description}}</td>\r\n          <td> <button type=\"button\" class=\"btn btn-success\" (click)=\"assign(content)\">Assign</button></td>  \r\n          <td> <button type=\"button\" class=\"btn btn-danger\"  (click)=\"deleteList(list); $event.stopPropagation();\">Delete</button></td>\r\n        </tr> \r\n      </tbody>\r\n   </table>\r\n\r\n   <ng-template class=\"custom-modal\" #content let-c=\"close\" let-d=\"dismiss\">\r\n     <div class=\"custom-modal\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Modal title</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n     <div class=\"form-group\">\r\n      <select >\r\n        <option *ngFor=\"let owner of ownerList\" value={owner}>{{owner}}</option>          \r\n        </select>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n   <hr>\r\n\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/view-list/view-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var list_service_1 = __webpack_require__("../../../../../src/app/services/list.service.ts");
var app_state_service_1 = __webpack_require__("../../../../../src/app/services/app.state.service.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var ViewListComponent = /** @class */ (function () {
    function ViewListComponent(listServ, appStateService, modalService) {
        this.listServ = listServ;
        this.appStateService = appStateService;
        this.modalService = modalService;
        //lists propoerty which is an array of List type
        this.lists = [];
        this.initialLoadList = [];
        this.ownerList = [];
    }
    ViewListComponent.prototype.ngOnInit = function () {
        //Load all list on init
        this.loadLists();
        this.getOwners();
    };
    ViewListComponent.prototype.loadLists = function () {
        var _this = this;
        //Get all lists from server and update the lists property
        this.listServ.getAllLists().subscribe(function (response) {
            _this.initialLoadList = response;
            _this.appStateService.updateCurrentUserList(_this.initialLoadList);
        });
        this.appStateService.currentUserList.subscribe(function (userList) { return _this.lists = userList; });
    };
    //The deleted list is being filtered out using the .filter method
    ViewListComponent.prototype.deleteList = function (list) {
        var _this = this;
        this.listServ.deleteList(list.id).subscribe(function (response) {
            if (response.message === 'Task Deleted Successfully') {
                _this.lists = _this.lists.filter(function (lists) { return lists !== list; });
            }
        });
    };
    //onAddList will be invoked when the child component emits an event
    ViewListComponent.prototype.onAddList = function (newList) {
        this.lists = this.lists.concat(newList);
    };
    ViewListComponent.prototype.assign = function (content) {
        var _this = this;
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ViewListComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ViewListComponent.prototype.getOwners = function () {
        var _this = this;
        this.listServ.getAllOwners().subscribe(function (response) {
            console.log("Owner list " + JSON.stringify(response));
            _this.ownerList = response;
        });
    };
    ViewListComponent = __decorate([
        core_1.Component({
            selector: 'app-view-list',
            template: __webpack_require__("../../../../../src/app/view-list/view-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-list/view-list.component.css")]
        }),
        __metadata("design:paramtypes", [list_service_1.ListService, app_state_service_1.AppStateService,
            ng_bootstrap_1.NgbModal])
    ], ViewListComponent);
    return ViewListComponent;
}());
exports.ViewListComponent = ViewListComponent;


/***/ }),

/***/ "../../../../../src/app/view-others-list/view-others-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-danger {\r\n\tcolor: #eeeeee;\r\n}\r\n\r\n.align-center {\r\n\ttext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-others-list/view-others-list.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- <app-navigation-tab></app-navigation-tab> -->\r\n  <br>\r\n  <!-- Table starts here -->\r\n  <h4 class= \"custom-title\">Others List</h4>\r\n  <table id=\"table\" class=\"table table-hover table-mc-light-blue\">\r\n      <thead>\r\n        <tr class=\"align-center\">\r\n          <th class=\"align-center\">Priority Level</th>\r\n          <th class=\"align-center\">Title</th>\r\n          <th class=\"align-center\"> Description</th>\r\n          <th class=\"align-center\"> Owner</th>\r\n          <th class=\"align-center\"> Claim </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      \t<tr *ngFor=\"let list of lists\">\r\n      \t  <td>{{list.priority}}</td>\r\n          <td>{{list.title}}</td>\r\n          <td>{{list.description}}</td>\r\n          <td>{{list.owner}}</td>\r\n          <td> <button type=\"button\" class=\"btn btn-success\" (click)=\"claimList(list); $event.stopPropagation();\">Claim</button></td>  \r\n        </tr>\r\n      </tbody>\r\n   </table>\r\n\r\n\r\n <!-- <app-add-list (addList)=\"onAddList($event)\"> </app-add-list> -->"

/***/ }),

/***/ "../../../../../src/app/view-others-list/view-others-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var list_service_1 = __webpack_require__("../../../../../src/app/services/list.service.ts");
var app_state_service_1 = __webpack_require__("../../../../../src/app/services/app.state.service.ts");
var ViewOthersListComponent = /** @class */ (function () {
    function ViewOthersListComponent(listServ, appStateService) {
        this.listServ = listServ;
        this.appStateService = appStateService;
        this.lists = [];
    }
    ViewOthersListComponent.prototype.ngOnInit = function () {
        //Load all list on init 
        this.loadLists();
    };
    ViewOthersListComponent.prototype.loadLists = function () {
        var _this = this;
        //Get all lists from server and update the lists property
        this.listServ.getAllOthersLists().subscribe(function (response) {
            return _this.lists = response;
        });
    };
    ViewOthersListComponent.prototype.claimList = function (list) {
        var _this = this;
        this.listServ.claimTask(list)
            .subscribe(function (res) {
            if (res.message === 'Task Owner Updated Successfully') {
                _this.loadLists();
                _this.appStateService.refreshUserList();
            }
        });
    };
    ViewOthersListComponent = __decorate([
        core_1.Component({
            selector: 'app-view-others-list',
            template: __webpack_require__("../../../../../src/app/view-others-list/view-others-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-others-list/view-others-list.component.css")]
        }),
        __metadata("design:paramtypes", [list_service_1.ListService, app_state_service_1.AppStateService])
    ], ViewOthersListComponent);
    return ViewOthersListComponent;
}());
exports.ViewOthersListComponent = ViewOthersListComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map