webpackJsonp([1,4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
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
    OddsService.prototype.getOdds = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/odds/all')
        return this.http.get('odds/all')
            .map(function (res) { return res.json(); });
    };
    OddsService.prototype.getLiveEvents = function (sportId, leagueId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/odds/events?sportId=' + sportId + '&leagueId=' + leagueId)
        return this.http.get('odds/events?sportId=' + sportId + '&leagueId=' + leagueId)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    OddsService.prototype.getLiveEventOdds = function (eventId, homeTeam, homeTeamImage, awayTeam, awayTeamImage) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/odds/eventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + "&awayTeamImage=" + awayTeamImage + '&homeTeamImage=' + homeTeamImage)
        return this.http.get('odds/eventOdds?eventId=' + eventId + '&homeTeam=' + homeTeam + '&awayTeam=' + awayTeam + "&awayTeamImage=" + awayTeamImage + '&homeTeamImage=' + homeTeamImage)
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(169);
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
        this.urlPrefix = '';
    }
    BetService.prototype.placeBet = function (bet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/bets/placeBet', bet, {headers: headers})
        return this.http.post('bets/placeBet', bet, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.closeBet = function (betId, result) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var bet = {
            betId: betId,
            status: result
        };
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/bets/closePending', bet, {headers: headers})
        return this.http.post('bets/closePending', bet, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.getBets = function (profile, status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var userId = profile.user._id;
        var url = 'bets/getBets?userId=' + userId + '&status=' + status;
        var url2 = 'http://localhost:8080/bets/getBets?userId=' + userId + '&status=' + status;
        headers.append('Content-Type', 'application/json');
        //return this.http.get(url2, {headers: headers})
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BetService.prototype.getAllPendings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.get('http://localhost:8080/bets/getAllPendings', {headers: headers})
        return this.http.get('bets/getAllPendings', { headers: headers })
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(169);
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
    UserService.prototype.updateBalance = function (updatedAmount) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:8080/users/updateBalance', updatedAmount, {headers: headers})
        return this.http.post('users/updateBalance', updatedAmount, { headers: headers })
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

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(536);
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
        this.urlPrefix = '';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.urlPrefix + 'users/register';
        //return this.http.post('http://localhost:8080/users/register', user, {headers: headers})
        return this.http.post(url, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var url = this.urlPrefix + 'users/authenticate';
        //return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
        return this.http.post(url, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var url = this.urlPrefix + 'users/profile';
        //return this.http.get('http://localhost:8080/users/profile', {headers: headers})
        return this.http.get(url, { headers: headers })
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
        if (user.name == undefined || user.username == undefined || user.password == undefined || user.credit == undefined) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(516);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/main.js.map

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
            template: __webpack_require__(704),
            styles: [__webpack_require__(691)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_odds_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_bets_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_app_guards__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_start_start_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_confirm_confirm_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_live_live_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_admin_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_parlay_parlay_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_straight_straight_component__ = __webpack_require__(528);
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
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_app_guards__["a" /* AuthGuard */]] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'start', component: __WEBPACK_IMPORTED_MODULE_20__components_start_start_component__["a" /* StartComponent */] },
    { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_21__components_confirm_confirm_component__["a" /* ConfirmComponent */] },
    { path: 'live', component: __WEBPACK_IMPORTED_MODULE_22__components_live_live_component__["a" /* LiveComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_23__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'parlay', component: __WEBPACK_IMPORTED_MODULE_24__components_parlay_parlay_component__["a" /* ParlayComponent */] },
    { path: 'straight', component: __WEBPACK_IMPORTED_MODULE_25__components_straight_straight_component__["a" /* StraightComponent */] }
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
                __WEBPACK_IMPORTED_MODULE_18__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_live_live_component__["a" /* LiveComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_parlay_parlay_component__["a" /* ParlayComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_straight_straight_component__["a" /* StraightComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bets_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(authService, router, betService, userService) {
        this.authService = authService;
        this.router = router;
        this.betService = betService;
        this.userService = userService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Gets current logged in user profile
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            return false;
        });
        this.getAllPendings();
    };
    AdminComponent.prototype.getAllPendings = function () {
        var _this = this;
        this.betService.getAllPendings().subscribe(function (pendings) {
            _this.allPendings = pendings;
        }, function (err) {
            return false;
        });
    };
    AdminComponent.prototype.closePendingBet = function (pendingBet, result) {
        var _this = this;
        var amount;
        if (result == 'win') {
            amount = pendingBet.winAmount;
        }
        else {
            amount = pendingBet.betAmount * -1;
        }
        var updatedAmount = {
            userId: pendingBet.userId,
            amount: amount
        };
        this.userService.updateBalance(updatedAmount).subscribe(function (data) {
            if (data.success) {
                _this.betService.closeBet(pendingBet._id, result).subscribe(function (data) {
                    _this.getAllPendings();
                    return true;
                }, function (err) {
                    console.log(err);
                    return false;
                });
            }
            else {
            }
        });
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(705),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _d) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/admin.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bets_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_bet__ = __webpack_require__(531);
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
        this.bets = [];
        this.betAmount = null;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        this.bets = this.dataService.getBet();
        this.betType = this.dataService.getBetType().toUpperCase();
        this.setBetDetailsAndOdds(this.bets);
        this.odds = this.calculateOdds(this.bets);
    };
    ConfirmComponent.prototype.clickPlaceBet = function () {
        var _this = this;
        var profile = this.dataService.getProfile();
        var winAmount = this.calcWinAmount(this.odds, this.betAmount);
        var confirmedBet = new __WEBPACK_IMPORTED_MODULE_5__classes_bet__["a" /* Bet */](profile, this.bets, 'jsonOdds', this.odds, this.betAmount, winAmount, this.betType);
        this.betService.placeBet(confirmedBet).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['profile']);
            }
        });
    };
    ConfirmComponent.prototype.setBetDetailsAndOdds = function (bets) {
        for (var i = 0; i < bets.length; i++) {
            bets[i] = this.setBetDescription(bets[i]);
        }
    };
    ConfirmComponent.prototype.setBetDescription = function (bet) {
        var awayTeam = bet.awayTeam;
        var homeTeam = bet.homeTeam;
        switch (bet.betType) {
            case 'awayTeamRL':
                var awayTeamRL = this.addPlus(bet.awayTeamRL);
                var awayTeamRLOdds = this.addPlus(bet.awayTeamRLOdds);
                bet.betDetails = awayTeam + " Run Line " + awayTeamRL + " " + awayTeamRLOdds;
                bet.odds = awayTeamRLOdds;
                break;
            case 'homeTeamRL':
                var homeTeamRL = this.addPlus(bet.homeTeamRL);
                var homeTeamRLOdds = this.addPlus(bet.homeTeamRLOdds);
                bet.betDetails = homeTeam + " Run Line " + homeTeamRL + " " + homeTeamRLOdds;
                bet.odds = homeTeamRLOdds;
                break;
            case 'awayTeamML':
                var awayTeamML = this.addPlus(bet.awayTeamML);
                bet.betDetails = awayTeam + " Money Line " + awayTeamML;
                bet.odds = awayTeamML;
                break;
            case 'homeTeamML':
                var homeTeamML = this.addPlus(bet.homeTeamML);
                bet.betDetails = homeTeam + " Money Line " + homeTeamML;
                bet.odds = homeTeamML;
                break;
            case 'over':
                bet.betDetails = awayTeam + " @ " + homeTeam + " Over " + bet.totalNumber;
                bet.odds = -110;
                break;
            case 'under':
                bet.betDetails = awayTeam + " @ " + homeTeam + " Under " + bet.totalNumber;
                bet.overUnderOdds = -100;
                bet.odds = -110;
                break;
            default:
                break;
        }
        return bet;
    };
    ConfirmComponent.prototype.placeBet = function (bet) {
        var _this = this;
        this.betService.placeBet(bet).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.router.navigate(['profile']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
                _this.router.navigate(['menu']);
            }
        });
    };
    ConfirmComponent.prototype.calcWinAmount = function (odds, betAmount) {
        if (odds > 0) {
            return this.round((odds / 100) * betAmount);
        }
        else {
            return this.round(betAmount / (odds * -1) * 100);
        }
    };
    ConfirmComponent.prototype.round = function (amount) {
        return Math.round(amount);
    };
    ConfirmComponent.prototype.addPlus = function (odd) {
        if (odd > 0) {
            return "+" + odd;
        }
        else {
            return odd;
        }
    };
    ConfirmComponent.prototype.calculateOdds = function (bets) {
        if (bets.length == 1) {
            return parseInt(bets[0].odds);
        }
        else {
            var oddsArray = [];
            for (var i = 0; i < bets.length; i++) {
                var tempOdds = parseInt(bets[i].odds);
                if (tempOdds > 0) {
                    oddsArray.push((100 + tempOdds) / 100);
                }
                else {
                    oddsArray.push((100 + (tempOdds * -1)) / (tempOdds * -1));
                }
            }
            return this.round((oddsArray.reduce(function (a, b) { return a * b; }) - 1) * 100);
        }
    };
    ConfirmComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(706),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bets_service__["a" /* BetService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ConfirmComponent);
    return ConfirmComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/confirm.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(159);
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
            template: __webpack_require__(707),
            styles: [__webpack_require__(694)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_odds_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LiveComponent = (function () {
    function LiveComponent(userService, oddsService, authService, router, dataService, flashMessage) {
        this.userService = userService;
        this.oddsService = oddsService;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.flashMessage = flashMessage;
        this.eventsArray = [];
        this.eventOddsArray = [];
    }
    LiveComponent.prototype.ngOnInit = function () {
        this.getLiveEvents('16', '225');
    };
    LiveComponent.prototype.getLiveEvents = function (sportId, leagueId) {
        var _this = this;
        this.oddsService.getLiveEvents(sportId, leagueId).then(function (events) {
            _this.eventsArray = events;
            _this.getLiveEventOdds(_this.eventsArray);
        }, function (error) {
            console.log(error);
        });
    };
    LiveComponent.prototype.getLiveEventOdds = function (events) {
        var _this = this;
        for (var i = 0; i < events.length; i++) {
            this.oddsService.getLiveEventOdds(events[i].id, events[i].homeTeam, events[i].homeTeamImage, events[i].awayTeam, events[i].awayTeamImage).subscribe(function (data) {
                _this.eventOddsArray.push(data);
                console.log(_this.eventOddsArray);
            });
        }
    };
    LiveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-live',
            template: __webpack_require__(708),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_odds_service__["a" /* OddsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _f) || Object])
    ], LiveComponent);
    return LiveComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/live.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
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
                _this.router.navigate(['profile']);
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
            template: __webpack_require__(709),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/login.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_odds_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
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
    function MenuComponent(oddsService, authService, router, dataService, flashMessage) {
        this.oddsService = oddsService;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.flashMessage = flashMessage;
        this.actions = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        //Can reuse this component by adding logic here to get odds by sport
        this.getOdds();
    };
    MenuComponent.prototype.getOdds = function () {
        var _this = this;
        this.oddsService.getOdds().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                //MLB Odds are sport = 0
                if (data[i].sport == 0) {
                    _this.actions.push(data[i]);
                }
            }
        });
    };
    MenuComponent.prototype.placeBet = function (action, type) {
        var _this = this;
        action.betType = type;
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addStraightBet(action, profile, 'straight');
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            return false;
        });
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(710),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/menu.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
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
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.route = function (route) {
        this.router.navigate([route]);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(711),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_odds_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParlayComponent = (function () {
    function ParlayComponent(flashMessage, authService, oddsService, dataService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.oddsService = oddsService;
        this.dataService = dataService;
        this.router = router;
        this.odds = [];
        this.testOdds = [];
        this.parlay = [];
    }
    ParlayComponent.prototype.ngOnInit = function () {
        this.getOdds();
    };
    ParlayComponent.prototype.getOdds = function () {
        var _this = this;
        this.oddsService.getOdds().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].sport == 0) {
                    _this.odds.push(data[i]);
                }
                else {
                    _this.testOdds.push(data[i]);
                }
            }
            console.log(_this.testOdds);
        });
    };
    ParlayComponent.prototype.parlayCheckboxClick = function (event, odd, type) {
        if (event.target.checked == true) {
            odd.betType = type;
            if (this.duplicateCheck(odd.id)) {
                this.flashMessage.show('Only one bet is allowed per game', { cssClass: 'alert-danger', timeout: 2000 });
                event.target.checked = false;
            }
            else {
                this.parlay.push(odd);
            }
        }
        else {
            this.removeParlayItem(odd.id);
        }
        console.log(this.parlay);
    };
    ParlayComponent.prototype.removeParlayItem = function (oddsId) {
        for (var i = 0; i < this.parlay.length; i++) {
            if (this.parlay[i].id === oddsId) {
                this.parlay.splice(i, 1);
            }
        }
    };
    ParlayComponent.prototype.duplicateCheck = function (oddsId) {
        for (var i = 0; i < this.parlay.length; i++) {
            if (this.parlay[i].id == oddsId) {
                return true;
            }
        }
        return false;
    };
    ParlayComponent.prototype.placeBet = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addMultipleBet(_this.parlay, profile, 'parlay');
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            return false;
        });
    };
    ParlayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parlay',
            template: __webpack_require__(712),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], ParlayComponent);
    return ParlayComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/parlay.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bets_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(67);
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
    function ProfileComponent(authService, betService, dataService) {
        this.authService = authService;
        this.betService = betService;
        this.dataService = dataService;
        this.pendingBets = [];
        this.closedBets = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getAllBets();
    };
    //Gets current logged in user and then gets corresponding bets for that user
    ProfileComponent.prototype.getAllBets = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.betService.getBets(profile, 'all').subscribe(function (bets) {
                for (var i = 0; i < bets.length; i++) {
                    if (bets[i].status == 'open') {
                        _this.pendingBets.push(bets[i]);
                    }
                    else {
                        _this.closedBets.push(bets[i]);
                    }
                }
                _this.dataService.sortBets(_this.closedBets);
            }, function (error) {
                console.log(error);
                return false;
            });
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(713),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_bets_service__["a" /* BetService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
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
            username: this.username,
            password: this.password,
            credit: this.credit,
            currentBalance: 0
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
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
            template: __webpack_require__(714),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/register.component.js.map

/***/ }),

/***/ 527:
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
            template: __webpack_require__(715),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [])
    ], StartComponent);
    return StartComponent;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/start.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_odds_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StraightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StraightComponent = (function () {
    function StraightComponent(oddsService, authService, router, dataService, flashMessage) {
        this.oddsService = oddsService;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.flashMessage = flashMessage;
        this.actions = [];
    }
    StraightComponent.prototype.ngOnInit = function () {
        //Add logic to get odds selected from menu, pass this into getOdds
        this.getOdds();
    };
    StraightComponent.prototype.getOdds = function () {
        var _this = this;
        this.oddsService.getOdds().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                //MLB Odds are sport = 0
                if (data[i].sport == 0) {
                    _this.actions.push(data[i]);
                }
            }
        });
    };
    StraightComponent.prototype.placeBet = function (action, type) {
        var _this = this;
        action.betType = type;
        this.authService.getProfile().subscribe(function (profile) {
            _this.dataService.addStraightBet(action, profile, 'straight');
            _this.router.navigate(['confirm']);
        }, function (err) {
            _this.flashMessage.show('You must be logged in to place a bet.', { cssClass: 'alert-danger' });
            return false;
        });
    };
    StraightComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-straight',
            template: __webpack_require__(716),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_odds_service__["a" /* OddsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object])
    ], StraightComponent);
    return StraightComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/straight.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
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

/***/ 530:
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

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bet; });
var Bet = (function () {
    function Bet(profile, bets, source, odds, betAmount, winAmount, betType) {
        this.oddsId = [];
        this.description = [];
        this.subBets = [];
        this.userId = profile.user._id;
        this.username = profile.user.username;
        console.log(bets);
        for (var i = 0; i < bets.length; i++) {
            console.log(bets[i]);
            this.oddsId.push(bets[i].id);
            this.description.push(bets[i].betDetails);
            this.subBets.push(bets[i]);
        }
        this.source = source;
        this.odds = odds;
        this.betAmount = betAmount;
        this.winAmount = winAmount;
        this.gameDate = bets[0].matchDate;
        this.gameTime = bets[0].matchTime;
        this.betType = betType;
    }
    return Bet;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/bet.js.map

/***/ }),

/***/ 67:
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
        this.bet = [];
        this.sportMenu = [];
    }
    DataService.prototype.addSport = function (sport) {
        this.sportMenu.push(sport);
    };
    DataService.prototype.getSports = function () {
        return this.sportMenu;
    };
    DataService.prototype.addStraightBet = function (bet, profile, type) {
        this.bet.push(bet);
        this.profile = profile;
        this.type = type;
    };
    DataService.prototype.addMultipleBet = function (bet, profile, type) {
        for (var i = 0; i < bet.length; i++) {
            this.bet.push(bet[i]);
        }
        this.profile = profile;
        this.type = type;
    };
    DataService.prototype.getBet = function () {
        return this.bet;
    };
    DataService.prototype.getProfile = function () {
        return this.profile;
    };
    DataService.prototype.getBetType = function () {
        return this.type;
    };
    DataService.prototype.sortBets = function (unsorted) {
        for (var i = 0; i < unsorted.length; i++) {
            var year = unsorted[i].gameDate.substr(0, 3);
            var month = unsorted[i].gameDate.substr(0, 3);
            var day = unsorted[i].gameDate.substr(0, 3);
            console.log(month);
        }
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=/Users/salscrudato/MEAN/meanauthapp/angular-src/src/data.service.js.map

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ".alert-fixed {\n    position:fixed;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    z-index:9999;\n    border-radius:0px\n}\n"

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

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ".nav-link{ cursor: pointer; }\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ".inside {\n    display: inline-block;\n    position: fixed;\n    bottom: 10px;\n    left: 50%;\n    margin-left: -50px;\n}\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<app-navbar class=\"fixed-top\"></app-navbar>\n<!-- <div class=\"container pl-0 pr-0\"> -->\n\t<flash-messages class=\"alert-fixed\"></flash-messages>\n\t<router-outlet></router-outlet>\n<!-- </div> -->\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h2 class=\"page-header\">All Pending Bets</h2>\n    <ul *ngFor=\"let pending of allPendings\" class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{pending.username}} Description: {{pending.description}}</li>\n      <div class=\"row\">\n      <a class=\"btn btn-primary btn-sm text-light w-50\"(click)=\"closePendingBet(pending, 'win')\">Win</a>\n      <a class=\"btn btn-danger btn-sm text-light w-50\"(click)=\"closePendingBet(pending, 'loss')\">Loss</a>\n    </div>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n  <h2 class=\"page-header pt-2\">Place Bet - Bet Slip</h2>\n  <p>{{betType}} BET</p>\n  <form (submit)=\"clickPlaceBet()\">\n    <ul class=\"list-group mb-2\">\n      <li class=\"list-group-item\" *ngFor=\"let bet of bets\">{{bet.betDetails}}</li>\n    </ul>\n    <div class=\"row p-0 m-0\">\n      <div class=\"form-group\">\n        <label for=\"amount\">Bet Amount</label>\n        <input autocomplete=\"off\" type=\"number\" style=\"width:150px\" [(ngModel)]=\"betAmount\" name=\"betAmount\" class=\"form-control mr-2\" id=\"amount\">\n      </div>\n      <div class=\"form-group row ml-0\" *ngIf=\"betAmount>0\">\n        <label class=\"mr-2\">To Win:</label>\n        <p class=\"m-0\" *ngIf=\"odds>0\">{{round(betAmount * odds/100)}}</p>\n        <p class=\"m-0\" *ngIf=\"odds<0\">{{round(betAmount / (odds * -1) * 100)}}</p>\n      </div>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Place Bet\">\n  </form>\n</div>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n\t<div class =\"jumbotron text-center\">\n\t\t<h1>Major League Action</h1>\n\t\t<p class=\"lead\">A betting site made by the people, for the people.</p>\n\t\t<div>\n\t\t\t<button type=\"button\" [routerLink]=\"['/register']\" class=\"btn btn-primary\">Register</button>\n\t\t\t<button type=\"button\" [routerLink]=\"['/login']\" class=\"btn btn-secondary\">Login</button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\" align=\"center\">\n\t\t<div class=\"col-md-4 mb-3\">\n\t\t\t<h3>View Pending Bets</h3>\n\t\t\t<button type=\"button\" [routerLink]=\"['/dashboard']\" class=\"btn btn-primary\">Pendings</button>\n\t\t</div>\n\t\t<div class=\"col-md-4 mb-3\">\n\t\t\t<h3>MLB</h3>\n\t\t\t<button type=\"button\" [routerLink]=\"['/menu']\" class=\"btn btn-primary\">MLB</button>\n\t\t</div>\n\t\t<div class=\"col-md-4 mb-3\">\n\t\t\t<h3>Live Bets</h3>\n\t\t\t<button type=\"button\" [routerLink]=\"['/mlblive']\" class=\"btn btn-primary\">Live Bets</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5 pr-0 pl-0\">\n<div class=\"row\" align=\"center\">\n  <div *ngFor=\"let action of eventOddsArray\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n    <div class =\"row ml-0 mr-0\" style=\"height:100px\">\n      <div class =\"col p-0 float-left\">\n        <img class=\"w-75 h-100\" src=\"{{action.awayImagePath}}\" alt=\"Card image cap\">\n      </div>\n      <h2 class=\"mt-4\">@</h2>\n      <div class =\"col p-0 float-right\">\n        <img class=\"w-75 h-100\" src=\"{{action.homeImagePath}}\" alt=\"Card image cap\">\n      </div>\n    </div>\n    <div class=\"card-header border-top pl-3 pr-3\">\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{action.awayTeam}}</div>\n        <div class=\"row border-bottom pb-1 pt-1\">\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-left\"(click)=\"placeBet(action,'awayTeamML')\">{{action.awayTeamML}}</a>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-primary btn-sm text-light\"(click)=\"placeBet(action,'awayTeamRL')\">{{action.awayTeamRL}} {{action.awayTeamRLOdds}}</a>\n          </div>\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-right\"(click)=\"placeBet(action,'over')\">u{{action.totalNumber}}</a>\n          </div>\n        </div>\n      </div>\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{action.homeTeam}}</div>\n        <div class=\"row pb-1 pt-1\">\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-left\"(click)=\"placeBet(action,'homeTeamML')\">{{action.homeTeamML}}</a>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-primary btn-sm text-light\"(click)=\"placeBet(action,'homeTeamRL')\">{{action.homeTeamRL}} {{action.homeTeamRLOdds}}</a>\n          </div>\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-right\" (click)=\"placeBet(action,'under')\">o{{action.totalNumber}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n<div class=\"mt-2\">\n<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5 pr-0 pl-0\">\n<div class=\"row\" align=\"center\">\n  <div *ngFor=\"let action of actions\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n    <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n      <div class=\"col\" align=\"left\">\n        <p class=\"m-0 pl-3\">{{action.matchDate | slice:0:6}}</p>\n      </div>\n      <div class=\"col\" align=\"right\">\n        <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n      </div>\n    </div>\n    <div class =\"row ml-0 mr-0\" style=\"height:100px\" *ngIf=\"action.sport==0\">\n      <div class =\"col p-0 float-left\">\n        <img class=\"w-75 h-100\" src=\"{{action.awayImagePath}}\" alt=\"Card image cap\">\n      </div>\n      <h2 class=\"mt-4\">@</h2>\n      <div class =\"col p-0 float-right\">\n        <img class=\"w-75 h-100\" src=\"{{action.homeImagePath}}\" alt=\"Card image cap\">\n      </div>\n    </div>\n    <div class=\"card-header border-top pl-3 pr-3\">\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{action.awayTeam}}</div>\n        <div class=\"row border-bottom pb-1 pt-1\">\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-left\"(click)=\"placeBet(action,'awayTeamML')\">{{action.awayTeamML}}</a>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-primary btn-sm text-light\"(click)=\"placeBet(action,'awayTeamRL')\">{{action.awayTeamRL}} {{action.awayTeamRLOdds}}</a>\n          </div>\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-right\"(click)=\"placeBet(action,'over')\">u{{action.totalNumber}}</a>\n          </div>\n        </div>\n      </div>\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{action.homeTeam}}</div>\n        <div class=\"row pb-1 pt-1\">\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-left\"(click)=\"placeBet(action,'homeTeamML')\">{{action.homeTeamML}}</a>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-primary btn-sm text-light\"(click)=\"placeBet(action,'homeTeamRL')\">{{action.homeTeamRL}} {{action.homeTeamRLOdds}}</a>\n          </div>\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-right\" (click)=\"placeBet(action,'under')\">o{{action.totalNumber}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark navbar-expand-lg\">\n  <a class=\"navbar-brand\" href=\"#\">Major League Action</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nb\" aria-controls=\"nb\" aria-expanded=\"false\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"nb\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('straight')\">Bet Menu</a></li>\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('parlay')\">Parlay Menu</a></li>\n      <li><a class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('live')\">Live Bet Menu</a></li>\n    </ul>\n    <ul class=\"navbar-nav mr-right\">\n      <li><a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('profile')\">Profile</a></li>\n      <li><a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('admin')\">Admin</a></li>\n      <li><a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('login')\">Login</a></li>\n      <li><a *ngIf=\"!authService.loggedIn()\" class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"route('register')\">Register</a></li>\n      <li><a *ngIf=\"authService.loggedIn()\" class=\"nav-link\" data-toggle=\"collapse\" data-target=\"#nb\" (click)=\"onLogoutClick()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5 pr-0 pl-0\">\n<div class=\"row\" align=\"center\">\n  <div *ngFor=\"let odd of odds\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n    <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n      <div class=\"col\" align=\"left\">\n        <p class=\"m-0 pl-3\">{{odd.matchDate | slice:0:6}}</p>\n      </div>\n      <div class=\"col\" align=\"right\">\n        <p class=\"m-0 pr-3\">{{odd.matchTime}}</p>\n      </div>\n    </div>\n    <div class =\"row ml-0 mr-0\" style=\"height:100px\" *ngIf=\"odd.sport==0\">\n      <div class =\"col p-0 float-left\">\n        <img class=\"w-75 h-100\" src=\"{{odd.awayImagePath}}\" alt=\"Card image cap\">\n      </div>\n      <h2 class=\"mt-4\">@</h2>\n      <div class =\"col p-0 float-right\">\n        <img class=\"w-75 h-100\" src=\"{{odd.homeImagePath}}\" alt=\"Card image cap\">\n      </div>\n    </div>\n    <div class=\"card-header border-top\">\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{odd.awayTeam}}</div>\n        <div class=\"row border-bottom pb-1 pt-1\">\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'awayTeamML')\">{{odd.awayTeamML}}</label>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <label class=\"btn btn-primary btn-sm\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'awayTeamRL')\">{{odd.awayTeamRL}} {{odd.awayTeamRLOdds}}</label>\n          </div>\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm float-right\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'over')\">o{{odd.totalNumber}}</label>\n          </div>\n        </div>\n      </div>\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{odd.homeTeam}}</div>\n        <div class=\"row pb-1 pt-1\">\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm float-left\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'homeTeamML')\">{{odd.homeTeamML}}</label>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <label class=\"btn btn-primary btn-sm\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'homeTeamRL')\">{{odd.homeTeamRL}} {{odd.homeTeamRLOdds}}</label>\n          </div>\n          <div class=\"col\">\n            <label class=\"btn btn-primary btn-sm float-right\"><input class=\"mr-2\" type=\"checkbox\" (click)=\"parlayCheckboxClick($event, odd, 'under')\">u{{odd.totalNumber}}</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"btn btn-success btn-lg inside mb-2\" *ngIf=\"parlay.length>1\" (click)=\"placeBet()\">Continue</div>\n</div>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 pt-2\">\n  <div *ngIf=\"user\">\n    <h2 class=\"page-header\">Profile</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Current Balance: {{user.currentBalance}}</li>\n      <li class=\"list-group-item\">Available Balance: {{user.currentBalance + user.credit}}</li>\n    </ul>\n    <h2 class=\"pt-2\">Pending Bets</h2>\n      <ul class=\"list-group\" *ngFor=\"let pendingBet of pendingBets\">\n        <li class=\"list-group-item\">{{pendingBet.gameDate}} {{pendingBet.gameTime}}:{{pendingBet.description}} Risking {{pendingBet.betAmount}} to win {{pendingBet.winAmount}}</li>\n      </ul>\n      <h2 class=\"mt-4\">Bet History</h2>\n        <div *ngFor=\"let closedBet of closedBets\">\n          <p *ngIf=\"closedBet.status === 'win'\">{{closedBet.gameDate}} {{closedBet.gameTime}}: {{closedBet.description}} Result: {{closedBet.status}} {{closedBet.winAmount}} dollars</p>\n          <p *ngIf=\"closedBet.status === 'loss'\">{{closedBet.gameDate}} {{closedBet.gameTime}}: {{closedBet.description}} Result: {{closedBet.status}} -{{closedBet.betAmount}} dollars</p>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<div class=\" container mt-2 pt-5\">\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"credit\">Account Credit</label>\n    <input type=\"number\" [(ngModel)]=\"credit\" name=\"credit\" class=\"form-control\" id=\"credit\" placeholder=\"Enter Account Credit\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n\n<!-- <div class=\"form-group\">\n  <label for=\"email\">Email</label>\n  <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n  <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n</div> -->\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div class=\"row\">\n  <input type=\"text\" class=\"form-control\">\n  <input type=\"text\" class=\"form-control\">\n</div>\n\n</div>\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5 pr-0 pl-0\">\n<div class=\"row\" align=\"center\">\n  <div *ngFor=\"let action of actions\" class=\"card col-sm-4 mt-3 pl-0 pr-0\">\n    <div class=\"row pl-0 pr-0 ml-0 mr-0\">\n      <div class=\"col\" align=\"left\">\n        <p class=\"m-0 pl-3\">{{action.matchDate | slice:0:6}}</p>\n      </div>\n      <div class=\"col\" align=\"right\">\n        <p class=\"m-0 pr-3\">{{action.matchTime}}</p>\n      </div>\n    </div>\n    <div class =\"row ml-0 mr-0\" style=\"height:100px\" *ngIf=\"action.sport==0\">\n      <div class =\"col p-0 float-left\">\n        <img class=\"w-75 h-100\" src=\"{{action.awayImagePath}}\" alt=\"Card image cap\">\n      </div>\n      <h2 class=\"mt-4\">@</h2>\n      <div class =\"col p-0 float-right\">\n        <img class=\"w-75 h-100\" src=\"{{action.homeImagePath}}\" alt=\"Card image cap\">\n      </div>\n    </div>\n    <div class=\"card-header border-top pl-3 pr-3\">\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{action.awayTeam}}</div>\n        <div class=\"row border-bottom pb-1 pt-1\">\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-left\"(click)=\"placeBet(action,'awayTeamML')\">{{action.awayTeamML}}</a>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-primary btn-sm text-light\"(click)=\"placeBet(action,'awayTeamRL')\">{{action.awayTeamRL}} {{action.awayTeamRLOdds}}</a>\n          </div>\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-right\"(click)=\"placeBet(action,'over')\">u{{action.totalNumber}}</a>\n          </div>\n        </div>\n      </div>\n      <div align=\"left\">\n        <div class=\"row pl-3\">{{action.homeTeam}}</div>\n        <div class=\"row pb-1 pt-1\">\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-left\"(click)=\"placeBet(action,'homeTeamML')\">{{action.homeTeamML}}</a>\n          </div>\n          <div class=\"col\" align=\"center\">\n            <a class=\"btn btn-primary btn-sm text-light\"(click)=\"placeBet(action,'homeTeamRL')\">{{action.homeTeamRL}} {{action.homeTeamRLOdds}}</a>\n          </div>\n          <div class=\"col\">\n            <a class=\"btn btn-primary btn-sm text-light float-right\" (click)=\"placeBet(action,'under')\">o{{action.totalNumber}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[755]);
//# sourceMappingURL=main.bundle.map