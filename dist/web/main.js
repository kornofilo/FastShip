(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Router outlet muestra el componente llamado según la ruta indicada-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Home';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _operaciones_operaciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operaciones/operaciones.component */ "./src/app/operaciones/operaciones.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuario/usuario.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _oficina_oficina_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oficina/oficina.component */ "./src/app/oficina/oficina.component.ts");
/* harmony import */ var _operaciones_operaciones_metodos_envio_operaciones_metodos_envio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component */ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.ts");
/* harmony import */ var _operaciones_operaciones_oficinas_operaciones_oficinas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./operaciones/operaciones-oficinas/operaciones-oficinas.component */ "./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.ts");
/* harmony import */ var _oficina_oficina_rutas_oficina_rutas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oficina/oficina-rutas/oficina-rutas.component */ "./src/app/oficina/oficina-rutas/oficina-rutas.component.ts");
/* harmony import */ var _oficina_oficina_sidenav_oficina_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./oficina/oficina-sidenav/oficina-sidenav.component */ "./src/app/oficina/oficina-sidenav/oficina-sidenav.component.ts");
/* harmony import */ var _oficina_oficina_envios_oficina_envios_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./oficina/oficina-envios/oficina-envios.component */ "./src/app/oficina/oficina-envios/oficina-envios.component.ts");
/* harmony import */ var _operaciones_operaciones_rutas_operaciones_rutas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./operaciones/operaciones-rutas/operaciones-rutas.component */ "./src/app/operaciones/operaciones-rutas/operaciones-rutas.component.ts");
/* harmony import */ var _operaciones_operaciones_sub_rutas_operaciones_sub_rutas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component */ "./src/app/operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component.ts");
/* harmony import */ var _operaciones_operaciones_navbar_operaciones_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./operaciones/operaciones-navbar/operaciones-navbar.component */ "./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.ts");
/* harmony import */ var _operaciones_operaciones_sidenav_operaciones_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./operaciones/operaciones-sidenav/operaciones-sidenav.component */ "./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.ts");
/* harmony import */ var _operaciones_operaciones_cargamentos_operaciones_cargamentos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./operaciones/operaciones-cargamentos/operaciones-cargamentos.component */ "./src/app/operaciones/operaciones-cargamentos/operaciones-cargamentos.component.ts");
/* harmony import */ var _oficina_oficina_envios_estados_oficina_envios_estados_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./oficina/oficina-envios-estados/oficina-envios-estados.component */ "./src/app/oficina/oficina-envios-estados/oficina-envios-estados.component.ts");
/* harmony import */ var _oficina_oficina_envios_historial_oficina_envios_historial_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./oficina/oficina-envios-historial/oficina-envios-historial.component */ "./src/app/oficina/oficina-envios-historial/oficina-envios-historial.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Componentes















// import { MaterializeModule } from 'angular2-materialize';


// Guards

// Firebase




/* Array de Rutas */
var routes = [
    { path: '', component: _operaciones_operaciones_component__WEBPACK_IMPORTED_MODULE_3__["OperacionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'operaciones', component: _operaciones_operaciones_component__WEBPACK_IMPORTED_MODULE_3__["OperacionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'metodosEnvio', component: _operaciones_operaciones_metodos_envio_operaciones_metodos_envio_component__WEBPACK_IMPORTED_MODULE_9__["OperacionesMetodosEnvioComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'admOficinas', component: _operaciones_operaciones_oficinas_operaciones_oficinas_component__WEBPACK_IMPORTED_MODULE_10__["OperacionesOficinasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'usuario', component: _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioComponent"] },
    { path: 'oficina', component: _oficina_oficina_component__WEBPACK_IMPORTED_MODULE_8__["OficinaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'tiendas/:tipo', component: _oficina_oficina_rutas_oficina_rutas_component__WEBPACK_IMPORTED_MODULE_11__["OficinaRutasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'envios', component: _oficina_oficina_envios_oficina_envios_component__WEBPACK_IMPORTED_MODULE_13__["OficinaEnviosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'envios-estados', component: _oficina_oficina_envios_estados_oficina_envios_estados_component__WEBPACK_IMPORTED_MODULE_19__["OficinaEnviosEstadosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'envios-estados/:tn', component: _oficina_oficina_envios_historial_oficina_envios_historial_component__WEBPACK_IMPORTED_MODULE_20__["OficinaEnviosHistorialComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'rutas', component: _operaciones_operaciones_rutas_operaciones_rutas_component__WEBPACK_IMPORTED_MODULE_14__["OperacionesRutasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'subrutas', component: _operaciones_operaciones_sub_rutas_operaciones_sub_rutas_component__WEBPACK_IMPORTED_MODULE_15__["OperacionesSubRutasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'cargamentos', component: _operaciones_operaciones_cargamentos_operaciones_cargamentos_component__WEBPACK_IMPORTED_MODULE_18__["OperacionesCargamentosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _operaciones_operaciones_component__WEBPACK_IMPORTED_MODULE_3__["OperacionesComponent"],
                _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _oficina_oficina_component__WEBPACK_IMPORTED_MODULE_8__["OficinaComponent"],
                _operaciones_operaciones_navbar_operaciones_navbar_component__WEBPACK_IMPORTED_MODULE_16__["OperacionesNavbarComponent"],
                _operaciones_operaciones_sidenav_operaciones_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["OperacionesSidenavComponent"],
                _operaciones_operaciones_metodos_envio_operaciones_metodos_envio_component__WEBPACK_IMPORTED_MODULE_9__["OperacionesMetodosEnvioComponent"],
                _operaciones_operaciones_oficinas_operaciones_oficinas_component__WEBPACK_IMPORTED_MODULE_10__["OperacionesOficinasComponent"],
                _oficina_oficina_rutas_oficina_rutas_component__WEBPACK_IMPORTED_MODULE_11__["OficinaRutasComponent"],
                _oficina_oficina_sidenav_oficina_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["OficinaSidenavComponent"],
                _oficina_oficina_envios_oficina_envios_component__WEBPACK_IMPORTED_MODULE_13__["OficinaEnviosComponent"],
                _operaciones_operaciones_rutas_operaciones_rutas_component__WEBPACK_IMPORTED_MODULE_14__["OperacionesRutasComponent"],
                _operaciones_operaciones_sub_rutas_operaciones_sub_rutas_component__WEBPACK_IMPORTED_MODULE_15__["OperacionesSubRutasComponent"],
                _operaciones_operaciones_cargamentos_operaciones_cargamentos_component__WEBPACK_IMPORTED_MODULE_18__["OperacionesCargamentosComponent"],
                _oficina_oficina_envios_estados_oficina_envios_estados_component__WEBPACK_IMPORTED_MODULE_19__["OficinaEnviosEstadosComponent"],
                _oficina_oficina_envios_historial_oficina_envios_historial_component__WEBPACK_IMPORTED_MODULE_20__["OficinaEnviosHistorialComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                angularfire2__WEBPACK_IMPORTED_MODULE_24__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_26__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/metodos-envio.ts":
/*!******************************************!*\
  !*** ./src/app/classes/metodos-envio.ts ***!
  \******************************************/
/*! exports provided: MetodosEnvio, TiposMetodosEnvio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodosEnvio", function() { return MetodosEnvio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposMetodosEnvio", function() { return TiposMetodosEnvio; });
/* Clase utilizada para armar la estructura de los documentos de la colección de métodos de envío en la base de datos. */
var MetodosEnvio = /** @class */ (function () {
    function MetodosEnvio() {
    }
    return MetodosEnvio;
}());

var TiposMetodosEnvio = /** @class */ (function () {
    function TiposMetodosEnvio() {
    }
    return TiposMetodosEnvio;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth, authService) {
        this.router = router;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (authState) { return !!authState; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
                alert('Debe iniciar sesión para ingresar a esta sección');
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n  }\r\n\r\n  main {\r\n    flex: 1 0 auto;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <body>\r\n      <nav>\r\n        <div class=\"nav-wrapper grey darken-3\">\r\n          <a href=\"#\" class=\"brand-logo\">FastShip</a>\r\n        </div>\r\n      </nav> <br><br><br>  \r\n\r\n      <main>            \r\n          <div class=\"container grey lighten-4\">\r\n            <h5 class=\"center-align\"><b> Inicio de Sesión </b></h5>\r\n            <div class=\"row\">\r\n              <!-- Formulario de Inicio de Sesión -->\r\n              <form class=\"col s12\" (submit)=\"onSubmitLogin()\">            \r\n                <div class='row'>\r\n                  <div class='input-field col s12'>\r\n                    <input class='validate' name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" type=\"email\" required />\r\n                    <label for='email'>Correo Electrónico</label>\r\n                  </div>\r\n                </div>\r\n    \r\n                <div class='row'>\r\n                  <div class='input-field col s12'>\r\n                    <input class='validate' [(ngModel)]=\"password\" name='password' class=\"form-control\" type=\"password\" required />\r\n                    <label for='password'>Contraseña</label>\r\n                  </div>  \r\n                                   \r\n                  <label>\r\n                      <a class='pink-text'><b>¿Olvido su contraseña?</b></a>\r\n                  </label>            \r\n                </div>\r\n    \r\n                <br />\r\n                \r\n                  <div class='row'>\r\n                    <button type='submit' name='btn_login' class='col s12 btn btn-large orange'><b>Iniciar Sesión</b></button>\r\n                  </div>           \r\n              </form>\r\n            </div>\r\n          </div>\r\n      </main>\r\n    \r\n      <!--Footer -->\r\n      <footer class=\"page-footer grey darken-3\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"footer-copyright\">\r\n              <h5 class=\"white-text\">FastShip</h5>\r\n              <p class=\"grey-text text-lighten-4\">©2018 - Rialvik</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n  </body>\r\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmitLogin = function () {
        this.authService.login(this.email, this.password)
            .then(function (res) {
            console.log(res);
            location.replace('operaciones');
        }).catch(function (err) {
            if (err.code === 'auth/wrong-password') {
                alert('El Nombre de Usuario o Contraseña ingresada son incorrectos. Inténtelo de nuevo.');
            }
            else if (err.code === 'auth/invalid-email') {
                alert('El formato del correo electrónico ingresado es inválido. Inténtelo de nuevo.');
            }
            else if (err.code === 'auth/user-not-found') {
                alert('El correo ingresado no se encuentra registrado en el sistema. Inténtelo de nuevo.');
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/oficina/oficina-envios-estados/oficina-envios-estados.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/oficina/oficina-envios-estados/oficina-envios-estados.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/oficina/oficina-envios-estados/oficina-envios-estados.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/oficina/oficina-envios-estados/oficina-envios-estados.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n<app-operaciones-navbar></app-operaciones-navbar>    \r\n<body>\r\n\r\n<div class=\"row\">\r\n  <!-- Barra de Navegación Lateral -->\r\n  \r\n  <app-oficina-sidenav></app-oficina-sidenav>      \r\n\r\n      <!-- Cuerpo de la Sección -->\r\n      <div class=\"col s9 offset-s3\">\r\n          <div class=\"row\">\r\n              <h5>Listado de Envíos</h5>\r\n          </div> <hr>      \r\n          <div class=\"col s9\" *ngIf=\"arr.length>0;else noData\">\r\n                <div class=\"col s4\" *ngFor=\"let item of arr\">\r\n                  <div class=\"card grey darken-4 white-text\">\r\n                    <div class=\"card-content\">  \r\n                      <p>- # de Tracking: {{item.id}}</p>                      \r\n                      <p>- Tipo: {{item.tipo}}</p>                      \r\n                      <p *ngIf=\"item.especificaciones.peso != null \">- Peso: {{item.especificaciones.peso}} kg</p>\r\n                      <p>- Destino: {{item.detalles.destino}}</p>\r\n                      <p>- Estado Actual: {{item.estado}}</p>\r\n                    </div>\r\n                    <div class=\"card-action\">                      \r\n                      <a class=\"pointer-delete modal-trigger\" (click)=\"onUpdate(item)\"  href=\"#modalNE\" materialize=\"modal\">Actualizar Estado</a>\r\n                      <a routerLink=\"/envios-estados/{{item.id}}\">Historial</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>            \r\n      </div>        \r\n    </div>\r\n\r\n  <!-- Mensaje en caso no existan envíos.-->\r\n  <div class=\"container\">\r\n    <ng-template #noData>\r\n      \r\n      <h5 class=\"center-align\">No existen envíos registrados.</h5>\r\n    </ng-template>\r\n  </div>\r\n  \r\n\r\n  <!-- Modal que contiene el formulario de creación de los envíos (paquetes). -->\r\n  <div id=\"modalNE\" class=\"modal modal-fixed-footer\">\r\n      <div class=\"modal-content row\">\r\n        <h4>Actualización de Estado</h4>  \r\n        <form [formGroup]=\"newEstadoForm\">\r\n          <div class=\"input-field col s6\">                         \r\n            <select class=\"form-control browser-default\" formControlName=\"estado\">\r\n                <option value=\"Estado\" disabled selected>Estado</option>\r\n                <option *ngFor=\"let opcion of opcionesEstado\" [value]=\"opcion\">{{opcion}}</option>\r\n            </select>                      \r\n          </div>\r\n          <div class=\"input-field col s6\" formGroupName=\"newEstado\">\r\n            <select formControlName=\"tienda\" class=\"browser-default form-control validate\" required>\r\n              <option disabled>Tienda</option>  \r\n              <option *ngFor=\"let oficina of arrOficinas\" [value]=\"oficina.nombre\">{{oficina.nombre}}</option> \r\n            </select>\r\n          </div>\r\n        </form>  \r\n      </div>\r\n      \r\n\r\n\r\n\r\n\r\n      <div class=\"modal-footer\">\r\n        <button (click)='updateSubmit()'  class=\"modal-close btn-flat green-text\">Actualizar</button>        \r\n        <a class=\"modal-close btn-flat red-text\" (click)='cleanForm()'>Cancelar</a>\r\n      </div>\r\n  </div>  <!-- Fin de modal de crear envío (paquete) -->   \r\n</body>\r\n"

/***/ }),

/***/ "./src/app/oficina/oficina-envios-estados/oficina-envios-estados.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/oficina/oficina-envios-estados/oficina-envios-estados.component.ts ***!
  \************************************************************************************/
/*! exports provided: OficinaEnviosEstadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinaEnviosEstadosComponent", function() { return OficinaEnviosEstadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_firestore_envios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firestore-envios.service */ "./src/app/services/firestore-envios.service.ts");
/* harmony import */ var _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore-oficina.service */ "./src/app/services/firestore-oficina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Servicios


var OficinaEnviosEstadosComponent = /** @class */ (function () {
    function OficinaEnviosEstadosComponent(_misEnvios, fb, _misTiendas) {
        this._misEnvios = _misEnvios;
        this.fb = fb;
        this._misTiendas = _misTiendas;
        this.arr = [];
        this.arrOficinas = [];
        this.opcionesEstado = ['Enviado', 'Recibido', 'Detenido', 'Retornando al Remitente', 'En camino a ser entregado', 'Entregado'];
    }
    OficinaEnviosEstadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firestoreEnviosSubscription = this._misEnvios.getEnvios().subscribe(function (envio) {
            _this.arr = envio;
            console.log(_this.arr);
        });
        // Obtenemos las oficinas registradas en la base de datos.
        this.firestoreOficinasEnvioSubscription = this._misTiendas.getOficinasNRT().subscribe(function (oficina) {
            _this.arrOficinas = oficina;
        });
        $(function () {
            $('select').formSelect();
            $('.modal').modal();
        });
        this.createForm();
    };
    OficinaEnviosEstadosComponent.prototype.ngOnDestroy = function () {
        this.firestoreEnviosSubscription.unsubscribe();
        this.firestoreOficinasEnvioSubscription.unsubscribe();
    };
    OficinaEnviosEstadosComponent.prototype.ngOnChanges = function () {
        this.cleanForm();
    };
    OficinaEnviosEstadosComponent.prototype.createForm = function () {
        this.newEstadoForm = this.fb.group({
            estado: ['Estado', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newEstado: this.fb.group({
                estado: '',
                fecha: '',
                tienda: 'Tienda'
            })
        });
    };
    /* Función que limpia el modelo del formulario para la actualización
     de los estados de los envíos. */
    OficinaEnviosEstadosComponent.prototype.cleanForm = function () {
        this.newEstadoForm.reset({
            estado: 'Estado',
            newEstado: {
                estado: '',
                fecha: '',
                tienda: 'Tienda'
            }
        });
    };
    OficinaEnviosEstadosComponent.prototype.onUpdate = function (envio) {
        this.iE = envio.id;
        this.newEstadoForm.patchValue({
            estado: envio.estado
        });
    };
    OficinaEnviosEstadosComponent.prototype.updateSubmit = function () {
        var newEH = {};
        this.newEstadoForm.patchValue({
            newEstado: {
                estado: this.newEstadoForm.get('estado').value,
                fecha: Date.now()
            }
        });
        newEH = {
            tienda: this.newEstadoForm.value.newEstado.tienda,
            fecha: this.newEstadoForm.value.newEstado.fecha,
            estado: this.newEstadoForm.get('estado').value,
        };
        this._misEnvios.updateEstadoEnvio(this.iE, newEH);
    };
    OficinaEnviosEstadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficina-envios-estados',
            template: __webpack_require__(/*! ./oficina-envios-estados.component.html */ "./src/app/oficina/oficina-envios-estados/oficina-envios-estados.component.html"),
            styles: [__webpack_require__(/*! ./oficina-envios-estados.component.css */ "./src/app/oficina/oficina-envios-estados/oficina-envios-estados.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firestore_envios_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreEnviosService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreOficinaService"]])
    ], OficinaEnviosEstadosComponent);
    return OficinaEnviosEstadosComponent;
}());



/***/ }),

/***/ "./src/app/oficina/oficina-envios-historial/oficina-envios-historial.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/oficina/oficina-envios-historial/oficina-envios-historial.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/oficina/oficina-envios-historial/oficina-envios-historial.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/oficina/oficina-envios-historial/oficina-envios-historial.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n<app-operaciones-navbar></app-operaciones-navbar>    \r\n<body>\r\n\r\n<div class=\"row\">\r\n  <!-- Barra de Navegación Lateral -->\r\n  \r\n  <app-oficina-sidenav></app-oficina-sidenav>      \r\n\r\n      <!-- Cuerpo de la Sección -->\r\n      <div class=\"col s9 offset-s3\">\r\n          <div class=\"row\">\r\n              <h5 class=\"center-align\">Historial del Envío: {{trackingNumber}} </h5>\r\n          </div> <hr>   \r\n          \r\n          <ul class=\"collection\" *ngIf=\"arr.length>0;else noData\">\r\n            <li class=\"collection-item avatar\" *ngFor=\"let item of arr\">\r\n              \r\n              <i class=\"medium material-icons circle green\" *ngIf=\"item == arr[0];else noLast\">arrow_upward</i>\r\n              <ng-template #noLast>\r\n                  <i class=\"medium material-icons circle green\">check</i>\r\n              </ng-template>\r\n              <span class=\"title\"><b>{{item.estado}} </b> </span>\r\n              <p> Fecha: {{item.fecha | date: 'dd/mm/yyyy h:mm:ss a'}} <br>\r\n                  Tienda: {{item.tienda}}\r\n              </p>\r\n            </li>\r\n          </ul>                          \r\n      </div>        \r\n    </div>\r\n\r\n  <!-- Mensaje en caso no existan envíos.-->\r\n  <div class=\"container\">\r\n    <ng-template #noData>\r\n      \r\n      <h5 class=\"center-align\">Este número de envío no se encuentra registrado.</h5>\r\n    </ng-template>\r\n  </div>\r\n  \r\n</body>\r\n"

/***/ }),

/***/ "./src/app/oficina/oficina-envios-historial/oficina-envios-historial.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/oficina/oficina-envios-historial/oficina-envios-historial.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OficinaEnviosHistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinaEnviosHistorialComponent", function() { return OficinaEnviosHistorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firestore_envios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firestore-envios.service */ "./src/app/services/firestore-envios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Firebase


var OficinaEnviosHistorialComponent = /** @class */ (function () {
    function OficinaEnviosHistorialComponent(_envios, route) {
        this._envios = _envios;
        this.route = route;
        this.arr = [];
    }
    OficinaEnviosHistorialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackingNumber = this.route.snapshot.params['tn'];
        console.log(this.trackingNumber);
        this.firestoreEnviosSubscription = this._envios.getHistorialEnvios(this.trackingNumber).subscribe(function (envio) {
            _this.envioBusq = envio;
            _this.arr = Object.values(_this.envioBusq.historial);
            _this.arr.reverse();
        });
        // Inicialización de los elementos de Materialize que requieren JQuery para su funcionamiento.
        $(function () {
        });
    };
    OficinaEnviosHistorialComponent.prototype.ngOnDestroy = function () {
        this.firestoreEnviosSubscription.unsubscribe();
    };
    OficinaEnviosHistorialComponent.prototype.objectValues = function (envio) {
    };
    OficinaEnviosHistorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficina-envios-historial',
            template: __webpack_require__(/*! ./oficina-envios-historial.component.html */ "./src/app/oficina/oficina-envios-historial/oficina-envios-historial.component.html"),
            styles: [__webpack_require__(/*! ./oficina-envios-historial.component.css */ "./src/app/oficina/oficina-envios-historial/oficina-envios-historial.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firestore_envios_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreEnviosService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OficinaEnviosHistorialComponent);
    return OficinaEnviosHistorialComponent;
}());



/***/ }),

/***/ "./src/app/oficina/oficina-envios/oficina-envios.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/oficina/oficina-envios/oficina-envios.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header, nav, footer {\r\n    padding-left: 300px;\r\n}\r\n\r\n  @media only screen and (max-width : 992px) {\r\n    header, main, footer {\r\n      padding-left: 0;\r\n    }\r\n  }\r\n\r\n  .sectionFormHeader{\r\n    display: block;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n}"

/***/ }),

/***/ "./src/app/oficina/oficina-envios/oficina-envios.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/oficina/oficina-envios/oficina-envios.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n<app-operaciones-navbar></app-operaciones-navbar>    \r\n<body>\r\n\r\n<div class=\"row\">\r\n  <!-- Barra de Navegación Lateral -->\r\n  \r\n  <app-oficina-sidenav></app-oficina-sidenav>      \r\n\r\n      <!-- Cuerpo de la Sección -->\r\n      <div class=\"col s9 offset-s3\">\r\n          <div class=\"row\">\r\n              <a class=\"btn-large col s3 yellow darken-2 black-text\">Creación de Envío</a>   \r\n              <a class=\"btn-large col s3 offset-s1 green modal-trigger\"  href=\"#modalCrearEP\" materialize=\"modal\">Crear Envío (Paquete)</a>           \r\n              <a class=\"btn-large col s3 offset-s1 green modal-trigger\" href=\"#modalCrearED\" materialize=\"modal\">Crear Envío (Documento)</a>           \r\n          </div>   \r\n          <hr>\r\n          <div class=\"col s9\" *ngIf=\"arr.length>0;else noData\">\r\n                <div class=\"col s4\" *ngFor=\"let item of arr\">\r\n                  <div class=\"card grey darken-4 white-text\">\r\n                    <div class=\"card-content\">  \r\n                      <p>- # de Tracking: {{item.id}}</p>                      \r\n                      <p>- Tipo: {{item.tipo}}</p>                      \r\n                      <p *ngIf=\"item.especificaciones.peso != null \">- Peso: {{item.especificaciones.peso}} kg</p>\r\n                      <p>- Destino: {{item.detalles.destino}}</p>\r\n                    </div>\r\n                    <div class=\"card-action\">                      \r\n                      <a class=\"pointer-delete\">Ver más</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>            \r\n      </div>        \r\n    </div>\r\n\r\n  <!-- Mensaje en caso no existan envíos.-->\r\n  <div class=\"container\">\r\n    <ng-template #noData>\r\n      \r\n      <h5 class=\"center-align\">No existen envíos registrados.</h5>\r\n    </ng-template>\r\n  </div>\r\n  \r\n\r\n  <!-- Modal que contiene el formulario de creación de los envíos (paquetes). -->\r\n  <div id=\"modalCrearEP\" class=\"modal modal-fixed-footer\">\r\n      <div class=\"modal-content row\">\r\n        <h4>Creación de Envío - Paquete</h4>\r\n        <form [formGroup]=\"paquetesForm\">\r\n            <!-- Datos del Remitente-->\r\n            <div formGroupName=\"remitente\">\r\n                <div class=\"input-field col s12\">               \r\n                    <h6 class=\"sectionFormHeader\">Remitente</h6>\r\n                </div>\r\n                <div class=\"input-field col s4\">                \r\n                    <input formControlName=\"nombre\" placeholder=\"Nombre\" class=\"form-control validate\" required>\r\n                </div>\r\n\r\n                <div class=\"input-field col s4\">                \r\n                    <input formControlName=\"apellido\" placeholder=\"Apellido\" class=\"form-control validate\" required>\r\n                </div>\r\n\r\n                <div class=\"input-field col s4\">                \r\n                    <input formControlName=\"telefono\" placeholder=\"Teléfono\" type=\"tel\" class=\"form-control validate\" required>\r\n                </div>\r\n            </div>\r\n            \r\n            \r\n             <!-- Datos del Destinatario-->\r\n             <div formGroupName=\"destinatario\">\r\n                <div class=\"input-field col s12\">               \r\n                  <h6 class=\"sectionFormHeader\">Destinatario</h6>\r\n                </div>\r\n\r\n                <div class=\"input-field col s3\">                \r\n                  <input  formControlName=\"nombre\" placeholder=\"Nombre\" class=\"form-control validate\" required>\r\n                </div>\r\n\r\n                <div class=\"input-field col s3\">                \r\n                  <input formControlName=\"apellido\" placeholder=\"Apellido\" class=\"form-control validate\" required>\r\n                </div>\r\n                <div class=\"input-field col s3\">                \r\n                  <input formControlName=\"telefono\" placeholder=\"Teléfono\" type=\"tel\" class=\"form-control validate\" required>\r\n                </div>\r\n\r\n                <div class=\"input-field col s3\">                \r\n                  <input formControlName=\"direccion\" placeholder=\"Dirección\" class=\"form-control validate\" required>\r\n                </div>\r\n             </div> \r\n             \r\n              <!-- Detalles del Envío-->\r\n              <div formGroupName=\"detalles\">\r\n                  <div class=\"input-field col s12\">               \r\n                    <h6 class=\"sectionFormHeader\">Detalles del Envío</h6>\r\n                  </div>\r\n    <!-- drop down trae oficinas -->\r\n                  <div class=\"input-field col s3\">\r\n                    <select formControlName=\"origen\" class=\"browser-default form-control validate\" required>\r\n                      <option disabled>Origen</option>  \r\n                      <option *ngFor=\"let oficina of arrOficinas\" [value]=\"oficina.nombre\">{{oficina.nombre}}</option> \r\n                    </select>\r\n                  </div>\r\n    \r\n                  <div class=\"input-field col s3\">\r\n                    <select formControlName=\"destino\" class=\"browser-default form-control validate\" required>\r\n                      <option disabled>Destino</option>\r\n                      <option *ngFor=\"let oficina of arrOficinas\" [value]=\"oficina.nombre\">{{oficina.nombre}}</option>                    \r\n                    </select>\r\n                  </div>\r\n    \r\n                  <div class=\"input-field col s3\">\r\n                    <input type=\"date\" formControlName=\"fechaEnvio\">\r\n                    <label for=\"fechaEnvio\">Fecha de Envío</label>                               \r\n                  </div>\r\n    \r\n                  <div class=\"input-field col s3\">\r\n                    <select class=\"form-control browser-default\" formControlName=\"tipoEnvio\">\r\n                      <option disabled selected>Tipo de Envío</option>  \r\n                      <option *ngFor=\"let opcion of arrMetodosEnvio\" [value]=\"opcion.nombre\">{{opcion.nombre}}</option>                           \r\n                    </select>\r\n                  </div>\r\n             </div> \r\n\r\n             <div formGroupName=\"especificaciones\">\r\n                <div class=\"input-field col s12\">               \r\n                  <h6 class=\"sectionFormHeader\">Específicaciones del Paquete</h6>\r\n                </div>\r\n                \r\n                <div class=\"input-field col s3\" >\r\n                      <input  formControlName=\"largo\" placeholder=\"Largo\" type=\"number\" step=\"any\" class=\"form-control validate\" required>\r\n                </div>\r\n\r\n                <div class=\"input-field col s3\">\r\n                    <input formControlName=\"ancho\" placeholder=\"Ancho\" type=\"number\" step=\"any\" class=\"form-control validate\" required>\r\n                </div>\r\n            \r\n                <div class=\"input-field col s3\">\r\n                    <input formControlName=\"alto\" placeholder=\"Alto\" type=\"number\" step=\"any\" class=\"form-control validate\" required>\r\n                </div> \r\n                \r\n                <div class=\"input-field col s3\">\r\n                    <input formControlName=\"peso\" placeholder=\"Peso (en kg)\" type=\"number\" step=\"any\" class=\"form-control validate\" required>\r\n                </div>  \r\n                \r\n                <div class=\"input-field col s10\">\r\n                  <textarea formControlName=\"descripcion\" placeholder=\"Descripción del Contenido\" type=\"text\" class=\"form-control validate materialize-textarea\" data-length=\"140\" required></textarea>\r\n                </div>\r\n\r\n                <div class=\"input-field col s2\">\r\n                    <label>\r\n                        <input type=\"checkbox\" class=\"form-control\" formControlName=\"perecedero\"/>\r\n                        <span>¿Perecedero?</span>\r\n                    </label>\r\n                </div> <br> \r\n           </div>                \r\n        </form>      \r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button (click)='insertSubmit()' class=\"modal-close btn-flat green-text\" *ngIf=\"paquetesForm.status === 'VALID'\">Crear</button>        \r\n        <button (click)='updateSubmit(metodoEnvio)' *ngIf=\"updClicked === true\"  class=\"modal-close btn-flat green-text\" [disabled]=\"!addform.form.valid\">Actualizar</button>        \r\n        <a class=\"modal-close btn-flat red-text\" (click)='cleanForms()'>Cancelar</a>\r\n      </div>\r\n  </div>  <!-- Fin de modal de crear envío (paquete) -->   \r\n  \r\n  <!-- Modal que contiene el formulario de creación de los envíos (documentos). -->\r\n  <div id=\"modalCrearED\" class=\"modal modal-fixed-footer\">\r\n      <div class=\"modal-content row\">\r\n        <h4>Creación de Envío - Documento</h4>\r\n        <form [formGroup]=\"documentosForm\">\r\n            <!-- Datos del Remitente-->\r\n            <div formGroupName=\"remitente\">\r\n                <div class=\"input-field col s12\">               \r\n                    <h6 class=\"sectionFormHeader\">Remitente</h6>\r\n                </div>\r\n                <div class=\"input-field col s4\">                \r\n                    <input formControlName=\"nombre\" placeholder=\"Nombre\" class=\"form-control validate\" required>\r\n                </div>\r\n\r\n                <div class=\"input-field col s4\">                \r\n                    <input formControlName=\"apellido\" placeholder=\"Apellido\" class=\"form-control validate\" required>\r\n                </div>\r\n\r\n                <div class=\"input-field col s4\">                \r\n                    <input formControlName=\"telefono\" placeholder=\"Teléfono\" type=\"tel\" class=\"form-control validate\" required>\r\n                </div>\r\n            </div>\r\n            \r\n            \r\n             <!-- Datos del Destinatario-->\r\n             <div formGroupName=\"destinatario\">\r\n                <div class=\"input-field col s12\">               \r\n                  <h6 class=\"sectionFormHeader\">Destinatario</h6>\r\n                </div>\r\n\r\n                <div class=\"input-field col s3\">                \r\n                  <input  formControlName=\"nombre\" placeholder=\"Nombre\" class=\"form-control validate\" required>\r\n                </div>\r\n\r\n                <div class=\"input-field col s3\">                \r\n                  <input formControlName=\"apellido\" placeholder=\"Apellido\" class=\"form-control validate\" required>\r\n                </div>\r\n                <div class=\"input-field col s3\">                \r\n                  <input formControlName=\"telefono\" placeholder=\"Teléfono\" type=\"tel\" class=\"form-control validate\" required>\r\n                </div>\r\n\r\n                <div class=\"input-field col s3\">                \r\n                  <input formControlName=\"direccion\" placeholder=\"Dirección\" class=\"form-control validate\" required>\r\n                </div>\r\n             </div> \r\n             \r\n              <!-- Detalles del Envío-->\r\n              <div formGroupName=\"detalles\">\r\n                  <div class=\"input-field col s12\">               \r\n                    <h6 class=\"sectionFormHeader\">Detalles del Envío</h6>\r\n                  </div>\r\n    \r\n                  <div class=\"input-field col s3\">\r\n                    <select formControlName=\"origen\" class=\"browser-default form-control validate\" required>\r\n                      <option disabled>Origen</option>  \r\n                      <option *ngFor=\"let oficina of arrOficinas\" [value]=\"oficina.nombre\">{{oficina.nombre}}</option> \r\n                    </select>\r\n                  </div>\r\n    \r\n                  <div class=\"input-field col s3\">\r\n                    <select formControlName=\"destino\" class=\"browser-default form-control validate\" required>\r\n                      <option disabled>Destino</option>\r\n                      <option *ngFor=\"let oficina of arrOficinas\" [value]=\"oficina.nombre\">{{oficina.nombre}}</option>                    \r\n                    </select>\r\n                  </div>\r\n    \r\n                  <div class=\"input-field col s3\">\r\n                    <input type=\"date\" formControlName=\"fechaEnvio\">\r\n                    <label for=\"fechaEnvio\">Fecha de Envío</label>                               \r\n                  </div>\r\n    \r\n                  <div class=\"input-field col s3\">\r\n                    <select class=\"form-control browser-default\" formControlName=\"tipoEnvio\">\r\n                      <option disabled selected>Tipo de Envío</option>  \r\n                      <option *ngFor=\"let opcion of arrMetodosEnvio\" [value]=\"opcion.nombre\">{{opcion.nombre}}</option>                           \r\n                    </select>\r\n                  </div>\r\n             </div>   \r\n             \r\n             <div formGroupName=\"especificaciones\">\r\n                <div class=\"input-field col s12\">               \r\n                  <h6 class=\"sectionFormHeader\">Específicaciones del Paquete</h6>\r\n                </div>\r\n                               \r\n                <div class=\"input-field col s10\">\r\n                  <textarea formControlName=\"descripcion\" placeholder=\"Descripción del Contenido\" type=\"text\" class=\"form-control validate materialize-textarea\" data-length=\"140\" required></textarea>\r\n                </div>                \r\n           </div> \r\n        </form>    \r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button (click)='insertSubmitDocumentos()' class=\"modal-close btn-flat green-text\" *ngIf=\"documentosForm.status === 'VALID'\">Crear</button>        \r\n        <button (click)='updateSubmit(metodoEnvio)' *ngIf=\"updClicked === true\"  class=\"modal-close btn-flat green-text\" [disabled]=\"!addform.form.valid\">Actualizar</button>        \r\n        <a class=\"modal-close btn-flat red-text\" (click)='cleanForms()'>Cancelar</a>\r\n      </div>\r\n  </div>  <!-- Fin de modal de crear envío (documentos) --> \r\n</body>\r\n"

/***/ }),

/***/ "./src/app/oficina/oficina-envios/oficina-envios.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/oficina/oficina-envios/oficina-envios.component.ts ***!
  \********************************************************************/
/*! exports provided: OficinaEnviosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinaEnviosComponent", function() { return OficinaEnviosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_metodos_envio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore-metodos-envio.service */ "./src/app/services/firestore-metodos-envio.service.ts");
/* harmony import */ var _services_firestore_envios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firestore-envios.service */ "./src/app/services/firestore-envios.service.ts");
/* harmony import */ var _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore-oficina.service */ "./src/app/services/firestore-oficina.service.ts");
/* harmony import */ var _services_calculo_peso_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/calculo-peso.service */ "./src/app/services/calculo-peso.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Firebase

// Servicios




var OficinaEnviosComponent = /** @class */ (function () {
    function OficinaEnviosComponent(authService, _misEnvios, _misMetodosDeEnvio, _misTiendas, pesaje, fb) {
        this.authService = authService;
        this._misEnvios = _misEnvios;
        this._misMetodosDeEnvio = _misMetodosDeEnvio;
        this._misTiendas = _misTiendas;
        this.pesaje = pesaje;
        this.fb = fb;
        this.arr = [];
        this.arrMetodosEnvio = [];
        this.arrOficinas = [];
        this.opcionesME = [];
    }
    OficinaEnviosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firestoreEnviosSubscription = this._misEnvios.getEnvios().subscribe(function (envio) {
            _this.arr = envio;
            console.log(_this.arr);
        });
        // Obtenemos los métodos de envío registrados en la base de datos.
        this.firestoreMetodosEnvioSubscription = this._misMetodosDeEnvio.getMetodosEnvio().subscribe(function (metodoEnvio) {
            _this.arrMetodosEnvio = metodoEnvio;
        });
        // Obtenemos las oficinas registradas en la base de datos.
        this.firestoreOficinasEnvioSubscription = this._misTiendas.getOficinasNRT().subscribe(function (oficina) {
            _this.arrOficinas = oficina;
        });
        // Inicialización de elementos de Materialize.
        $(function () {
            $('.collapsible').collapsible();
            $('.modal').modal();
            $('input#input_text, textarea#textarea2').characterCounter();
            $('.datepicker').datepicker({
                container: 'body'
            });
        });
        this.createForms();
    };
    OficinaEnviosComponent.prototype.ngOnDestroy = function () {
        this.firestoreEnviosSubscription.unsubscribe();
        this.firestoreMetodosEnvioSubscription.unsubscribe();
        this.firestoreOficinasEnvioSubscription.unsubscribe();
    };
    OficinaEnviosComponent.prototype.ngOnChanges = function () {
        this.cleanForms();
    };
    // Función que inicializa los modelos de los formularios para creación de envíos.
    OficinaEnviosComponent.prototype.createForms = function () {
        // Fomulario de creación de envío de paquetes.
        this.paquetesForm = this.fb.group({
            estado: 'Recibido',
            tipo: 'Paquete',
            historial: ({
                estado: 'Recibido',
                fecha: '',
                tienda: ''
            }),
            remitente: this.fb.group({
                nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            destinatario: this.fb.group({
                nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            detalles: this.fb.group({
                origen: ['Origen', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                destino: ['Destino', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                fechaEnvio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                tipoEnvio: ['Tipo de Envío', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            especificaciones: this.fb.group({
                largo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                ancho: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                alto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                peso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                pesoFacturable: 0,
                descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                perecedero: false
            })
        });
        // Fomulario de creación de envío de documentos.
        this.documentosForm = this.fb.group({
            estado: 'Recibido',
            tipo: 'Documentos',
            remitente: this.fb.group({
                nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            destinatario: this.fb.group({
                nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            detalles: this.fb.group({
                origen: ['Origen', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                destino: ['Destino', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                fechaEnvio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                tipoEnvio: ['Tipo de Envío', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            especificaciones: this.fb.group({
                descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            })
        });
    }; // Fin de clase 'createForms'.
    // Función que limpia los modelos de los formularios para creación de envíos.
    OficinaEnviosComponent.prototype.cleanForms = function () {
        // Fomulario de creación de envío de paquetes.
        this.paquetesForm.reset({
            estado: 'Recibido',
            tipo: 'Paquetes',
            remitente: ({
                nombre: '',
                apellido: '',
                telefono: ''
            }),
            destinatario: ({
                nombre: '',
                apellido: '',
                telefono: '',
                direccion: ''
            }),
            detalles: ({
                origen: 'Origen',
                destino: 'Destino',
                fechaEnvio: '',
                tipoEnvio: 'Tipo de Envío'
            }),
            especificaciones: ({
                largo: '',
                ancho: '',
                alto: '',
                peso: '',
                descripcion: '',
                perecedero: false
            }),
        });
        // Fomulario de creación de envío de documentos.
        this.documentosForm.reset({
            estado: 'Recibido',
            tipo: 'Documentos',
            remitente: ({
                nombre: '',
                apellido: '',
                telefono: ''
            }),
            destinatario: ({
                nombre: '',
                apellido: '',
                telefono: '',
                direccion: ''
            }),
            detalles: ({
                origen: 'Origen',
                destino: 'Destino',
                fechaEnvio: '',
                tipoEnvio: 'Tipo de Envío'
            }),
            especificaciones: ({
                descripcion: ''
            })
        });
    };
    // Función que envía el modelo de creación de envíos de paquetes al service para lo ingrese en la BD.
    OficinaEnviosComponent.prototype.insertSubmit = function () {
        console.log('Insertando...');
        var pesoFacturableValue = +this.getPesoFacturable();
        this.paquetesForm.patchValue({
            historial: (_a = {},
                _a[Date.now()] = ({
                    tienda: this.paquetesForm.get('detalles.origen').value,
                    fecha: Date.now(),
                    estado: 'Recibido'
                }),
                _a),
            especificaciones: {
                pesoFacturable: pesoFacturableValue
            }
        });
        this._misEnvios.addEnvio(this.paquetesForm.value);
        this.cleanForms();
        var _a;
    };
    // Función que envía el modelo de creación de envíos de documentos al service para lo ingrese en la BD.
    OficinaEnviosComponent.prototype.insertSubmitDocumentos = function () {
        console.log('Insertando...');
        this.documentosForm.patchValue({
            historial: (_a = {},
                _a[Date.now()] = ({
                    tienda: this.documentosForm.get('detalles.origen').value,
                    fecha: Date.now(),
                    estado: 'Recibido'
                }),
                _a)
        });
        this._misEnvios.addEnvio(this.documentosForm.value);
        this.cleanForms();
        var _a;
    };
    // Función para determinar el peso facturable.
    OficinaEnviosComponent.prototype.getPesoFacturable = function () {
        var pesoDimensional = this.pesaje.getPesoDimensional((this.paquetesForm.get('especificaciones.largo').value *
            this.paquetesForm.get('especificaciones.ancho').value *
            this.paquetesForm.get('especificaciones.alto').value));
        var pesoReal = this.paquetesForm.get('especificaciones.peso').value;
        if (pesoDimensional > pesoReal) {
            return pesoDimensional;
        }
        else {
            return pesoReal;
        }
    };
    OficinaEnviosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficina-envios',
            template: __webpack_require__(/*! ./oficina-envios.component.html */ "./src/app/oficina/oficina-envios/oficina-envios.component.html"),
            styles: [__webpack_require__(/*! ./oficina-envios.component.css */ "./src/app/oficina/oficina-envios/oficina-envios.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_firestore_envios_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreEnviosService"],
            _services_firestore_metodos_envio_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreMetodosEnvioService"], _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreOficinaService"],
            _services_calculo_peso_service__WEBPACK_IMPORTED_MODULE_6__["CalculoPesoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], OficinaEnviosComponent);
    return OficinaEnviosComponent;
}());



/***/ }),

/***/ "./src/app/oficina/oficina-rutas/oficina-rutas.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/oficina/oficina-rutas/oficina-rutas.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header, nav, footer {\r\n    padding-left: 300px;\r\n}\r\n\r\n  @media only screen and (max-width : 992px) {\r\n    header, main, footer {\r\n      padding-left: 0;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/oficina/oficina-rutas/oficina-rutas.component.html":
/*!********************************************************************!*\
  !*** ./src/app/oficina/oficina-rutas/oficina-rutas.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <!-- Barra de Navegación Superior -->\r\n  <app-operaciones-navbar></app-operaciones-navbar>\r\n  <div class=\"row\">\r\n    <!-- Barra de Navegación Lateral -->\r\n    <app-oficina-sidenav></app-oficina-sidenav>\r\n<!-- Lista de oficinas -->\r\n<div class=\"col s9 offset-s3\" *ngIf=\"arr.length>0;else noData\">\r\n      <div class=\"col s12 m7\" *ngFor=\"let item of arr\">\r\n        <div class=\"card horizontal\">\r\n          <div class=\"card-image\">\r\n            <img src={{item.logo}} alt=\"image\">\r\n          </div>\r\n            <div class=\"card-stacked\">\r\n          <div class=\"card-content grey darken-4 white-text\">\r\n            <span class=\"card-title\">{{item.nombre}}</span>\r\n            <p>Dirección: {{item.direccion}}</p>\r\n            <p>Tipo: {{item.tipo}}</p>\r\n            <p>Días Laborables: {{item.horario.diasLaborables}}</p>\r\n            <p>Horario: {{item.horario.horaApertura}}-{{item.horario.horaCierre}}</p>\r\n            <p>Ubicacion Geografica: Latitud {{item.posGeografica.lat}} | Longitud {{item.posGeografica.long}}</p>\r\n          </div>\r\n  </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n    </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/oficina/oficina-rutas/oficina-rutas.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/oficina/oficina-rutas/oficina-rutas.component.ts ***!
  \******************************************************************/
/*! exports provided: OficinaRutasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinaRutasComponent", function() { return OficinaRutasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firestore-oficina.service */ "./src/app/services/firestore-oficina.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Firebase


var OficinaRutasComponent = /** @class */ (function () {
    function OficinaRutasComponent(_data, route) {
        this._data = _data;
        this.route = route;
        this.arr = [];
        // Modelo con la estructura de la clase oficina que obtiene los datos ingresados en el form.
        this.model = { nombre: '', tipo: '', direccion: '', posGeografica: { lat: 0, long: 0 },
            horario: { diasLaborables: '', horaApertura: '', horaCierre: '' }, disponibilidad: { envia: false, recibe: false } };
    }
    OficinaRutasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tipo = this.route.snapshot.params['tipo'];
        // Obtenemos las oficinas registradas en la base de datos.
        this.firebaseSubscription = this._data.getOficinasType(this.tipo).subscribe(function (oficina) {
            _this.arr = oficina;
            console.log(_this.arr);
        });
        // Inicialización de los elementos de Materialize que requieren JQuery para su funcionamiento.
        $(function () {
            $('select').formSelect();
            $('.timepicker').timepicker({
                twelveHour: false,
                container: 'body'
            });
        });
    };
    // Finalizamos la suscripción con el servicio al cerrar el componente.
    OficinaRutasComponent.prototype.ngOnDestroy = function () {
        this.firebaseSubscription.unsubscribe();
    };
    OficinaRutasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficina-rutas',
            template: __webpack_require__(/*! ./oficina-rutas.component.html */ "./src/app/oficina/oficina-rutas/oficina-rutas.component.html"),
            styles: [__webpack_require__(/*! ./oficina-rutas.component.css */ "./src/app/oficina/oficina-rutas/oficina-rutas.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreOficinaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OficinaRutasComponent);
    return OficinaRutasComponent;
}());



/***/ }),

/***/ "./src/app/oficina/oficina-sidenav/oficina-sidenav.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/oficina/oficina-sidenav/oficina-sidenav.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    height: 40px;\r\n}\r\n\r\n.collapsible-header{\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}"

/***/ }),

/***/ "./src/app/oficina/oficina-sidenav/oficina-sidenav.component.html":
/*!************************************************************************!*\
  !*** ./src/app/oficina/oficina-sidenav/oficina-sidenav.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"slide-out\" class=\"sidenav sidenav-fixed yellow darken-2\">\r\n        <!-- Logo -->\r\n        <div class=\"logo center-align\">\r\n            <h4>FastShip</h4>\r\n        </div>\r\n\r\n        <!-- Menú de la Sección -->\r\n        <ul class=\"collapsible grey darken-3 center-align\">\r\n            <li>\r\n                <a class=\"grey darken-4 white-text sidenav-close\" routerLink=\"/oficina\">Oficina</a>    \r\n            </li>  \r\n            <li>\r\n                <div class=\"collapsible-header white-text\">Envíos</div>\r\n                    <div class=\"collapsible-body\">\r\n                        <ul>\r\n                            <li class=\"grey darken-2\">\r\n                                <a class=\"white-text sidenav-close\" routerLink=\"/envios\">Creación de Envíos</a>\r\n                            </li> \r\n                            <li class=\"grey darken-2\">\r\n                                <a class=\"white-text sidenav-close\" routerLink=\"/envios-estados\">Administración de Estados de Envíos</a>\r\n                            </li>                           \r\n                        </ul>\r\n                </div>\r\n            </li>  \r\n            <ul class=\"collapsible grey darken-3 center-align\">\r\n            </ul>            \r\n        </ul>\r\n\r\n        <!-- Menú de Otras Secciones -->        \r\n        <li>\r\n            <a class=\"subheader\">Otras Secciones</a></li>\r\n            <ul class=\"collapsible grey darken-4 white-text center-align\">\r\n                <li>\r\n                    <a class=\"grey darken-4 white-text sidenav-close\" routerLink=\"/operaciones\">Operaciones</a>    \r\n                <li>\r\n        </ul>\r\n        \r\n        \r\n</ul>"

/***/ }),

/***/ "./src/app/oficina/oficina-sidenav/oficina-sidenav.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/oficina/oficina-sidenav/oficina-sidenav.component.ts ***!
  \**********************************************************************/
/*! exports provided: OficinaSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinaSidenavComponent", function() { return OficinaSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OficinaSidenavComponent = /** @class */ (function () {
    function OficinaSidenavComponent() {
    }
    OficinaSidenavComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.sidenav').sidenav();
            $('.collapsible').collapsible();
        });
    };
    OficinaSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficina-sidenav',
            template: __webpack_require__(/*! ./oficina-sidenav.component.html */ "./src/app/oficina/oficina-sidenav/oficina-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./oficina-sidenav.component.css */ "./src/app/oficina/oficina-sidenav/oficina-sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OficinaSidenavComponent);
    return OficinaSidenavComponent;
}());



/***/ }),

/***/ "./src/app/oficina/oficina.component.css":
/*!***********************************************!*\
  !*** ./src/app/oficina/oficina.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header, nav, footer {\r\n    padding-left: 300px;\r\n}\r\n\r\n  @media only screen and (max-width : 992px) {\r\n    header, main, footer {\r\n      padding-left: 0;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/oficina/oficina.component.html":
/*!************************************************!*\
  !*** ./src/app/oficina/oficina.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n<app-operaciones-navbar></app-operaciones-navbar>\r\n\r\n<div class=\"row\">\r\n  <!-- Barra de Navegación Lateral -->\r\n  <app-oficina-sidenav></app-oficina-sidenav>\r\n\r\n        <!-- Cuerpo de la Sección -->\r\n        <div class=\"col s9 offset-s3\">\r\n                <div class=\"col s3\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-image\">\r\n                      <img src=\"assets/img/operaciones/metodosEnvio.jpg\">\r\n                    </div>\r\n                    <div class=\"card-content grey darken-4 white-text\">\r\n                        <span class=\"card-title\">Tiendas</span>\r\n                      <p>Servicios de Entrega con tiempos en tránsito definidos y garantizados.</p>\r\n                    </div>\r\n                    <div class=\"card-action grey darken-4 yellow darken-2-text\">\r\n                        <a routerLink=\"/tiendas/Tienda\">Ver más...</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col s3\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-image\">\r\n                        <img src=\"assets/img/operaciones/oficinas.jpeg\">\r\n                      </div>\r\n                      <div class=\"card-content grey darken-4 white-text\">\r\n                          <span class=\"card-title\">Centro de Distribución</span>\r\n                        <p>Centros de Distribución, Oficinas de Servicio Locales y Hubs.</p>\r\n                      </div>\r\n                      <div class=\"card-action grey darken-4 yellow darken-2-text\">\r\n                          <a routerLink=\"/tiendas/Centro de Distribución\">Ver más...</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col s3\">\r\n                      <div class=\"card\">\r\n                        <div class=\"card-image\">\r\n                          <img src=\"assets/img/operaciones/oficinas.jpeg\">\r\n                        </div>\r\n                        <div class=\"card-content grey darken-4 white-text\">\r\n                            <span class=\"card-title\">Mixtas</span>\r\n                          <p>Centros de Distribución, Oficinas de Servicio Locales y Hubs.</p>\r\n                        </div>\r\n                        <div class=\"card-action grey darken-4 yellow darken-2-text\">\r\n                            <a routerLink=\"/tiendas/Mixta\">Ver más...</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n          </div>\r\n"

/***/ }),

/***/ "./src/app/oficina/oficina.component.ts":
/*!**********************************************!*\
  !*** ./src/app/oficina/oficina.component.ts ***!
  \**********************************************/
/*! exports provided: OficinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinaComponent", function() { return OficinaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OficinaComponent = /** @class */ (function () {
    function OficinaComponent() {
    }
    OficinaComponent.prototype.ngOnInit = function () {
    };
    OficinaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficina',
            template: __webpack_require__(/*! ./oficina.component.html */ "./src/app/oficina/oficina.component.html"),
            styles: [__webpack_require__(/*! ./oficina.component.css */ "./src/app/oficina/oficina.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OficinaComponent);
    return OficinaComponent;
}());



/***/ }),

/***/ "./src/app/operaciones/operaciones-cargamentos/operaciones-cargamentos.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-cargamentos/operaciones-cargamentos.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operaciones/operaciones-cargamentos/operaciones-cargamentos.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-cargamentos/operaciones-cargamentos.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <!-- Barra de Navegación Superior -->\r\n  <app-operaciones-navbar></app-operaciones-navbar>\r\n  <div class=\"row\">\r\n    <!-- Barra de Navegación Lateral -->\r\n    <app-operaciones-sidenav></app-operaciones-sidenav>\r\n\r\n    <!-- Cuerpo de la Sección -->\r\n    <div class=\"col s9 offset-s3\">\r\n        <div class=\"row\">\r\n            <a class=\"btn-large col s3 indigo\">Administración de Cargamentos</a>\r\n            <a class=\"btn-large col s3 offset-s1 green modal-trigger\" href=\"#modalCrearCarga\" materialize=\"modal\">Crear Cargamento</a>\r\n            <a class=\"btn-large col s3 offset-s1 red\">Ver Cargamentos</a>\r\n        </div>\r\n\r\n        <!-- Lista de oficinas -->\r\n        <div class=\"col s9\" *ngIf=\"arr.length>0;else noData\">\r\n          <div class=\"col s4\" *ngFor=\"let item of arr\">\r\n            <div class=\"card grey darken-4 white-text\">\r\n                <span class=\"card-title\"></span>\r\n              <div class=\"card-content\">\r\n                <p>Fecha de Cargga: {{item.fechaCarga}}</p>\r\n                <p>Tipo de Envio: {{item.tipoEnvio}}</p>\r\n                <p>ID Transporte: {{item.idTransp}}</p>\r\n                <p>Numeros de Tracking: {{item.numTracking}}</p>\r\n                <p>Estado: {{item.estado}}</p>\r\n              </div>\r\n              <div class=\"card-action\">\r\n                <!--<a class=\"modal-trigger\" (click)=\"onUpdate(item)\" href=\"#modalCrearOficina\">Modificar</a>\r\n                <a class=\"pointer-delete\" (click)=\"onDelete(item)\"> Eliminar</a>-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n  <!-- Mensaje en caso no existan métodos de envío -->\r\n  <div class=\"container\">\r\n    <ng-template #noData>\r\n\r\n      <h5 class=\"center-align\">No existen oficinas registradas</h5>\r\n    </ng-template>\r\n  </div>\r\n\r\n  <!-- Modal que contiene el formulario de inserción y actualización de métodos de envío. -->\r\n  <div id=\"modalCrearCarga\" class=\"modal modal-fixed-footer\">\r\n    <div class=\"modal-content row\">\r\n      <h4>Creación de Cargamento</h4>\r\n\r\n      <form [formGroup]=\"cargamentoForm\">\r\n\r\n  <!-- Campo de Fecha de Cargamento -->\r\n  <div class=\"input-field col s3\">\r\n    <input type=\"date\" formControlName=\"fechaCarga\">\r\n    <label for=\"fechaCarga\">Fecha de Envío</label>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- Campo del Metodo de Envio -->\r\n        <div class=\"input-field col s3\">\r\n            <select formControlName=\"metodoTransp\"  class=\"form-control browser-default validate\"  >\r\n              <option disabled selected>Tipo de Envio</option>\r\n              <option *ngFor=\"let opcion of   metodoTransp\" [value]=\"opcion\" (click)='selTransporte(idplaca)'>{{opcion}}</option>\r\n\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"input-field col s3\">\r\n          <select formControlName=\"idTransp\"class=\"browser-default form-control validate\" required>\r\n            <option disabled>ID Transporte</option>\r\n            <option *ngFor=\"let transporte of arrTipo \" [value]=\"transporte.idplaca\">{{transporte.idplaca}}</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <table class=\"responsive-table\">\r\n               <thead>\r\n                 <tr>\r\n                     <th>Numero de Traking</th>\r\n                      <th>Tipo de Paquete</th>\r\n                     <th>Tienda Origen</th>\r\n                 </tr>\r\n               </thead>\r\n               <tbody>\r\n                 <tr *ngFor=\"let envios of arrEnvios\">\r\n                   <td>{{envios.id}}</td>\r\n                   <td>{{envios.tipo}}</td>\r\n                   <td>{{envios.detalles.origen}}</td>\r\n                 </tr>\r\n                 <tr>\r\n                   <td>Alan</td>\r\n                   <td>Jellybean</td>\r\n                   <td>$3.76</td>\r\n                 </tr>\r\n               </tbody>\r\n         </table>\r\n\r\n      </form>\r\n      <p>Form value: {{ cargamentoForm.value | json }}</p>\r\n      <p>Form status: {{ cargamentoForm.status | json }}</p>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button (click)='insertSubmit()' type=\"submit\"  *ngIf=\"updClicked === false\" class=\"modal-close btn-flat green-text\">Crear</button>\r\n      <button (click)='updateSubmit(metodoEnvio)' *ngIf=\"updClicked === true\"  class=\"modal-close btn-flat green-text\">Actualizar</button>\r\n      <a class=\"modal-close btn-flat red-text\" (click)='cleanForm()'>Cancelar</a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/operaciones/operaciones-cargamentos/operaciones-cargamentos.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-cargamentos/operaciones-cargamentos.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OperacionesCargamentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesCargamentosComponent", function() { return OperacionesCargamentosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_cargamento_envio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore-cargamento-envio.service */ "./src/app/services/firestore-cargamento-envio.service.ts");
/* harmony import */ var _services_firestore_transportes_envio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firestore-transportes-envio.service */ "./src/app/services/firestore-transportes-envio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Firebase



var OperacionesCargamentosComponent = /** @class */ (function () {
    function OperacionesCargamentosComponent(authService, _data, _misTransporte, _mistipoTransporte, fb) {
        this.authService = authService;
        this._data = _data;
        this._misTransporte = _misTransporte;
        this._mistipoTransporte = _mistipoTransporte;
        this.fb = fb;
        this.arr = [];
        this.arrTransporte = [];
        this.arrTipo = [];
        this.metodoTransp = ['FastShip por tren', 'Fastship - 12 horas', 'Fastship - 24 horas', 'Fastship - 48 horas'];
    }
    OperacionesCargamentosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Obtenemos los métodos envío registrados en la base de datos.
        this.firebaseSubscription = this._data.getCargamento().subscribe(function (cargamento) {
            _this.arr = cargamento;
            console.log(_this.arr);
        });
        // Obtenemos los Transportes
        this.firestoreTransportesSubscription = this._misTransporte.getTransporte().subscribe(function (transporte) {
            _this.arrTipo = transporte;
        });
        // Inicialización de los elementos de Materialize que requieren Jquery.
        $(function () {
            $('.collapsible').collapsible();
            $('select').formSelect();
            $('.modal').modal();
            $('.datepicker').datepicker({
                container: 'body'
            });
        });
        this.createForm();
    };
    /////////////////////////
    OperacionesCargamentosComponent.prototype.selTransporte = function (idplaca) {
        var _this = this;
        this.firestoretipoTransportesSubscription = this._mistipoTransporte.getTransporteType(idplaca).subscribe(function (transporte) {
            _this.arrTipo = transporte;
        });
    };
    ///////////////////////
    // Finalizamos la suscripción con el servicio al cerrar el componente.
    OperacionesCargamentosComponent.prototype.ngOnDestroy = function () {
        this.firebaseSubscription.unsubscribe();
        this.firestoreTransportesSubscription.unsubscribe();
    };
    OperacionesCargamentosComponent.prototype.ngOnChanges = function () {
        this.cleanForm();
    };
    OperacionesCargamentosComponent.prototype.createForm = function () {
        this.cargamentoForm = this.fb.group({
            fechaCarga: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoEnvio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idTransp: ['Transporte', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            numTracking: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoPaquete: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    OperacionesCargamentosComponent.prototype.insertSubmit = function () {
        console.log('Insertando...');
        this._data.addCargamento(this.cargamentoForm.value);
    };
    OperacionesCargamentosComponent.prototype.cleanForm = function () {
        this.cargamentoForm.reset();
    };
    OperacionesCargamentosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operaciones-cargamentos',
            template: __webpack_require__(/*! ./operaciones-cargamentos.component.html */ "./src/app/operaciones/operaciones-cargamentos/operaciones-cargamentos.component.html"),
            styles: [__webpack_require__(/*! ./operaciones-cargamentos.component.css */ "./src/app/operaciones/operaciones-cargamentos/operaciones-cargamentos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_firestore_cargamento_envio_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreCargamentoEnvioService"],
            _services_firestore_transportes_envio_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreTransportesEnvioService"], _services_firestore_transportes_envio_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreTransportesEnvioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], OperacionesCargamentosComponent);
    return OperacionesCargamentosComponent;
}());



/***/ }),

/***/ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer-delete {\r\n    cursor: pointer;\r\n}\r\n\r\nheader, nav, footer {\r\n    padding-left: 300px;\r\n}\r\n\r\n@media only screen and (max-width : 992px) {\r\n    header, main, footer {\r\n      padding-left: 0;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n<app-operaciones-navbar></app-operaciones-navbar>    \r\n\r\n<div class=\"row\">\r\n  <!-- Barra de Navegación Lateral -->\r\n  <app-operaciones-sidenav></app-operaciones-sidenav>      \r\n\r\n      <!-- Cuerpo de la Sección -->\r\n      <div class=\"col s9 offset-s3\">\r\n          <div class=\"row\">\r\n              <a class=\"btn-large col s3 indigo\">Métodos de Envío</a>   \r\n              <a class=\"btn-large col s3 offset-s1 green modal-trigger\" href=\"#modalCrearME\" materialize=\"modal\">Crear Métodos de Envio</a>           \r\n              <a class=\"btn-large col s3 offset-s1 red\">Eliminar Método de Envio</a>     \r\n          </div>   \r\n          <hr>\r\n          <!-- Tabla con los métodos de envío -->\r\n          <div class=\"col s11\" *ngIf=\"arr.length>0;else noData\">\r\n              <table class=\"bordered highlight responsive-table\">\r\n                  <thead>\r\n                    <tr>\r\n                        <th>Nombre</th>\r\n                        <th>Tipos de Transporte</th>\r\n                        <th>Modificar</th>\r\n                        <th>Eliminar</th>\r\n                    </tr>\r\n                  </thead>\r\n          \r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of arr\">\r\n                      <td>\r\n                          {{item.nombre}}\r\n                      </td>\r\n                      <td> \r\n                        <i class=\"material-icons\" *ngIf=\"item.tipos.aire==true\">airplanemode_active</i> \r\n                        <i class=\"material-icons\" *ngIf=\"item.tipos.mar==true\">directions_boat</i> \r\n                        <i class=\"material-icons\" *ngIf=\"item.tipos.tierra==true\">local_shipping</i> \r\n                      </td>\r\n                      <td>\r\n                        <a class=\"modal-trigger\" (click)=\"onUpdate(item)\" href=\"#modalCrearME\">\r\n                          <i class=\"material-icons black-text\">settings_application</i> \r\n                        </a>\r\n                      </td>\r\n                      <td>\r\n                        <a class=\"pointer-delete\" (click)=\"onDelete(item)\">\r\n                          <i class=\"material-icons black-text center-align\">delete</i> \r\n                        </a>\r\n                      </td>                \r\n                </table>\r\n\r\n          </div>     \r\n          \r\n      \r\n      </div>\r\n\r\n    </div>\r\n\r\n  <!-- Mensaje en caso no existan métodos de envío -->\r\n  <div class=\"container\">\r\n    <ng-template #noData>\r\n      \r\n      <h5 class=\"center-align\">No existen métodos de envío registrados</h5>\r\n    </ng-template>\r\n  </div>\r\n  \r\n\r\n    <!-- Modal que contiene el formulario de inserción y actualización de métodos de envío. -->\r\n  <div id=\"modalCrearME\" class=\"modal modal-fixed-footer\">\r\n      <div class=\"modal-content row\">\r\n        <h4>Crear Método de Envío</h4>\r\n        <p>Los métodos de envio son los niveles de servicio que son usador por los clientes. </p>\r\n        <form [formGroup]=\"metodosEnvioForm\"> \r\n            <div class=\"input-field col s12\">\r\n                <input formControlName=\"nombre\" type=\"text\" class=\"validate\">\r\n                <label for=\"nombre\">Nombre</label>\r\n            </div>         \r\n            <div class=\"input-field col s6\">                         \r\n                  <select class=\"form-control browser-default\" formControlName=\"tiempo\">\r\n                      <option value=\"Horas\" disabled selected>Horas</option>\r\n                      <option *ngFor=\"let opcion of opcionesTiempo\" [value]=\"opcion\">{{opcion}}</option>\r\n                  </select>                      \r\n              </div>\r\n              <div class=\"col s6\" formGroupName=\"tipos\">\r\n                  <h5>Métodos de Envío</h5>\r\n                  <p>\r\n                   <label>\r\n                      <input type=\"checkbox\" class=\"form-control\" formControlName=\"tierra\"/>\r\n                      <span>Tierra</span>\r\n                    </label>\r\n                  </p>       \r\n                  <p>\r\n                    <label>\r\n                        <input type=\"checkbox\" class=\"form-control\" formControlName=\"mar\"/>\r\n                        <span>Mar</span>\r\n                    </label>\r\n                     </p>\r\n                  <p>\r\n                    <label>\r\n                        <input type=\"checkbox\" formControlName=\"aire\"/>\r\n                        <span>Aire</span>\r\n                      </label>\r\n                    </p>                                 \r\n              </div>                            \r\n        </form>               \r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button (click)='insertSubmit()' type=\"submit\"  *ngIf=\"updClicked === false\" class=\"modal-close btn-flat green-text\">Crear</button>        \r\n        <button (click)='updateSubmit()' *ngIf=\"updClicked === true\"  class=\"modal-close btn-flat green-text\">Actualizar</button>        \r\n        <a class=\"modal-close btn-flat red-text\" (click)='cleanForm()'>Cancelar</a>\r\n      </div>\r\n      \r\n    </div>      "

/***/ }),

/***/ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OperacionesMetodosEnvioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesMetodosEnvioComponent", function() { return OperacionesMetodosEnvioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_metodos_envio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/metodos-envio */ "./src/app/classes/metodos-envio.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_metodos_envio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firestore-metodos-envio.service */ "./src/app/services/firestore-metodos-envio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Firebase

// Servicios

var OperacionesMetodosEnvioComponent = /** @class */ (function () {
    function OperacionesMetodosEnvioComponent(authService, _data, fb) {
        this.authService = authService;
        this._data = _data;
        this.fb = fb;
        this.arr = [];
        this.updClicked = false;
        this.opcionesTiempo = ['12 horas', '24 horas', '48 horas'];
    }
    OperacionesMetodosEnvioComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Obtenemos los métodos envío registrados en la base de datos.
        this.firebaseSubscription = this._data.getMetodosEnvio().subscribe(function (metodoEnvio) {
            _this.arr = metodoEnvio;
        });
        // Inicialización de los elementos de Materialize que requieren Jquery.
        $(function () {
            $('.collapsible').collapsible();
            $('select').formSelect();
            $('.dropdown-trigger').dropdown();
            $('.modal').modal();
        });
        this.createForm();
    };
    // Finalizamos la suscripción con el servicio al cerrar el componente.
    OperacionesMetodosEnvioComponent.prototype.ngOnDestroy = function () {
        this.firebaseSubscription.unsubscribe();
    };
    OperacionesMetodosEnvioComponent.prototype.ngOnChanges = function () {
        this.cleanForm();
    };
    // Función que envía el modelo a la función de insertar método de envío en el service.
    OperacionesMetodosEnvioComponent.prototype.insertSubmit = function () {
        console.log('Insertando...');
        this._data.addMetodosEnvio(this.metodosEnvioForm.value);
        this.newMetodoEnvio = new _classes_metodos_envio__WEBPACK_IMPORTED_MODULE_1__["MetodosEnvio"];
    };
    OperacionesMetodosEnvioComponent.prototype.createForm = function () {
        this.metodosEnvioForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tiempo: ['Horas', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipos: this.fb.group({
                tierra: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mar: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                aire: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    };
    OperacionesMetodosEnvioComponent.prototype.onDelete = function (metodoEnvio) {
        if (confirm('¿Está seguro que desea borrar este método de envío?')) {
            this._data.deleteMetodosEnvio(metodoEnvio);
        }
    };
    OperacionesMetodosEnvioComponent.prototype.onUpdate = function (metodoEnvio) {
        this.iME = metodoEnvio.id;
        this.updClicked = true;
        this.metodosEnvioForm.patchValue({
            nombre: metodoEnvio.nombre,
            tiempo: metodoEnvio.tiempo,
            tipos: ({
                tierra: metodoEnvio.tipos.tierra,
                mar: metodoEnvio.tipos.mar,
                aire: metodoEnvio.tipos.aire
            })
        });
    };
    OperacionesMetodosEnvioComponent.prototype.updateSubmit = function () {
        this._data.updateMetodosEnvio(this.iME, this.metodosEnvioForm.value);
        this.cleanForm();
    };
    OperacionesMetodosEnvioComponent.prototype.cleanForm = function () {
        this.metodosEnvioForm.reset();
    };
    OperacionesMetodosEnvioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operaciones-metodos-envio',
            template: __webpack_require__(/*! ./operaciones-metodos-envio.component.html */ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.html"),
            styles: [__webpack_require__(/*! ./operaciones-metodos-envio.component.css */ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_firestore_metodos_envio_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreMetodosEnvioService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], OperacionesMetodosEnvioComponent);
    return OperacionesMetodosEnvioComponent;
}());



/***/ }),

/***/ "./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer-cursor {\r\n    cursor: pointer;\r\n}\r\n\r\n.email{\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}"

/***/ }),

/***/ "./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación -->\r\n\r\n  <div class=\"navbar-fixed\">\r\n\r\n      <ul id=\"dropdown1\" class=\"dropdown-content grey darken-4 yellow-text text-darken-2\">\r\n          <li><a (click)='onClickLogout()'>Cerrar Sesión</a></li>\r\n          \r\n        </ul>\r\n        \r\n\r\n    <nav class=\"yellow darken-2\">\r\n        <a href=\"#\" data-target=\"slide-out\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>  \r\n\r\n        <div class=\"nav-wrapper row\">\r\n          <form class=\"col s5 offset-s3\">\r\n            <div class=\"input-field\">\r\n              <input class=\"center-align grey darken-4 white-text\" placeholder=\"Ingrese un número de tracking, camión, etc.\" id=\"search\" type=\"search\" required>              \r\n              <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\r\n              <i class=\"material-icons\">close</i>\r\n            </div>\r\n          </form>\r\n\r\n          <ul class=\"right hide-on-med-and-down\">            \r\n            <!-- Dropdown Trigger -->\r\n            <li><a class=\"dropdown-trigger\" href=\"#!\" data-target=\"dropdown1\"> <span class=\"black-text email\">{{email}} </span> <i class=\"material-icons black-text right\">arrow_drop_down</i></a></li>\r\n          </ul>\r\n\r\n          \r\n        </div>\r\n      </nav>\r\n    </div> <br>"

/***/ }),

/***/ "./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.ts ***!
  \********************************************************************************/
/*! exports provided: OperacionesNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesNavbarComponent", function() { return OperacionesNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Firebase

var OperacionesNavbarComponent = /** @class */ (function () {
    function OperacionesNavbarComponent(authService) {
        this.authService = authService;
    }
    OperacionesNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Obtenemos el e-mail del usuario logueado.
        this.authService.checkLogin().subscribe(function (authFB) {
            if (authFB) {
                _this.email = authFB.email;
            }
        });
        $(function () {
            $('.dropdown-trigger').dropdown({
                coverTrigger: false
            });
        });
    };
    // Función que al ser activada, cierra la sesión de Firebase.
    OperacionesNavbarComponent.prototype.onClickLogout = function () {
        this.authService.logout();
    };
    OperacionesNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operaciones-navbar',
            template: __webpack_require__(/*! ./operaciones-navbar.component.html */ "./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.html"),
            styles: [__webpack_require__(/*! ./operaciones-navbar.component.css */ "./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], OperacionesNavbarComponent);
    return OperacionesNavbarComponent;
}());



/***/ }),

/***/ "./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer-delete {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <!-- Barra de Navegación Superior -->\r\n  <app-operaciones-navbar></app-operaciones-navbar> \r\n  <div class=\"row\">\r\n    \r\n    <!-- Barra de Navegación Lateral -->\r\n    <app-operaciones-sidenav></app-operaciones-sidenav>      \r\n\r\n        <!-- Cuerpo de la Sección -->\r\n        <div class=\"col s9 offset-s3\">\r\n            <div class=\"row\">\r\n                <a class=\"btn-large col s3 indigo\">Administración de Oficinas</a>   \r\n                <a class=\"btn-large col s3 offset-s1 green modal-trigger\" href=\"#modalCrearOficina\" materialize=\"modal\">Crear Oficina</a>           \r\n                <a class=\"btn-large col s3 offset-s1 red\">Eliminar Oficina</a>     \r\n            </div>   \r\n            <hr>\r\n            <!-- Lista de oficinas -->\r\n            <div class=\"col s9\" *ngIf=\"arr.length>0;else noData\">\r\n                  <div class=\"col s4\" *ngFor=\"let item of arr\">\r\n                    <div class=\"card grey darken-4 white-text\">\r\n                        <span class=\"card-title\">{{item.nombre}}</span>\r\n                      <div class=\"card-content\">                        \r\n                        <p>Dirección: {{item.direccion}}</p>\r\n                        <p>Tipo: {{item.tipo}}</p>\r\n                        <p>Días Laborables: {{item.horario.diasLaborables}}</p>\r\n                        <p>Horario: {{item.horario.horaApertura}}-{{item.horario.horaCierre}}</p>\r\n                      </div>\r\n                      <div class=\"card-action\">\r\n                        <a class=\"modal-trigger\" (click)=\"onUpdate(item)\" href=\"#modalCrearOficina\">Modificar</a>\r\n                        <a class=\"pointer-delete\" (click)=\"onDelete(item)\"> Eliminar</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n      </div>\r\n\r\n    <!-- Mensaje en caso no existan métodos de envío -->\r\n    <div class=\"container\">\r\n      <ng-template #noData>\r\n        \r\n        <h5 class=\"center-align\">No existen oficinas registradas</h5>\r\n      </ng-template>\r\n    </div>\r\n\r\n      <!-- Modal que contiene el formulario de inserción y actualización de métodos de envío. -->\r\n    <div id=\"modalCrearOficina\" class=\"modal modal-fixed-footer\">\r\n        <div class=\"modal-content row\">\r\n          <h4>Creación de Oficina</h4>\r\n          <form name='formAddOficina' #addform=\"ngForm\">\r\n              <!-- Campo de Nombre de la Oficina -->\r\n              <div class=\"input-field col s6\">\r\n                  <input [(ngModel)]=\"model.nombre\" name=\"nombre\" type=\"text\" class=\"form-control validate\" required #nombre=\"ngModel\">\r\n                  <label for=\"nombre\">Nombre de la Oficina</label>\r\n              </div>\r\n              \r\n              <!-- Campo de Tipo de la Oficina -->\r\n              <div class=\"input-field col s6\">\r\n                  <select [(ngModel)]=\"model.tipo\" class=\"form-control validate\" name=\"tipo\" required #tipo=\"ngModel\">\r\n                      <option disabled></option>\r\n                      <option value=\"Centro de Distribución\">Centro de Distribución</option>\r\n                      <option value=\"Tienda\">Tienda</option>\r\n                      <option value=\"Mixta\">Mixta</option>\r\n                    </select>\r\n                    <label>Tipo</label>\r\n              </div>\r\n\r\n              <!-- Campo de Dirección de la Oficina -->\r\n              <div class=\"input-field col s6\">\r\n                  <input [(ngModel)]=\"model.direccion\"  name=\"direccion\" class=\"form-control validate\" type=\"text\" required #direccion=\"ngModel\">\r\n                  <label for=\"direccion\">Dirección</label>\r\n              </div> <br>\r\n\r\n               <!-- Poscisión Geográfica -->              \r\n              <div class=\"input-field col s3\">                \r\n                  <input [(ngModel)]=\"model.posGeografica.lat\" name=\"latitud\" type=\"number\" class=\"form-control validate\" required step=\"any\" #latitud=\"ngModel\">\r\n                  <label for=\"latitud\">Latitud</label>                               \r\n              </div>\r\n\r\n              <div class=\"input-field col s3\">                \r\n                  <input [(ngModel)]=\"model.posGeografica.long\" name=\"longitud\" type=\"number\" step=\"any\" class=\"form-control validate\" required #longitud=\"ngModel\">\r\n                  <label for=\"longitud\">Longitud</label>                               \r\n              </div>\r\n              \r\n              <!-- Días Laborables -->              \r\n              <div class=\"input-field col s6\">\r\n                  <select [(ngModel)]=\"model.horario.diasLaborables\" name=\"diasLaborables\" class=\"form-control validate\" required #diasLaborables=\"ngModel\">\r\n                      <option disabled></option>\r\n                      <option value=\"Lunes-Viernes\">Lunes-Viernes</option>\r\n                      <option value=\"Lunes-Sábado\">Lunes-Sábado</option>\r\n                      <option value=\"Todos los Días\">Todos los Días</option>\r\n                    </select>\r\n                    <label>Días Laborables</label>\r\n              </div> <br>\r\n\r\n              <!-- Hora de Apertura --> \r\n              <div class=\"input-field col s3\">\r\n                  <input [(ngModel)]=\"model.horario.horaApertura\" type=\"time\" name=\"horaApertura\" class=\"form-control validate\" required #horaApertura=\"ngModel\">\r\n                  <label>Hora de Apertura</label>                                  \r\n              </div>\r\n\r\n              <!-- Hora de Cierre --> \r\n              <div class=\"input-field col s3\">\r\n                  <input [(ngModel)]=\"model.horario.horaCierre\" type=\"time\" name=\"horaCierre\" class=\"form-control validate\" required #horaCierre=\"ngModel\">\r\n                <label>Hora de Cierre</label>                                  \r\n              </div>\r\n\r\n            <!-- Disponibilidad --> \r\n            <label>Disponibilidad</label> \r\n            <p>\r\n              <label>\r\n                <input [(ngModel)]=\"model.disponibilidad.envia\" type=\"checkbox\" name=\"envia\" class=\"form-control validate\" #envia=\"ngModel\"/>\r\n                <span>Envía</span>\r\n              </label>\r\n            </p>\r\n              <label>\r\n                  <input [(ngModel)]=\"model.disponibilidad.recibe\" type=\"checkbox\" name=\"recibe\" class=\"form-control validate\" #recibe=\"ngModel\"/>\r\n                  <span>Recibe</span>\r\n              </label>                                        \r\n          </form>          \r\n                        \r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button (click)='insertSubmit()' *ngIf=\"updClicked === false\" class=\"modal-close btn-flat green-text\" [disabled]=\"!addform.form.valid\">Crear</button>        \r\n          <button (click)='updateSubmit(metodoEnvio)' *ngIf=\"updClicked === true\"  class=\"modal-close btn-flat green-text\" [disabled]=\"!addform.form.valid\">Actualizar</button>        \r\n          <a class=\"modal-close btn-flat red-text\" (click)='cleanForm()'>Cancelar</a>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n</body>      "

/***/ }),

/***/ "./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.ts ***!
  \************************************************************************************/
/*! exports provided: OperacionesOficinasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesOficinasComponent", function() { return OperacionesOficinasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firestore-oficina.service */ "./src/app/services/firestore-oficina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Firebase


var OperacionesOficinasComponent = /** @class */ (function () {
    function OperacionesOficinasComponent(authService, _data) {
        this.authService = authService;
        this._data = _data;
        this.arr = [];
        this.updClicked = false;
        // Modelo con la estructura de la clase oficina que obtiene los datos ingresados en el form.
        this.model = { nombre: '', tipo: '', direccion: '', posGeografica: { lat: 0, long: 0 },
            horario: { diasLaborables: '', horaApertura: '', horaCierre: '' }, disponibilidad: { envia: false, recibe: false } };
    }
    OperacionesOficinasComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Obtenemos las oficinas registradas en la base de datos.
        this.firebaseSubscription = this._data.getOficinas().subscribe(function (oficina) {
            _this.arr = oficina;
            console.log(_this.arr);
        });
        // Inicialización de los elementos de Materialize que requieren JQuery para su funcionamiento.
        $(function () {
            $('select').formSelect();
            $('.modal').modal();
            $('.timepicker').timepicker({
                twelveHour: false,
                container: 'body'
            });
        });
    };
    // Finalizamos la suscripción con el servicio al cerrar el componente.
    OperacionesOficinasComponent.prototype.ngOnDestroy = function () {
        this.firebaseSubscription.unsubscribe();
    };
    // Función que envía el modelo a la función de insertar oficina en el service.
    OperacionesOficinasComponent.prototype.insertSubmit = function () {
        console.log(this.model);
        this._data.addOficina(this.model);
        this.cleanForm();
    };
    // Función que desactiva el botón de submit de crear y activa el de actualizar.
    OperacionesOficinasComponent.prototype.onUpdate = function (oficina) {
        this.idOficina = oficina.id;
        this.model.nombre = oficina.nombre;
        this.model.tipo = oficina.tipo;
        this.model.direccion = oficina.direccion;
        this.model.tipo = oficina.tipo;
        this.model.posGeografica.lat = oficina.posGeografica.lat;
        this.model.posGeografica.long = oficina.posGeografica.long;
        this.model.horario.diasLaborables = oficina.horario.diasLaborables;
        this.model.horario.horaApertura = oficina.horario.horaApertura;
        this.model.horario.horaCierre = oficina.horario.horaCierre;
        this.model.disponibilidad.envia = oficina.disponibilidad.envia;
        this.model.disponibilidad.recibe = oficina.disponibilidad.recibe;
        this.updClicked = true;
    };
    // Función que limpia los elementos del modelo.
    OperacionesOficinasComponent.prototype.cleanForm = function () {
        this.model.direccion = '';
        this.model.disponibilidad.envia = false;
        this.model.disponibilidad.recibe = false;
        this.model.horario.diasLaborables = '';
        this.model.horario.horaApertura = '';
        this.model.horario.horaCierre = '';
        this.model.posGeografica = { lat: 0, long: 0 };
        this.model.nombre = '';
        this.model.tipo = '';
        this.updClicked = false;
    };
    OperacionesOficinasComponent.prototype.onDelete = function (metodoEnvio) {
        if (confirm('¿Está seguro que desea borrar esta oficina?')) {
            this._data.deleteOficina(metodoEnvio);
        }
    };
    OperacionesOficinasComponent.prototype.updateSubmit = function () {
        this._data.updateOficina(this.idOficina, this.model);
    };
    OperacionesOficinasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operaciones-oficinas',
            template: __webpack_require__(/*! ./operaciones-oficinas.component.html */ "./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.html"),
            styles: [__webpack_require__(/*! ./operaciones-oficinas.component.css */ "./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreOficinaService"]])
    ], OperacionesOficinasComponent);
    return OperacionesOficinasComponent;
}());



/***/ }),

/***/ "./src/app/operaciones/operaciones-rutas/operaciones-rutas.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-rutas/operaciones-rutas.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operaciones/operaciones-rutas/operaciones-rutas.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-rutas/operaciones-rutas.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n<app-operaciones-navbar></app-operaciones-navbar>    \r\n\r\n<div class=\"row\">\r\n  <!-- Barra de Navegación Lateral -->\r\n  <app-operaciones-sidenav></app-operaciones-sidenav>      \r\n\r\n      <!-- Cuerpo de la Sección -->\r\n      <div class=\"col s9 offset-s3\">\r\n        <div class=\"row\">\r\n          <a class=\"btn-large col s3 offset-s1 green modal-trigger\" href=\"#modalruta\" materialize=\"modal\">Crear Ruta</a>      \r\n      </div>   \r\n      \r\n      <!-- Lista de oficinas -->\r\n      <div class=\"col s9\" *ngIf=\"arr.length>0;else noData\">\r\n        <div class=\"col s4\" *ngFor=\"let item of arr\">\r\n          <div class=\"card grey darken-4 white-text\">\r\n              <span class=\"card-title\"></span>\r\n            <div class=\"card-content\">                        \r\n              <p>Tienda de Origen: {{item.tiendaOrigen}}</p>\r\n              <p>Tienda de Destino: {{item.tiendaDestino}}</p>\r\n              <p>Opcion de Sub-ruta #1: {{item.Opcion1}}</p>\r\n              <p>Opcion de Sub-ruta #2: {{item.Opcion2}}</p>\r\n              <p>Opcion de Sub-ruta #3: {{item.Opcion3}}</p>\r\n              <p>Opcion de Sub-ruta #4: {{item.Opcion4}}</p>\r\n            </div>\r\n            <div class=\"card-action\">\r\n              <a class=\"modal-trigger\" (click)=\"onUpdate(item)\" href=\"#modalruta\">Modificar</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Mensaje en caso no existan métodos de envío -->\r\n  <div class=\"container\">\r\n    <ng-template #noData>\r\n      \r\n      <h5 class=\"center-align\">No existen Rutas registradas</h5>\r\n    </ng-template>\r\n  </div>\r\n  \r\n\r\n    <!-- Modal que contiene el formulario de inserción y actualización de métodos de envío. -->\r\n  <div id=\"modalruta\" class=\"modal modal-fixed-footer\">\r\n      <div class=\"modal-content row\">\r\n        <h4>Crear Ruta</h4>\r\n        \r\n        <form [formGroup]=\"Rutaform\">\r\n\r\n              <div class=\"input-field col s6\">\r\n                  <div class=\"input-field col s3\">\r\n                      <select formControlName=\"tiendaOrigen\" class=\"browser-default form-control validate\" required>\r\n                        <option disabled>Origen</option>  \r\n                        <option *ngFor=\"let oficina of arrOficinas\" [value]=\"oficina.nombre\" id=\"tiendaOrigen\">{{oficina.nombre}}</option> \r\n                      </select>\r\n                    </div>\r\n\r\n                    <div class=\"input-field col s3\">\r\n                        <select formControlName=\"tiendaDestino\" class=\"browser-default form-control validate\" required>\r\n                          <option disabled>Destino</option>  \r\n                          <option *ngFor=\"let oficina of arrOficinas\" [value]=\"oficina.nombre\" id=\"tiendaDestino\">{{oficina.nombre}}</option> \r\n                        </select>\r\n                      </div>\r\n              </div>\r\n\r\n             \r\n          <div class=\"input-field col s3\">\r\n            <select formControlName=\"Opcion1\" class=\"browser-default form-control validate\" required>\r\n              <option disabled>Elejir sub-rutas</option>  \r\n              <option  *ngFor=\"let subruta of arrSubruta\" [value]=\"subruta.nombreRuta\" id=\"Opcion1\" >{{subruta.nombreRuta}}</option> \r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"input-field col s3\">\r\n            <select formControlName=\"Opcion2\" class=\"browser-default form-control validate\">\r\n              <option disabled>Elejir sub-rutas</option>  \r\n              <option  *ngFor=\"let subruta of arrSubruta\" [value]=\"subruta.nombreRuta\" id=\"Opcion2\" >{{subruta.nombreRuta}}</option> \r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"input-field col s3\">\r\n            <select formControlName=\"Opcion3\" class=\"browser-default form-control validate\" >\r\n              <option disabled>Elejir sub-rutas</option>  \r\n              <option  *ngFor=\"let subruta of arrSubruta\" [value]=\"subruta.nombreRuta\" id=\"Opcion3\" >{{subruta.nombreRuta}}</option> \r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"input-field col s3\">\r\n            <select formControlName=\"Opcion4\" class=\"browser-default form-control validate\">\r\n              <option disabled>Elejir sub-rutas</option>  \r\n              <option  *ngFor=\"let subruta of arrSubruta\" [value]=\"subruta.nombreRuta\" id=\"Opcion4\" >{{subruta.nombreRuta}}</option> \r\n            </select>\r\n          </div>\r\n\r\n        </form>       \r\n        <p>Form value: {{ Rutaform.value | json }}</p>\r\n        <p>Form status: {{ Rutaform.status | json }}</p>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button (click)='insertSubmit()' type=\"submit\" *ngIf=\"Rutaform.status === 'VALID'\" class=\"modal-close btn-flat green-text\">Crear</button>        \r\n        <button (click)='updateSubmit(metodoEnvio)' *ngIf=\"updClicked === true\"  class=\"modal-close btn-flat green-text\">Actualizar</button>        \r\n        <a class=\"modal-close btn-flat red-text\" (click)='cleanForm()'>Cancelar</a>\r\n      </div>\r\n      \r\n    </div>      "

/***/ }),

/***/ "./src/app/operaciones/operaciones-rutas/operaciones-rutas.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-rutas/operaciones-rutas.component.ts ***!
  \******************************************************************************/
/*! exports provided: OperacionesRutasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesRutasComponent", function() { return OperacionesRutasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_rutas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore-rutas.service */ "./src/app/services/firestore-rutas.service.ts");
/* harmony import */ var _services_firestore_subrutas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firestore-subrutas.service */ "./src/app/services/firestore-subrutas.service.ts");
/* harmony import */ var _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore-oficina.service */ "./src/app/services/firestore-oficina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Firebase




//Services
var OperacionesRutasComponent = /** @class */ (function () {
    function OperacionesRutasComponent(authService, _data, _subruta, _misTiendas, fb) {
        this.authService = authService;
        this._data = _data;
        this._subruta = _subruta;
        this._misTiendas = _misTiendas;
        this.fb = fb;
        this.arr = [];
        this.arrSubruta = [];
        this.arrOficinas = [];
        this.updClicked = false;
    }
    OperacionesRutasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseSubscription = this._data.getRutas().subscribe(function (Ruta) {
            _this.arr = Ruta;
            console.log(_this.arr);
        });
        this.firestoreSubrutaSubscription = this._subruta.getSubRutas().subscribe(function (subruta) {
            _this.arrSubruta = subruta;
            console.log(_this.arrSubruta);
        });
        this.firestoreOficinasEnvioSubscription = this._misTiendas.getOficinasNRT().subscribe(function (oficina) {
            _this.arrOficinas = oficina;
        });
        $(function () {
            $('.modal').modal();
            $('select').formSelect();
        });
        this.createForm();
    };
    OperacionesRutasComponent.prototype.createForm = function () {
        this.Rutaform = this.fb.group({
            Opcion1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Opcion2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
            Opcion3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
            Opcion4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]],
            tiendaOrigen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tiendaDestino: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    OperacionesRutasComponent.prototype.insertSubmit = function () {
        console.log('Insertando...');
        this._data.addRutas(this.Rutaform.value);
    };
    OperacionesRutasComponent.prototype.onUpdate = function (Ruta) {
        this.iME = Ruta.id;
        this.updClicked = true;
        this.Rutaform.patchValue({
            tiendaOrigen: Ruta.tiendaOrigen,
            tiendaDestino: Ruta.tiendaDestino,
        });
    };
    OperacionesRutasComponent.prototype.updateSubmit = function () {
        this._data.updateRuta(this.iME, this.Rutaform.value);
        this.cleanForm();
    };
    OperacionesRutasComponent.prototype.cleanForm = function () {
        this.Rutaform.reset();
    };
    OperacionesRutasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operaciones-rutas',
            template: __webpack_require__(/*! ./operaciones-rutas.component.html */ "./src/app/operaciones/operaciones-rutas/operaciones-rutas.component.html"),
            styles: [__webpack_require__(/*! ./operaciones-rutas.component.css */ "./src/app/operaciones/operaciones-rutas/operaciones-rutas.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_firestore_rutas_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreRutasService"], _services_firestore_subrutas_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreSubrutasService"], _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreOficinaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], OperacionesRutasComponent);
    return OperacionesRutasComponent;
}());



/***/ }),

/***/ "./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    height: 40px;\r\n}\r\n\r\n.collapsible-header{\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}"

/***/ }),

/***/ "./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"slide-out\" class=\"sidenav sidenav-fixed yellow darken-2\">\r\n    <div class=\"logo center-align\">\r\n        <h4>FastShip</h4>\r\n    </div>\r\n\r\n    <ul class=\"collapsible grey darken-3 center-align\">\r\n            <li>\r\n                <a class=\"grey darken-4 white-text sidenav-close\" routerLink=\"/operaciones\">Operaciones</a>\r\n            <li>\r\n                <a class=\"white-text sidenav-close\" routerLink=\"/metodosEnvio\">Métodos de Envio</a>\r\n            </li>\r\n            <li>\r\n                <a class=\"white-text sidenav-close\" routerLink=\"/admOficinas\">Administración de Oficinas</a>\r\n            </li>\r\n            <li>\r\n                <div class=\"collapsible-header white-text\"> Administración de Rutas</div>\r\n                    <div class=\"collapsible-body\">\r\n                        <ul>\r\n                            <li class=\"grey darken-2\">\r\n                                <a class=\"white-text sidenav-close\" routerLink=\"/rutas\">Rutas</a>\r\n                            </li>\r\n                            <li class=\"grey darken-2\">\r\n                                <a class=\"white-text sidenav-close\" routerLink=\"/subrutas\">Subrutas</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n            </li>\r\n            <li>\r\n                <a class=\"white-tex sidenav-closet\" routerLink=\"/cargamentos\">Administración de Cargamentos</a>\r\n            </li>\r\n    </ul>\r\n     <li><a class=\"subheader sidenav-close\">Otras Secciones</a></li>\r\n     <ul class=\"collapsible grey darken-4 white-text center-align\">\r\n        <li>\r\n            <a class=\"white-text sidenav-close\" routerLink=\"/oficina\">Oficina</a>\r\n        </li>\r\n    </ul>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OperacionesSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesSidenavComponent", function() { return OperacionesSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperacionesSidenavComponent = /** @class */ (function () {
    function OperacionesSidenavComponent() {
    }
    OperacionesSidenavComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.sidenav').sidenav();
            $('.collapsible').collapsible();
        });
    };
    OperacionesSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operaciones-sidenav',
            template: __webpack_require__(/*! ./operaciones-sidenav.component.html */ "./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./operaciones-sidenav.component.css */ "./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OperacionesSidenavComponent);
    return OperacionesSidenavComponent;
}());



/***/ }),

/***/ "./src/app/operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n<app-operaciones-navbar></app-operaciones-navbar>    \r\n\r\n<div class=\"row\">\r\n  <!-- Barra de Navegación Lateral -->\r\n  <app-operaciones-sidenav></app-operaciones-sidenav>      \r\n\r\n      <!-- Cuerpo de la Sección -->\r\n      <div class=\"col s9 offset-s3\">\r\n        <div class=\"row\">\r\n          <a class=\"btn-large col s3 offset-s1 green modal-trigger\" href=\"#modalsubruta\" materialize=\"modal\">Crear Sub-Ruta</a>      \r\n      </div>   \r\n      \r\n      <!-- Lista de oficinas -->\r\n      <div class=\"col s9\" *ngIf=\"arr.length>0;else noData\">\r\n        <div class=\"col s4\" *ngFor=\"let item of arr\">\r\n          <div class=\"card grey darken-4 white-text\">\r\n              <span class=\"card-title\"></span>\r\n            <div class=\"card-content\">\r\n              <p>Nombre de la Sub-ruta: {{item.nombreRuta}}</p>\r\n              <p>Horario Salida: {{item.horarioSalida}}</p>\r\n              <p>Tiempo de Recorrido: {{item.tiempoRecorrido}}</p>\r\n              <p>Tienda de Origen: {{item.tiendaOrigen}}</p>\r\n              <p>Tienda de Destino: {{item.tiendaDestino}}</p>\r\n              <p>Tipo de Ruta: {{item.tipoRuta}}</p>\r\n            </div>\r\n            <div class=\"card-action\">\r\n              <!--<a class=\"modal-trigger\" (click)=\"onUpdate(item)\" href=\"#modalCrearOficina\">Modificar</a>\r\n              <a class=\"pointer-delete\" (click)=\"onDelete(item)\"> Eliminar</a>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Mensaje en caso no existan métodos de envío -->\r\n  <div class=\"container\">\r\n    <ng-template #noData>\r\n      \r\n      <h5 class=\"center-align\">No existen Sub-Rutas registradas</h5>\r\n    </ng-template>\r\n  </div>\r\n  \r\n\r\n    <!-- Modal que contiene el formulario de inserción y actualización de métodos de envío. -->\r\n  <div id=\"modalsubruta\" class=\"modal modal-fixed-footer\">\r\n      <div class=\"modal-content row\">\r\n        <h4>Crear Sub-Ruta</h4>\r\n        \r\n        <form [formGroup]=\"subRutaform\">\r\n          \r\n          <div class=\"input-field col s6\"> \r\n                <label for=\"nombreRuta\">Nombre de la Ruta</label>\r\n                <input class=\"form-control\" id=\"nombreRuta\" formControlName=\"nombreRuta\" type=\"text\" class=\"validate\">\r\n          </div>\r\n\r\n          <div class=\"input-field col s6\"> \r\n            <label for=\"horarioSalida\">Horario de Salida</label>\r\n            <input class=\"form-control\" id=\"horarioSalida\" formControlName=\"horarioSalida\" type=\"text\" class=\"validate\">\r\n          </div>\r\n          \r\n\r\n            <div class=\"input-field col s6\"> \r\n                <label for=\"tiempoRecorrido\">Tiempo Recorrido</label>\r\n                <input class=\"form-control\" id=\"tiempoRecorrido\" formControlName=\"tiempoRecorrido\" type=\"text\" class=\"validate\">\r\n              </div>\r\n\r\n              <div class=\"input-field col s6\">\r\n                <label for=\"tiendaOrigen\">Tienda de Origen</label>\r\n                <input class=\"form-control\" formControlName=\"tiendaOrigen\" id=\"tiendaOrigen\" placeholde=\"Origen del Envio\" type=\"text\" class=\"validate\">\r\n              </div>\r\n              \r\n              <div class=\"input-field col s6\">\r\n                  <label for=\"tiendaDestino\">Tienda Destino</label>\r\n                  <input class=\"form-control\" formControlName=\"tiendaDestino\" id=\"tiendaDestino\" placeholde=\"Destino del Envio\" type=\"text\" class=\"validate\">\r\n                </div> \r\n\r\n              <div class=\"col s6\" >\r\n                <select class=\"form-control\" formControlName=\"tipoRuta\">\r\n                  <option disabled selected>Tipo de Ruta</option>\r\n                  <option *ngFor=\"let opcion of tipoRuta\" [value]=\"opcion\">{{opcion}}</option>\r\n              </select>             \r\n              </div> \r\n<!-- drop down trae oficinas llegando -->\r\n          <div class=\"input-field col s3\">\r\n            <select formControlName=\"origen\" class=\"browser-default form-control validate\" required>\r\n              <option disabled>Origen</option>  \r\n              <option *ngFor=\"let oficina of arrOficinas\" [value]=\"oficina.nombre\">{{oficina.nombre}}</option> \r\n            </select>\r\n          </div>\r\n             \r\n        </form>       \r\n        <p>Form value: {{ subRutaform.value | json }}</p>\r\n        <p>Form status: {{ subRutaform.status | json }}</p>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button (click)='insertSubmit()' type=\"submit\" *ngIf=\"subRutaform.status === 'VALID'\" class=\"modal-close btn-flat green-text\">Crear</button>        \r\n        <button (click)='updateSubmit(metodoEnvio)' *ngIf=\"updClicked === true\"  class=\"modal-close btn-flat green-text\">Actualizar</button>        \r\n        <a class=\"modal-close btn-flat red-text\" (click)='cleanForm()'>Cancelar</a>\r\n      </div>\r\n      \r\n    </div>      "

/***/ }),

/***/ "./src/app/operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OperacionesSubRutasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesSubRutasComponent", function() { return OperacionesSubRutasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_subrutas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore-subrutas.service */ "./src/app/services/firestore-subrutas.service.ts");
/* harmony import */ var _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firestore-oficina.service */ "./src/app/services/firestore-oficina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Firebase



//Services
var OperacionesSubRutasComponent = /** @class */ (function () {
    //agregamos mis tiendas al constructor
    function OperacionesSubRutasComponent(authService, _data, fb, _misTiendas) {
        this.authService = authService;
        this._data = _data;
        this.fb = fb;
        this._misTiendas = _misTiendas;
        this.arr = [];
        this.arrOficinas = [];
        this.tipoRuta = ['Aereo', 'Terreste', 'Maritimo'];
    }
    OperacionesSubRutasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseSubscription = this._data.getSubRutas().subscribe(function (Subruta) {
            _this.arr = Subruta;
            console.log(_this.arr);
        });
        //get oficina
        this.firestoreOficinasEnvioSubscription = this._misTiendas.getOficinasNRT().subscribe(function (oficina) {
            _this.arrOficinas = oficina;
        });
        $(function () {
            $('.modal').modal();
            $('select').formSelect();
        });
        this.createForm();
    };
    OperacionesSubRutasComponent.prototype.createForm = function () {
        this.subRutaform = this.fb.group({
            nombreRuta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tiendaOrigen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tiendaDestino: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            horarioSalida: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tiempoRecorrido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoRuta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    OperacionesSubRutasComponent.prototype.insertSubmit = function () {
        console.log('Insertando...');
        this._data.addSubruta(this.subRutaform.value);
    };
    OperacionesSubRutasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operaciones-sub-rutas',
            template: __webpack_require__(/*! ./operaciones-sub-rutas.component.html */ "./src/app/operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component.html"),
            styles: [__webpack_require__(/*! ./operaciones-sub-rutas.component.css */ "./src/app/operaciones/operaciones-sub-rutas/operaciones-sub-rutas.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_firestore_subrutas_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreSubrutasService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_firestore_oficina_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreOficinaService"]])
    ], OperacionesSubRutasComponent);
    return OperacionesSubRutasComponent;
}());



/***/ }),

/***/ "./src/app/operaciones/operaciones.component.css":
/*!*******************************************************!*\
  !*** ./src/app/operaciones/operaciones.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header, nav, footer {\r\n    padding-left: 300px;\r\n}\r\n\r\n  @media only screen and (max-width : 992px) {\r\n    header, main, footer {\r\n      padding-left: 0;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/operaciones/operaciones.component.html":
/*!********************************************************!*\
  !*** ./src/app/operaciones/operaciones.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n\r\n<header>\r\n    <app-operaciones-sidenav></app-operaciones-sidenav>      \r\n    \r\n</header> \r\n\r\n<aside>\r\n    <app-operaciones-navbar></app-operaciones-navbar> \r\n</aside>\r\n\r\n  <main class=\"row\">\r\n        <div class=\"col s9 offset-s3\">\r\n            <div class=\"col s3\">\r\n              <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                  <img src=\"assets/img/operaciones/metodosEnvio.jpg\">\r\n                </div>\r\n                <div class=\"card-content grey darken-4 white-text\">\r\n                  <span class=\"card-title\">Métodos de Envío</span>\r\n                  <p>Servicios de Entrega con tiempos en tránsito definidos y garantizados.</p>\r\n                </div>\r\n                <div class=\"card-action grey darken-4 yellow darken-2-text\">\r\n                  <a routerLink=\"/metodosEnvio\">Ver más...</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col s3\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                    <img src=\"assets/img/operaciones/oficinas.jpeg\">\r\n                  </div>\r\n                  <div class=\"card-content grey darken-4 white-text\">\r\n                    <span class=\"card-title\">Administración de Oficinas</span>\r\n                    <p>Centros de Distribución, Oficinas de Servicio Locales y Hubs.</p>\r\n                  </div>\r\n                  <div class=\"card-action grey darken-4 yellow darken-2-text\">\r\n                    <a routerLink=\"/admOficinas\">Ver más...</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col s3\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-image\">\r\n                      <img src=\"assets/img/operaciones/rutas.jpeg\">\r\n                    </div>\r\n                    <div class=\"card-content grey darken-4 white-text\">\r\n                      <span class=\"card-title\">Administración de Rutas</span>\r\n                      <p>*Descripción*</p>\r\n                    </div>\r\n                    <div class=\"card-action grey darken-4 yellow darken-2-text\">\r\n                      <a routerLink=\"/metodosEnvio\">Ver más...</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  </div>\r\n  </main>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/operaciones/operaciones.component.ts":
/*!******************************************************!*\
  !*** ./src/app/operaciones/operaciones.component.ts ***!
  \******************************************************/
/*! exports provided: OperacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesComponent", function() { return OperacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperacionesComponent = /** @class */ (function () {
    function OperacionesComponent() {
    }
    OperacionesComponent.prototype.ngOnInit = function () {
    };
    OperacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operaciones',
            template: __webpack_require__(/*! ./operaciones.component.html */ "./src/app/operaciones/operaciones.component.html"),
            styles: [__webpack_require__(/*! ./operaciones.component.css */ "./src/app/operaciones/operaciones.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OperacionesComponent);
    return OperacionesComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        location.replace('login');
    };
    AuthService.prototype.signUp = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.checkLogin = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) { return auth; }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/calculo-peso.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/calculo-peso.service.ts ***!
  \**************************************************/
/*! exports provided: CalculoPesoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoPesoService", function() { return CalculoPesoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculoPesoService = /** @class */ (function () {
    function CalculoPesoService() {
    }
    CalculoPesoService.prototype.getPesoDimensional = function (tamCubico) {
        this.pesoDimensional = tamCubico / 5000;
        if ((this.pesoDimensional % 1) === 0) {
            return this.pesoDimensional;
        }
        else if ((this.pesoDimensional % 1) >= 0.5) {
            return this.pesoDimensional.toFixed(1);
        }
        else {
            return this.pesoDimensional - (this.pesoDimensional % 1) + 0.5;
        }
    };
    CalculoPesoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CalculoPesoService);
    return CalculoPesoService;
}());



/***/ }),

/***/ "./src/app/services/firestore-cargamento-envio.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/firestore-cargamento-envio.service.ts ***!
  \****************************************************************/
/*! exports provided: FirestoreCargamentoEnvioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreCargamentoEnvioService", function() { return FirestoreCargamentoEnvioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Toast de Materialize para notificaciones de acciones.
// import { toast } from 'angular2-materialize';
var FirestoreCargamentoEnvioService = /** @class */ (function () {
    function FirestoreCargamentoEnvioService(_afs) {
        this._afs = _afs;
        this.cargamentoCollection = this._afs.collection('/cargamento', function (ref) { return ref.orderBy('id'); });
        this.cargamento = this.cargamentoCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    FirestoreCargamentoEnvioService.prototype.getCargamento = function () {
        return this.cargamento;
    };
    FirestoreCargamentoEnvioService.prototype.addCargamento = function (cargamento) {
        this.cargamentoCollection.add(cargamento);
    };
    FirestoreCargamentoEnvioService.prototype.deleteCargamento = function (cargamento) {
        this.cargamentoDoc = this._afs.doc('cargamento/' + cargamento.id);
        this.cargamentoDoc.delete();
        // toast('Metodo de Envío eliminado de manera Exitosa.', 4000);
    };
    FirestoreCargamentoEnvioService.prototype.updateCargamento = function (iME, updCargamento) {
        this.cargamentoDoc = this._afs.doc('cargamento/' + iME);
        this.cargamentoDoc.update(updCargamento);
    };
    FirestoreCargamentoEnvioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirestoreCargamentoEnvioService);
    return FirestoreCargamentoEnvioService;
}());



/***/ }),

/***/ "./src/app/services/firestore-envios.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/firestore-envios.service.ts ***!
  \******************************************************/
/*! exports provided: FirestoreEnviosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreEnviosService", function() { return FirestoreEnviosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirestoreEnviosService = /** @class */ (function () {
    function FirestoreEnviosService(_afs) {
        this._afs = _afs;
        this.enviosCollection = this._afs.collection('/guias');
        this.envios = this.enviosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    FirestoreEnviosService.prototype.getEnvios = function () {
        return this.envios;
    };
    FirestoreEnviosService.prototype.getHistorialEnvios = function (tn) {
        this.enviosDoc = this._afs.doc('guias/' + tn);
        this.envio = this.enviosDoc.valueChanges();
        return this.envio;
    };
    FirestoreEnviosService.prototype.addEnvio = function (newEnvio) {
        this.enviosCollection.doc('FS-' + this._afs.createId()).set(newEnvio);
    };
    FirestoreEnviosService.prototype.updateEstadoEnvio = function (iE, newHistorial) {
        this.enviosDoc = this._afs.doc('guias/' + iE);
        this.enviosDoc.update((_a = {
                estado: newHistorial.estado
            },
            _a['historial.' + newHistorial.fecha] = newHistorial,
            _a));
        var _a;
    };
    FirestoreEnviosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirestoreEnviosService);
    return FirestoreEnviosService;
}());



/***/ }),

/***/ "./src/app/services/firestore-metodos-envio.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/firestore-metodos-envio.service.ts ***!
  \*************************************************************/
/*! exports provided: FirestoreMetodosEnvioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreMetodosEnvioService", function() { return FirestoreMetodosEnvioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Toast de Materialize para notificaciones de acciones.
// import { toast } from 'angular2-materialize';
var FirestoreMetodosEnvioService = /** @class */ (function () {
    function FirestoreMetodosEnvioService(_afs) {
        this._afs = _afs;
        this.metodosEnvioCollection = this._afs.collection('/metodosEnvio', function (ref) { return ref.orderBy('nombre'); });
        this.metodosEnvio = this.metodosEnvioCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    FirestoreMetodosEnvioService.prototype.getMetodosEnvio = function () {
        return this.metodosEnvio;
    };
    FirestoreMetodosEnvioService.prototype.addMetodosEnvio = function (metodosEnvio) {
        this.metodosEnvioCollection.add(metodosEnvio);
    };
    FirestoreMetodosEnvioService.prototype.deleteMetodosEnvio = function (metodosEnvio) {
        this.metodosEnvioDoc = this._afs.doc('metodosEnvio/' + metodosEnvio.id);
        this.metodosEnvioDoc.delete();
        // toast('Metodo de Envío eliminado de manera Exitosa.', 4000);
    };
    FirestoreMetodosEnvioService.prototype.updateMetodosEnvio = function (iME, updMetodoEnvio) {
        this.metodosEnvioDoc = this._afs.doc('metodosEnvio/' + iME);
        this.metodosEnvioDoc.update(updMetodoEnvio);
    };
    FirestoreMetodosEnvioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirestoreMetodosEnvioService);
    return FirestoreMetodosEnvioService;
}());



/***/ }),

/***/ "./src/app/services/firestore-oficina.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/firestore-oficina.service.ts ***!
  \*******************************************************/
/*! exports provided: FirestoreOficinaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreOficinaService", function() { return FirestoreOficinaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirestoreOficinaService = /** @class */ (function () {
    function FirestoreOficinaService(_afs) {
        this._afs = _afs;
        this.oficinasCollection = this._afs.collection('/oficinas');
        this.oficinas = this.oficinasCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    FirestoreOficinaService.prototype.getOficinasType = function (tipo) {
        this.oficinasCollection = this._afs.collection('/oficinas', function (ref) { return ref.where('tipo', '==', tipo); });
        this.oficinas = this.oficinasCollection.valueChanges();
        return this.oficinas;
    };
    FirestoreOficinaService.prototype.getOficinas = function () {
        return this.oficinas;
    };
    FirestoreOficinaService.prototype.getOficinasNRT = function () {
        this.oficinasCollection = this._afs.collection('/oficinas');
        this.oficinas = this.oficinasCollection.valueChanges();
        return this.oficinas;
    };
    FirestoreOficinaService.prototype.addOficina = function (oficina) {
        this.oficinasCollection.add(oficina);
    };
    FirestoreOficinaService.prototype.deleteOficina = function (metodosEnvio) {
        this.oficinasDoc = this._afs.doc('oficinas/' + metodosEnvio.id);
        this.oficinasDoc.delete();
    };
    FirestoreOficinaService.prototype.updateOficina = function (id, oficina) {
        console.log(oficina);
        this.oficinasDoc = this._afs.doc('oficinas/' + id);
        this.oficinasDoc.update(oficina);
    };
    FirestoreOficinaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirestoreOficinaService);
    return FirestoreOficinaService;
}());



/***/ }),

/***/ "./src/app/services/firestore-rutas.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/firestore-rutas.service.ts ***!
  \*****************************************************/
/*! exports provided: FirestoreRutasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreRutasService", function() { return FirestoreRutasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirestoreRutasService = /** @class */ (function () {
    function FirestoreRutasService(_afs) {
        this._afs = _afs;
        this.Rutacollection = this._afs.collection('/rutas');
        this.Rutas = this.Rutacollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    FirestoreRutasService.prototype.getRutas = function () {
        return this.Rutas;
    };
    FirestoreRutasService.prototype.addRutas = function (rutas) {
        this.Rutacollection.add(rutas);
    };
    FirestoreRutasService.prototype.updateRuta = function (iME, rutas) {
        this.RutasDoc = this._afs.doc('rutas/' + iME);
        this.RutasDoc.update(rutas);
    };
    FirestoreRutasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirestoreRutasService);
    return FirestoreRutasService;
}());



/***/ }),

/***/ "./src/app/services/firestore-subrutas.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/firestore-subrutas.service.ts ***!
  \********************************************************/
/*! exports provided: FirestoreSubrutasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreSubrutasService", function() { return FirestoreSubrutasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirestoreSubrutasService = /** @class */ (function () {
    function FirestoreSubrutasService(_afs) {
        this._afs = _afs;
        this.subRutacollection = this._afs.collection('/subrutas');
        this.subRutas = this.subRutacollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    FirestoreSubrutasService.prototype.getSubRutas = function () {
        return this.subRutas;
    };
    FirestoreSubrutasService.prototype.addSubruta = function (subruta) {
        this.subRutacollection.add(subruta);
    };
    FirestoreSubrutasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirestoreSubrutasService);
    return FirestoreSubrutasService;
}());



/***/ }),

/***/ "./src/app/services/firestore-transportes-envio.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/firestore-transportes-envio.service.ts ***!
  \*****************************************************************/
/*! exports provided: FirestoreTransportesEnvioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreTransportesEnvioService", function() { return FirestoreTransportesEnvioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirestoreTransportesEnvioService = /** @class */ (function () {
    function FirestoreTransportesEnvioService(_afs) {
        this._afs = _afs;
        this.transporteCollection = this._afs.collection('/transporte');
        this.transporte = this.transporteCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    //////////
    FirestoreTransportesEnvioService.prototype.getTransporteType = function (idplaca) {
        this.transporteCollection = this._afs.collection('/transporte', function (ref) { return ref.where('idplaca', '==', idplaca); });
        this.transporte = this.transporteCollection.valueChanges();
        return this.transporte;
    };
    /////////////
    FirestoreTransportesEnvioService.prototype.getTransporte = function () {
        return this.transporte;
    };
    FirestoreTransportesEnvioService.prototype.addTransporte = function (transporte) {
        this.transporteCollection.add(transporte);
    };
    FirestoreTransportesEnvioService.prototype.deleteTransporte = function (transporte) {
        this.transporteDoc = this._afs.doc('transporte/' + transporte.id);
        this.transporteDoc.delete();
        // toast('Metodo de Envío eliminado de manera Exitosa.', 4000);
    };
    FirestoreTransportesEnvioService.prototype.updateTransporte = function (iME, updTransporte) {
        this.transporteDoc = this._afs.doc('transporte/' + iME);
        this.transporteDoc.update(updTransporte);
    };
    FirestoreTransportesEnvioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirestoreTransportesEnvioService);
    return FirestoreTransportesEnvioService;
}());



/***/ }),

/***/ "./src/app/usuario/usuario.component.css":
/*!***********************************************!*\
  !*** ./src/app/usuario/usuario.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/usuario/usuario.component.html":
/*!************************************************!*\
  !*** ./src/app/usuario/usuario.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  usuario works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/usuario/usuario.component.ts":
/*!**********************************************!*\
  !*** ./src/app/usuario/usuario.component.ts ***!
  \**********************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent() {
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.css */ "./src/app/usuario/usuario.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyC7R7VcUvNKOaR5Sy5bt78nEy2M-McdYt0',
        authDomain: 'soft9-69398.firebaseapp.com',
        databaseURL: 'https://soft9-69398.firebaseio.com',
        projectId: 'soft9-69398',
        storageBucket: 'soft9-69398.appspot.com',
        messagingSenderId: '126938974326'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\r-2g-\Documents\git\ProyectoS9\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map