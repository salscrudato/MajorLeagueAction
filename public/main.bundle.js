webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/users/allProfiles', {headers: headers})
        return this.http.get('users/allProfiles', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/user.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BetService = (function () {
    function BetService(http) {
        this.http = http;
    }
    BetService.prototype.placeBet = function (bet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/bets/placeBet', bet, {headers: headers})
        return this.http.post('bets/placeBet', bet, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.getPendingBets = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/bets/getPendings', user, {headers: headers})
        return this.http.post('bets/getPendings', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], BetService);
    return BetService;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/bets.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.addBets = function (action, type, profile) {
        this.bets = action;
        this.type = type;
        this.profile = profile;
        console.log(type);
    };
    DataService.prototype.getBets = function () {
        return this.bets;
    };
    DataService.prototype.getProfile = function () {
        return this.profile;
    };
    DataService.prototype.getBetType = function () {
        return this.type;
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/data.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OddsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OddsService = (function () {
    function OddsService(http) {
        this.http = http;
    }
    OddsService.prototype.getMLBOdds = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/odds/mlb')
        return this.http.get('odds/mlb')
            .map(function (res) { return res.json(); });
    };
    OddsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], OddsService);
    return OddsService;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/odds.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/validate.service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(516);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/main.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.environment = 'Prod';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/users/register', user, {headers: headers})
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/users/profile', {headers: headers})
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        //console.log(tokenNotExpired('id_token'));
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/auth.service.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(697),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_odds_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_bets_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_app_guards__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_profile_profile_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_menu_menu_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_start_start_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_confirm_confirm_component__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_app_guards__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_19__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_app_guards__["a" /* AuthGuard */]] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_20__components_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'start', component: __WEBPACK_IMPORTED_MODULE_21__components_start_start_component__["a" /* StartComponent */] },
    { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_22__components_confirm_confirm_component__["a" /* ConfirmComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_confirm_confirm_component__["a" /* ConfirmComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__services_odds_service__["a" /* OddsService */], __WEBPACK_IMPORTED_MODULE_12__guards_app_guards__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_10__services_bets_service__["a" /* BetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bets_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmComponent = (function () {
    function ConfirmComponent(dataService, betService, flashMessage, router) {
        this.dataService = dataService;
        this.betService = betService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.betAmount = 0;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        this.bets = this.dataService.getBets();
        this.oddsId = this.bets.id;
        this.username = this.dataService.getProfile().user._id;
        var betType = this.dataService.getBetType();
        this.setBetDetails(betType);
    };
    ConfirmComponent.prototype.setBetDetails = function (betType) {
        var awayTeam = this.bets.awayTeam;
        var awayTeamML = this.addPlus(this.bets.awayTeamML);
        var awayTeamRL = this.addPlus(this.bets.awayTeamRL);
        var awayTeamRLOdds = this.addPlus(this.bets.awayTeamRLOdds);
        var homeTeam = this.bets.homeTeam;
        var homeTeamML = this.addPlus(this.bets.homeTeamML);
        var homeTeamRL = this.addPlus(this.bets.homeTeamRL);
        var homeTeamRLOdds = this.addPlus(this.bets.homeTeamRLOdds);
        var totalNumber = this.bets.totalNumber;
        switch (betType) {
            case 'awayTeamRL':
                this.description = awayTeam + " Run Line " + awayTeamRL + " " + awayTeamRLOdds;
                this.odds = parseInt(awayTeamRLOdds);
                break;
            case 'homeTeamRL':
                this.description = homeTeam + " Run Line " + homeTeamRL + " " + homeTeamRLOdds;
                this.odds = parseInt(homeTeamRLOdds);
                break;
            case 'awayTeamML':
                this.description = awayTeam + " Money Line " + awayTeamML;
                this.odds = parseInt(awayTeamML);
                break;
            case 'homeTeamML':
                this.description = homeTeam + " Money Line " + homeTeamML;
                this.odds = parseInt(homeTeamML);
                break;
            case 'over':
                this.description = awayTeam + " @ " + homeTeam + " Over " + totalNumber;
                this.odds = 100;
                break;
            default:
                break;
        }
    };
    ConfirmComponent.prototype.addPlus = function (odds) {
        if (odds > 0) {
            return "+" + odds;
        }
        else {
            return odds;
        }
    };
    ConfirmComponent.prototype.placeBet = function () {
        var _this = this;
        var winAmountCalc;
        if (this.odds > 0) {
            winAmountCalc = (this.odds / 100) * this.betAmount;
        }
        else {
            winAmountCalc = this.betAmount / (this.odds * -1) * 100;
        }
        var bet = {
            username: this.username,
            oddsId: this.oddsId,
            description: this.description,
            odds: this.odds,
            betAmount: this.betAmount,
            winAmount: winAmountCalc
        };
        this.betService.placeBet(bet).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
                _this.router.navigate(['menu']);
            }
        });
    };
    ConfirmComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(698),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bets_service__["a" /* BetService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ConfirmComponent);
    return ConfirmComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/confirm.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bets_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(userService, authService, betService) {
        var _this = this;
        this.userService = userService;
        this.authService = authService;
        this.betService = betService;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.users = data;
        });
        this.authService.getProfile().subscribe(function (data) {
            _this.betService.getPendingBets(data).subscribe(function (bets) {
                _this.pendingBets = bets;
                console.log(_this.pendingBets);
            });
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(699),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_bets_service__["a" /* BetService */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(156);
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
    function HomeComponent(authService, userService) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.users = data;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.test = function (x) {
        console.log(x.name);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(700),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/home.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(701),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/login.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odds_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuComponent = (function () {
    function MenuComponent(userService, oddsService, authService, router, dataService, flashMessage) {
        this.userService = userService;
        this.oddsService = oddsService;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.flashMessage = flashMessage;
        this.actions = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.getOdds();
    };
    MenuComponent.prototype.getOdds = function () {
        var _this = this;
        this.oddsService.getMLBOdds().subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.actions.push(data[i]);
            }
        });
    };
    MenuComponent.prototype.getUserId = function () {
    };
    MenuComponent.prototype.placeBet = function (action, type) {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addBets(action, type, profile);
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            console.log(err._body);
            return false;
        });
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(702),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _f) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/menu.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(703),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(704),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please enter valid email.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(705),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/register.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(706),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], StartComponent);
    return StartComponent;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/start.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/app.guards.js.map

/***/ }),

/***/ 527:
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
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/environment.js.map

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ".alert-fixed {\n    position:fixed;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    z-index:9999;\n    border-radius:0px\n}\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<app-navbar class=\"fixed-top\"></app-navbar>\n<!-- <div class=\"container pl-0 pr-0\"> -->\n\t<flash-messages class=\"alert-fixed\"></flash-messages>\n\t<router-outlet></router-outlet>\n<!-- </div> -->\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n  <h2 class=\"page-header pt-2\">Place Bet</h2>\n  <p>Home Team: {{bets.homeTeam}}</p>\n  <p>Away Team: {{bets.awayTeam}}</p>\n  <form (submit)=\"placeBet()\">\n    <div class=\"form-group\">\n      <label>Bet Description: </label>\n      <p>{{description}}</p>\n    </div>\n    <div class=\"row p-0 m-0\">\n    <div class=\"form-group\">\n      <label for=\"amount\">Bet Amount</label>\n      <input type=\"text\" style=\"width:200px\" [(ngModel)]=\"betAmount\" name=\"betAmount\" class=\"form-control mr-2\" id=\"amount\">\n    </div>\n    <div class=\"form-group row ml-0\">\n      <label class=\"mr-2\">Win Amount:  </label>\n      <p class=\"m-0\" *ngIf=\"odds>0\">{{betAmount * odds/100}}</p>\n      <p class=\"m-0\" *ngIf=\"odds<0\">{{betAmount / (odds * -1) * 100}}</p>\n    </div>\n  </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Place Bet\">\n  </form>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n\t<h2 class=\"pt-2\">Pending Bets</h2>\n\t\t<p *ngFor=\"let pendingBet of pendingBets\">\n\t\t\t{{pendingBet.description}} Risking {{pendingBet.betAmount}} to win {{pendingBet.winAmount}}\n\t\t</p>\n</div>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n\t<div class =\"jumbotron text-center\">\n\t\t<h1>Sal's Multi-Use MEAN Site.</h1>\n\t\t<p class=\"lead\">Create an Account or Login to place bets!</p>\n\t\t<div>\n\t\t\t<button type=\"button\" [routerLink]=\"['/register']\" class=\"btn btn-primary\">Register</button>\n\t\t\t<button type=\"button\" [routerLink]=\"['/login']\" class=\"btn btn-secondary\">Login</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<h3>Safe and Secure Betting</h3>\n\t\t\t<p>JWT Authentication for login and access control</p>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<h3>Peer to Peer</h3>\n\t\t\t<p>Bets are made P2P and a very small fee is taken.</p>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<h3>TBD</h3>\n\t\t\t<p>TBD</p>\n\t\t</div>\n\t</div>\n\n\t<div>\n\t\t<h3>Available Usernames</h3>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let user of users\" (click)=\"test(user)\">\n\t\t\t\t{{ user.username }}\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n<div class=\"mt-2\">\n<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n<div class=\"row\" align=\"center\">\n  <div *ngFor=\"let action of actions\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n    <div class=\"row pl-0 pr-0\">\n      <div class=\"col\" align=\"left\">\n        <p class=\"m-0 pl-3\">{{action.matchDate}}</p>\n      </div>\n      <div class=\"col\" align=\"right\">\n        <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n      </div>\n    </div>\n    <div class =\"row\" style=\"height:100px\">\n      <div class =\"col float-left\">\n        <img class=\"w-75 h-100\" src=\"{{action.awayImagePath}}\" alt=\"Card image cap\">\n      </div>\n      <h2 class=\"mt-4\">@</h2>\n      <div class =\"col float-right\">\n        <img class=\"w-75 h-100\" src=\"{{action.homeImagePath}}\" alt=\"Card image cap\">\n      </div>\n    </div>\n    <div class=\"card-header border-top pl-3 pr-3\">\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{action.awayTeam}}</div>\n        <div class=\"row border-bottom pb-1 pt-1\">\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-left\"(click)=\"placeBet(action,'awayTeamML')\">{{action.awayTeamML}}</a>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-primary btn-sm text-light\"(click)=\"placeBet(action,'awayTeamRL')\">{{action.awayTeamRL}} {{action.awayTeamRLOdds}}</a>\n          </div>\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-right\"(click)=\"placeBet(action,'over')\">u{{action.totalNumber}}</a>\n          </div>\n        </div>\n      </div>\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{action.homeTeam}}</div>\n        <div class=\"row pb-1 pt-1\">\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-left\"(click)=\"placeBet(action,'homeTeamML')\">{{action.homeTeamML}}</a>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-primary btn-sm text-light\"(click)=\"placeBet(action,'homeTeamRL')\">{{action.homeTeamRL}} {{action.homeTeamRLOdds}}</a>\n          </div>\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-right\"(click)=\"placeBet(action,'under')\">o{{action.totalNumber}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">MLBets</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" [routerLink]=\"['/menu']\">MLB</a></li>\n    </ul>\n    <ul class=\"navbar-nav mr-right\">\n      <li><a class=\"nav-link collapse\" [routerLink]=\"['/profile']\" *ngIf=\"authService.loggedIn()\">Profile</a></li>\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" [routerLink]=\"['/dashboard']\" *ngIf=\"authService.loggedIn()\">Dashboard</a></li>\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" [routerLink]=\"['/login']\" *ngIf=\"!authService.loggedIn()\">Login</a></li>\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" [routerLink]=\"['/register']\" *ngIf=\"!authService.loggedIn()\">Register</a></li>\n      <li><a class=\"nav-link\" (click)=\"onLogoutClick()\" *ngIf=\"authService.loggedIn()\" href=\"#\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">Profile</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\n    </ul>\n</div>\n</div>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 pt-5\">\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div class=\"row\">\n  <input type=\"text\" class=\"form-control\">\n  <input type=\"text\" class=\"form-control\">\n</div>\n\n</div>\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[744]);
//# sourceMappingURL=main.bundle.map