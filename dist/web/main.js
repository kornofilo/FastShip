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
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuario/usuario.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _oficina_oficina_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oficina/oficina.component */ "./src/app/oficina/oficina.component.ts");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _operaciones_operaciones_navbar_operaciones_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operaciones/operaciones-navbar/operaciones-navbar.component */ "./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.ts");
/* harmony import */ var _operaciones_operaciones_sidenav_operaciones_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operaciones/operaciones-sidenav/operaciones-sidenav.component */ "./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _operaciones_operaciones_metodos_envio_operaciones_metodos_envio_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component */ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.ts");
/* harmony import */ var _operaciones_operaciones_oficinas_operaciones_oficinas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./operaciones/operaciones-oficinas/operaciones-oficinas.component */ "./src/app/operaciones/operaciones-oficinas/operaciones-oficinas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// Firebase






/* Array de Rutas */
var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'operaciones', component: _operaciones_operaciones_component__WEBPACK_IMPORTED_MODULE_3__["OperacionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'metodosEnvio', component: _operaciones_operaciones_metodos_envio_operaciones_metodos_envio_component__WEBPACK_IMPORTED_MODULE_18__["OperacionesMetodosEnvioComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'admOficinas', component: _operaciones_operaciones_oficinas_operaciones_oficinas_component__WEBPACK_IMPORTED_MODULE_19__["OperacionesOficinasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'usuario', component: _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"] },
    { path: 'oficina', component: _oficina_oficina_component__WEBPACK_IMPORTED_MODULE_7__["OficinaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _operaciones_operaciones_component__WEBPACK_IMPORTED_MODULE_3__["OperacionesComponent"],
                _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _oficina_oficina_component__WEBPACK_IMPORTED_MODULE_7__["OficinaComponent"],
                _operaciones_operaciones_navbar_operaciones_navbar_component__WEBPACK_IMPORTED_MODULE_12__["OperacionesNavbarComponent"],
                _operaciones_operaciones_sidenav_operaciones_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["OperacionesSidenavComponent"],
                _operaciones_operaciones_metodos_envio_operaciones_metodos_envio_component__WEBPACK_IMPORTED_MODULE_18__["OperacionesMetodosEnvioComponent"],
                _operaciones_operaciones_oficinas_operaciones_oficinas_component__WEBPACK_IMPORTED_MODULE_19__["OperacionesOficinasComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                angularfire2__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
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

/***/ "./src/app/oficina/oficina.component.css":
/*!***********************************************!*\
  !*** ./src/app/oficina/oficina.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/oficina/oficina.component.html":
/*!************************************************!*\
  !*** ./src/app/oficina/oficina.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Oficina</title>\r\n<p>Esta es la oficina</p>\r\n"

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

/***/ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer-cursor {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n<app-operaciones-navbar></app-operaciones-navbar>    \r\n\r\n<div class=\"row\">\r\n  <!-- Barra de Navegación Lateral -->\r\n  <app-operaciones-sidenav></app-operaciones-sidenav>      \r\n\r\n      <!-- Cuerpo de la Sección -->\r\n      <div class=\"col s9\">\r\n          <div class=\"row\">\r\n              <a class=\"btn-large col s3 indigo\">Métodos de Envío</a>   \r\n              <a class=\"btn-large col s3 offset-s1 green modal-trigger\" href=\"#modalCrearME\" materialize=\"modal\">Crear Métodos de Envio</a>           \r\n              <a class=\"btn-large col s3 offset-s1 red\">Eliminar Método de Envio</a>     \r\n          </div>   \r\n          <hr>\r\n          <!-- Tabla con los métodos de envío -->\r\n          <div class=\"col s11\" *ngIf=\"arr.length>0;else noData\">\r\n              <table>\r\n                  <thead>\r\n                    <tr>\r\n                        <th>Descripción</th>\r\n                        <th>Modificar</th>\r\n                        <th>Eliminar</th>\r\n                    </tr>\r\n                  </thead>\r\n          \r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of arr\">\r\n                      <td> Entrega en: {{item.tiempo}} | Tipos de Transporte: {{item.tipos}}\r\n                      </td>\r\n                      <td><a class=\"modal-trigger\" (click)=\"onUpdate(item)\" href=\"#modalCrearME\">\r\n                        <i class=\"material-icons black-text\">settings_application</i> \r\n                          </a>\r\n                      </td>\r\n                      <td>\r\n                        <a class=\"pointer-delete\" (click)=\"onDelete(item)\" >\r\n                          <i class=\"material-icons black-text center-align\">delete</i> \r\n                        </a>\r\n                      </td>                \r\n                </table>\r\n\r\n          </div>                \r\n      </div>\r\n\r\n    </div>\r\n\r\n  <!-- Mensaje en caso no existan métodos de envío -->\r\n  <div class=\"container\">\r\n    <ng-template #noData>\r\n      \r\n      <h5 class=\"center-align\">No existen métodos de envío registrados</h5>\r\n    </ng-template>\r\n  </div>\r\n\r\n    <!-- Modal que contiene el formulario de inserción y actualización de métodos de envío. -->\r\n  <div id=\"modalCrearME\" class=\"modal modal-fixed-footer\">\r\n      <div class=\"modal-content row\">\r\n        <h4>Crear Método de Envío</h4>\r\n        <p>Los métodos de envio son los niveles de servicio que son usador por los clientes. </p>\r\n        <form #addform=\"ngForm\">\r\n            <div class=\"input-field col s6\">\r\n                <select [(ngModel)]=\"model.tiempo\" name=\"tiempo\" class=\"form-control\" id=\"tiempo\" required #tiempo=\"ngModel\">\r\n                  <option value=\"\" disabled selected>Horas</option>\r\n                  <option value=\"12 horas\">12 horas</option>\r\n                  <option value=\"24 horas\">24 horas</option>\r\n                  <option value=\"48 horas\">48 horas</option>\r\n                </select>\r\n                <label>Tiempo de Envio</label>\r\n              </div>\r\n              <div class=\"col s6\">\r\n                  <h5>Métodos de Envío</h5>\r\n                  <p>\r\n                   <label>\r\n                      <input type=\"checkbox\" [(ngModel)]=\"cbTierra\" class=\"form-control\" id=\"checkBoxTierra\" name=\"checkBoxTierra\"/>\r\n                      <span>Tierra</span>\r\n                    </label>\r\n                  </p>       \r\n                  <p>\r\n                    <label>\r\n                        <input type=\"checkbox\" [(ngModel)]=\"cbMar\" class=\"form-control\" id=\"checkBoxMar\" name=\"checkBoxMar\"/>\r\n                        <span>Mar</span>\r\n                    </label>\r\n                     </p>\r\n                  <p>\r\n                    <label>\r\n                        <input type=\"checkbox\" [(ngModel)]=\"cbAire\" class=\"form-control\" id=\"checkBoxAire\" name=\"checkBoxAire\"/>\r\n                        <span>Aire</span>\r\n                      </label>\r\n                    </p>                                 \r\n              </div> \r\n              \r\n             \r\n        </form>        \r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button (click)='insertSubmit()' *ngIf=\"updClicked === false\" class=\"modal-close btn-flat green-text\" [disabled]=\"!addform.form.valid\">Crear</button>        \r\n        <button (click)='updateSubmit(metodoEnvio)' *ngIf=\"updClicked === true\"  class=\"modal-close btn-flat green-text\" [disabled]=\"!addform.form.valid\">Actualizar</button>        \r\n        <a class=\"modal-close btn-flat red-text\" (click)='cleanForm()'>Cancelar</a>\r\n      </div>\r\n      \r\n    </div>      "

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_metodos_envio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firestore-metodos-envio.service */ "./src/app/services/firestore-metodos-envio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperacionesMetodosEnvioComponent = /** @class */ (function () {
    function OperacionesMetodosEnvioComponent(authService, _data) {
        this.authService = authService;
        this._data = _data;
        this.arr = [];
        this.updClicked = false;
        this.model = { tiempo: '', tipos: [] };
    }
    OperacionesMetodosEnvioComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Obtenemos los métodos envío registrados en la base de datos.
        this._data.getMetodosEnvio().subscribe(function (metodoEnvio) {
            _this.arr = metodoEnvio;
        });
        // Inicialización de los elementos de Materialize que requieren Jquery.
        $(function () {
            $('.collapsible').collapsible();
            $('select').formSelect();
            $('.dropdown-trigger').dropdown();
        });
    };
    // Función que envía el modelo a la función de insertar método de envío en el service.
    OperacionesMetodosEnvioComponent.prototype.insertSubmit = function () {
        this.feedTipos();
        this._data.addMetodosEnvio(this.model);
        this.cleanForm();
    };
    OperacionesMetodosEnvioComponent.prototype.onDelete = function (metodoEnvio) {
        if (confirm('¿Está seguro que desea borrar este método de envío?')) {
            this._data.deleteMetodosEnvio(metodoEnvio);
        }
    };
    OperacionesMetodosEnvioComponent.prototype.onUpdate = function (metodoEnvio) {
        var _this = this;
        this.iME = metodoEnvio.id;
        this.model.tiempo = metodoEnvio.tiempo;
        this.updClicked = true;
        metodoEnvio.tipos.forEach(function (element) {
            if (element === 'Tierra') {
                _this.cbTierra = true;
            }
            else if (element === 'Mar') {
                _this.cbMar = true;
            }
            else if (element === 'Aire') {
                _this.cbAire = true;
            }
        });
    };
    OperacionesMetodosEnvioComponent.prototype.updateSubmit = function () {
        this.feedTipos();
        this._data.updateMetodosEnvio(this.iME, this.model.tiempo, this.model.tipos);
        this.cleanForm();
    };
    OperacionesMetodosEnvioComponent.prototype.cleanForm = function () {
        this.model.tiempo = '';
        this.model.tipos = [];
        this.cbTierra = false;
        this.cbMar = false;
        this.cbAire = false;
        this.updClicked = false;
    };
    OperacionesMetodosEnvioComponent.prototype.feedTipos = function () {
        if (this.cbTierra) {
            this.model.tipos.push('Tierra');
        }
        if (this.cbMar) {
            this.model.tipos.push('Mar');
        }
        if (this.cbAire) {
            this.model.tipos.push('Aire');
        }
    };
    OperacionesMetodosEnvioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operaciones-metodos-envio',
            template: __webpack_require__(/*! ./operaciones-metodos-envio.component.html */ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.html"),
            styles: [__webpack_require__(/*! ./operaciones-metodos-envio.component.css */ "./src/app/operaciones/operaciones-metodos-envio/operaciones-metodos-envio.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_firestore_metodos_envio_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreMetodosEnvioService"]])
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

module.exports = ".pointer-cursor {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-navbar/operaciones-navbar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación -->\r\n<header>\r\n  <div class=\"navbar-fixed col s9\">\r\n    <nav class=\"grey darken-3\">\r\n        <div class=\"nav-wrapper row\">\r\n          <form class=\"col s5 offset-s3\">\r\n            <div class=\"input-field\">\r\n              <input class=\"center-align grey darken-2 white-text\" placeholder=\"Ingrese un número de tracking, camión, etc.\" id=\"search\" type=\"search\" required>              \r\n              <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\r\n              <i class=\"material-icons\">close</i>\r\n            </div>\r\n          </form>\r\n\r\n          <!-- E-mail del Usuario Logueado -->\r\n          <div class=\"col s1 offset-s2 grey darken-3 white-text\">\r\n            <span>{{email}}</span>\r\n          </div>\r\n          \r\n          <!-- Botón para cerrar sesión -->\r\n          <div class=\"col s1 red white-text pointer-cursor\" (click)='onClickLogout()'>\r\n              <a>Cerrar Sesión</a>\r\n          </div>          \r\n\r\n        </div>\r\n      </nav>\r\n    </div>\r\n</header> <br>"

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
            $('.modal').modal();
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

module.exports = "   \r\n<body>\r\n  <!-- Barra de Navegación Superior -->\r\n  <app-operaciones-navbar></app-operaciones-navbar> \r\n  <div class=\"row\">\r\n    \r\n    <!-- Barra de Navegación Lateral -->\r\n    <app-operaciones-sidenav></app-operaciones-sidenav>      \r\n\r\n        <!-- Cuerpo de la Sección -->\r\n        <div class=\"col s9\">\r\n            <div class=\"row\">\r\n                <a class=\"btn-large col s3 indigo\">Administración de Oficinas</a>   \r\n                <a class=\"btn-large col s3 offset-s1 green modal-trigger\" href=\"#modalCrearOficina\" materialize=\"modal\">Crear Oficina</a>           \r\n                <a class=\"btn-large col s3 offset-s1 red\">Eliminar Oficina</a>     \r\n            </div>   \r\n            <hr>\r\n            <!-- Lista de oficinas -->\r\n            <div class=\"col s9\" *ngIf=\"arr.length>0;else noData\">\r\n                  <div class=\"col s4\" *ngFor=\"let item of arr\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-content\">\r\n                        <span class=\"card-title\">{{item.nombre}}</span>\r\n                        <p>Dirección: {{item.direccion}}</p>\r\n                        <p>Tipos: {{item.tipo}}</p>\r\n                        <p>Horario: {{item.horario.diasOperacion}} ({{item.horario.horaApertura}}-{{item.horario.horaCierre}})</p>\r\n                      </div>\r\n                      <div class=\"card-action\">\r\n                        <a class=\"modal-trigger\" (click)=\"onUpdate(item)\" href=\"#modalCrearOficina\">Modificar</a>\r\n                        <a class=\"pointer-delete\" (click)=\"onDelete(item)\"> Eliminar</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n      </div>\r\n\r\n    <!-- Mensaje en caso no existan métodos de envío -->\r\n    <div class=\"container\">\r\n      <ng-template #noData>\r\n        \r\n        <h5 class=\"center-align\">No existen oficinas registradas</h5>\r\n      </ng-template>\r\n    </div>\r\n\r\n      <!-- Modal que contiene el formulario de inserción y actualización de métodos de envío. -->\r\n    <div id=\"modalCrearOficina\" class=\"modal modal-fixed-footer\">\r\n        <div class=\"modal-content row\">\r\n          <h4>Creación de Oficina</h4>\r\n          <form name='formAddOficina' #addform=\"ngForm\">\r\n              <!-- Campo de Nombre de la Oficina -->\r\n              <div class=\"input-field col s6\">\r\n                  <input [(ngModel)]=\"model.nombre\" name=\"nombre\" type=\"text\" class=\"form-control validate\" required #nombre=\"ngModel\">\r\n                  <label for=\"nombre\">Nombre de la Oficina</label>\r\n              </div>\r\n              \r\n              <!-- Campo de Tipo de la Oficina -->\r\n              <div class=\"input-field col s6\">\r\n                  <select [(ngModel)]=\"model.tipo\" class=\"form-control validate\" name=\"tipo\" required #tipo=\"ngModel\">\r\n                      <option disabled value=\"\" disabled></option>\r\n                      <option value=\"Centro de Distribución\">Centro de Distribución</option>\r\n                      <option value=\"Tienda\">Tienda</option>\r\n                      <option value=\"Mixta\">Mixta</option>\r\n                    </select>\r\n                    <label>Tipo</label>\r\n              </div>\r\n\r\n              <!-- Campo de Dirección de la Oficina -->\r\n              <div class=\"input-field col s6\">\r\n                  <input [(ngModel)]=\"model.direccion\"  name=\"direccion\" class=\"form-control validate\" type=\"text\" required #direccion=\"ngModel\">\r\n                  <label for=\"direccion\">Dirección</label>\r\n              </div> <br>\r\n\r\n               <!-- Poscisión Geográfica -->              \r\n              <div class=\"input-field col s3\">                \r\n                  <input [(ngModel)]=\"model.posGeografica.lat\" name=\"latitud\" type=\"number\" class=\"form-control validate\" required step=\"any\" #latitud=\"ngModel\">\r\n                  <label for=\"latitud\">Latitud</label>                               \r\n              </div>\r\n\r\n              <div class=\"input-field col s3\">                \r\n                  <input [(ngModel)]=\"model.posGeografica.long\" name=\"longitud\" type=\"number\" step=\"any\" class=\"form-control validate\" required #longitud=\"ngModel\">\r\n                  <label for=\"longitud\">Longitud</label>                               \r\n              </div>\r\n              \r\n              <!-- Días Laborables -->              \r\n              <div class=\"input-field col s6\">\r\n                  <select [(ngModel)]=\"model.horario.diasLaborables\" name=\"diasLaborables\" class=\"form-control validate\" required #diasLaborables=\"ngModel\">\r\n                      <option disabled value=\"\" disabled></option>\r\n                      <option value=\"Lunes-Viernes\">Lunes-Viernes</option>\r\n                      <option value=\"Lunes-Sábado\">Lunes-Sábado</option>\r\n                      <option value=\"Todos los Días\">Todos los Días</option>\r\n                    </select>\r\n                    <label>Días Laborables</label>\r\n              </div> <br>\r\n\r\n              <!-- Hora de Apertura --> \r\n              <div class=\"input-field col s3\">\r\n                  <input [(ngModel)]=\"model.horario.horaApertura\" type=\"time\" name=\"horaApertura\" class=\"form-control validate\" required #horaApertura=\"ngModel\">\r\n                  <label>Hora de Apertura</label>                                  \r\n              </div>\r\n\r\n              <!-- Hora de Cierre --> \r\n              <div class=\"input-field col s3\">\r\n                  <input [(ngModel)]=\"model.horario.horaCierre\" type=\"time\" name=\"horaCierre\" class=\"form-control validate\" required #horaCierre=\"ngModel\">\r\n                <label>Hora de Cierre</label>                                  \r\n              </div>\r\n\r\n            <!-- Disponibilidad --> \r\n            <label>Disponibilidad</label> \r\n            <p>\r\n              <label>\r\n                <input [(ngModel)]=\"model.disponibilidad.envia\" type=\"checkbox\" name=\"envia\" class=\"form-control validate\" #envia=\"ngModel\"/>\r\n                <span>Envía</span>\r\n              </label>\r\n            </p>\r\n              <label>\r\n                  <input [(ngModel)]=\"model.disponibilidad.recibe\" type=\"checkbox\" name=\"recibe\" class=\"form-control validate\" #recibe=\"ngModel\"/>\r\n                  <span>Recibe</span>\r\n              </label>                                        \r\n          </form>          \r\n                        \r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button (click)='insertSubmit()' *ngIf=\"updClicked === false\" class=\"modal-close btn-flat green-text\" [disabled]=\"!addform.form.valid\">Crear</button>        \r\n          <button (click)='updateSubmit(metodoEnvio)' *ngIf=\"updClicked === true\"  class=\"modal-close btn-flat green-text\" [disabled]=\"!addform.form.valid\">Actualizar</button>        \r\n          <a class=\"modal-close btn-flat red-text\" (click)='cleanForm()'>Cancelar</a>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n</body>      "

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
        this._data.getOficinas().subscribe(function (oficina) {
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

/***/ "./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/operaciones/operaciones-sidenav/operaciones-sidenav.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col s12 m4 l3\">        \r\n    <ul id=\"slide-out\" class=\"sidenav sidenav-fixed\">\r\n        <div>\r\n            <h1>FastShip</h1>\r\n          </div>\r\n      <li class=\"grey darken-3\"><a class=\"white-text\" routerLink=\"/metodosEnvio\">Métodos de Envio</a></li>\r\n      <li class=\"grey darken-3\"><a class=\"white-text\" routerLink=\"/admOficinas\">Administración de Oficinas</a></li>\r\n      <li class=\"grey darken-3\"><a class=\"white-text\" routerLink=\"\">Administración de Rutas</a></li>      \r\n    </ul>\r\n    <a href=\"#\" data-target=\"slide-out\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>    \r\n</div>"

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

/***/ "./src/app/operaciones/operaciones.component.css":
/*!*******************************************************!*\
  !*** ./src/app/operaciones/operaciones.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operaciones/operaciones.component.html":
/*!********************************************************!*\
  !*** ./src/app/operaciones/operaciones.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de Navegación Superior -->\r\n<app-operaciones-navbar></app-operaciones-navbar>    \r\n\r\n<div class=\"row\">\r\n  <!-- Barra de Navegación Lateral -->\r\n  <app-operaciones-sidenav></app-operaciones-sidenav>      \r\n\r\n      <!-- Cuerpo de la Sección -->\r\n      <div class=\"col s9\">\r\n              <div class=\"col s3\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-image\">\r\n                    <img src=\"assets/img/operaciones/metodosEnvio.jpg\">\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                    <span class=\"card-title grey-text text-darken-4\">Métodos de Envío</span>\r\n                    <p>Servicios de Entrega con tiempos en tránsito definidos y garantizados.</p>\r\n                  </div>\r\n                  <div class=\"card-action\">\r\n                    <a routerLink=\"/metodosEnvio\">Ver más...</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col s3\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-image\">\r\n                      <img src=\"assets/img/operaciones/oficinas.jpeg\">\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <span class=\"card-title grey-text text-darken-4\">Administración de Oficinas</span>\r\n                      <p>Centros de Distribución, Oficinas de Servicio Locales y Hubs.</p>\r\n                    </div>\r\n                    <div class=\"card-action\">\r\n                      <a routerLink=\"/admOficinas\">Ver más...</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s3\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-image\">\r\n                        <img src=\"assets/img/operaciones/rutas.jpeg\">\r\n                      </div>\r\n                      <div class=\"card-content\">\r\n                        <span class=\"card-title grey-text text-darken-4\">Administración de Rutas</span>\r\n                        <p>*Descripción*</p>\r\n                      </div>\r\n                      <div class=\"card-action\">\r\n                        <a routerLink=\"/metodosEnvio\">Ver más...</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n      </div>\r\n\r\n"

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



var FirestoreMetodosEnvioService = /** @class */ (function () {
    function FirestoreMetodosEnvioService(_afs) {
        this._afs = _afs;
        this.metodosEnvioCollection = this._afs.collection('/metodosEnvio');
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
    };
    FirestoreMetodosEnvioService.prototype.updateMetodosEnvio = function (iME, tiempoNew, tiposNew) {
        console.log(tiposNew);
        this.metodosEnvioDoc = this._afs.doc('metodosEnvio/' + iME);
        this.metodosEnvioDoc.update({
            tiempo: tiempoNew,
            tipos: tiposNew
        });
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
    FirestoreOficinaService.prototype.getOficinas = function () {
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