webpackJsonp([2],{

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		157
	],
	"../pages/configuracoes/configuracoes.module": [
		290,
		1
	],
	"../pages/dashboard/dashboard.module": [
		161
	],
	"../pages/esqSenha/esqSenha.module": [
		162
	],
	"../pages/modal/modal.module": [
		291,
		0
	],
	"../pages/redefinir-senha/redefinir-senha.module": [
		163
	],
	"../pages/tab1/tab1.module": [
		164
	],
	"../pages/tab2/tab2.module": [
		165
	],
	"../pages/tabs/tabs.module": [
		166
	],
	"../pages/verify-code/verify-code.module": [
		167
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());

//# sourceMappingURL=cadastro.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsqSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verify_code_verify_code__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EsqSenhaPage = /** @class */ (function () {
    function EsqSenhaPage(navCtrl, navParams, toast, appCtrl, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.appCtrl = appCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validEmail: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
    }
    EsqSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EsqSenhaPage');
    };
    EsqSenhaPage.prototype.Voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    EsqSenhaPage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    EsqSenhaPage.prototype.forgot_password = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/forgot_password";
        this.datajson = {
            email: this.email,
        };
        console.log(this.datajson);
        this.http
            .post(url, this.datajson)
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Usuario não encontrado!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__verify_code_verify_code__["a" /* VerifyCodePage */]);
            }
        });
    };
    EsqSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-esqSenha',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\esqSenha\esqSenha.html"*/'<style>\n\n    @font-face {\n\n       font-family: Souliyo-Regular;\n\n       src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n     }\n\n   \n\n     ion-content{\n\n       font-family: \'Souliyo Regular\', sans-serif;\n\n     }\n\n     h1{\n\n       color: white; text-align: center; font-size: 35px; font-weight: 100; font-style: normal; line-height: normal;\n\n       padding: 110px 25px 35px 25px;\n\n       letter-spacing: 0.9px;\n\n     }\n\n     p{\n\n       color: white; text-align: center; font-size: 11px; font-style: normal; line-height: normal;\n\n       letter-spacing: 0.9px;\n\n     }\n\n     ion-label{\n\n       color: white; padding-bottom: 5px;\n\n     }\n\n     ion-item{\n\n       background-color: #12614C; color: white; align-content: center;\n\n     }\n\n     input::placeholder{\n\n       text-align: center; color: white; font-size: 12px;\n\n     }\n\n     button{\n\n       width: 210px; height: 30px; color: #12614C; margin-left: 7px; margin-top: 15px;\n\n     }\n\n     .btn-back{\n\n       color: white; font-size: 10px; padding-right: 185px; padding-top: 10px;\n\n     }\n\n     .btn-others{\n\n        color: white; font-size: 12px; cursor: pointer; display: flex; flex-direction: column; text-align: center; margin: 8px; \n\n    }\n\n    .btn-new{\n\n        padding-top: 14px;\n\n    }\n\n   \n\n   </style>\n\n   \n\n   <ion-content padding style="background-color: #12614C">\n\n    \n\n    <button ion-button clear class="btn-back" (click)="Voltar()"><< voltar</button>\n\n\n\n    <h1>VACIMAPS</h1>\n\n   <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n \n\n        <ion-item>\n\n            <ion-input type="text" [(ngModel)]="email" [formControl]="formulario.controls[\'validEmail\']"  placeholder="e-mail"></ion-input>\n\n        </ion-item>\n\n        <p>Um código será enviado ao seu e-mail</p>\n\n        <br>\n\n        <button ion-button color="light" (click)="forgot_password()" [disabled]="!formulario.valid">Enviar</button>\n\n\n\n    </ion-list>\n\n    </form>\n\n    <div>\n\n        <a class="btn-new btn-others" (click)="cadastrar()" >Novo por aqui?</a>\n\n    </div>\n\n   </ion-content>\n\n   '/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\esqSenha\esqSenha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], EsqSenhaPage);
    return EsqSenhaPage;
}());

//# sourceMappingURL=esqSenha.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redefinir_senha_redefinir_senha__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the VerifyCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyCodePage = /** @class */ (function () {
    function VerifyCodePage(navCtrl, navParams, toast, appCtrl, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.appCtrl = appCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validCodigo: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    VerifyCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyCodePage');
    };
    VerifyCodePage.prototype.Voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    VerifyCodePage.prototype.validar_token = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/validar_token";
        this.datajson = {
            token: this.codigo,
        };
        console.log(this.datajson);
        this.http
            .post(url, this.datajson)
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Código inválido!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__redefinir_senha_redefinir_senha__["a" /* RedefinirSenhaPage */], { id: res });
            }
        });
    };
    VerifyCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-verify-code',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\verify-code\verify-code.html"*/'<style>\n\n  @font-face {\n\n     font-family: Souliyo-Regular;\n\n     src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n   }\n\n \n\n   ion-content{\n\n     font-family: \'Souliyo Regular\', sans-serif;\n\n   }\n\n   h1{\n\n     color: white; text-align: center; font-size: 35px; font-weight: 100; font-style: normal; line-height: normal;\n\n     padding: 110px 25px 35px 25px;\n\n     letter-spacing: 0.9px;\n\n   }\n\n   p{\n\n     color: white; text-align: center; font-size: 12px; font-style: normal; line-height: normal;\n\n     letter-spacing: 0.9px;\n\n   }\n\n   ion-label{\n\n     color: white; padding-bottom: 5px;\n\n   }\n\n   ion-item{\n\n     background-color: #12614C; color: white; align-content: center;\n\n   }\n\n   input::placeholder{\n\n     text-align: center; color: white; font-size: 12px;\n\n   }\n\n   button{\n\n     width: 210px; height: 30px; color: #12614C; margin-left: 7px; margin-top: 15px;\n\n   }\n\n   .btn-back{\n\n     color: white; font-size: 10px; padding-right: 185px; padding-top: 10px;\n\n   }\n\n   .btn-others{\n\n      color: white; font-size: 12px; cursor: pointer; display: flex; flex-direction: column; text-align: center; margin: 8px; \n\n  }\n\n  .btn-new{\n\n      padding-top: 14px;\n\n  }\n\n \n\n </style>\n\n \n\n <ion-content padding style="background-color: #12614C">\n\n  \n\n  <button ion-button clear class="btn-back" (click)="Voltar()"><< voltar</button>\n\n\n\n  <h1>VACIMAPS</h1>\n\n <form [formGroup]="formulario">\n\n  <ion-list inset>\n\n\n\n      <ion-item>\n\n          <ion-input type="text" [(ngModel)]="codigo" [formControl]="formulario.controls[\'validCodigo\']"  placeholder="Código"></ion-input>\n\n      </ion-item>\n\n      <p>Insira o codigo recebido para realizar a validação</p>\n\n      <br>\n\n      <button ion-button color="light" (click)="validar_token()" [disabled]="!formulario.valid">Validar</button>\n\n\n\n  </ion-list>\n\n  </form>\n\n </ion-content>\n\n '/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\verify-code\verify-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], VerifyCodePage);
    return VerifyCodePage;
}());

//# sourceMappingURL=verify-code.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, modalCtrl, confCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.confCtrl = confCtrl;
        this.rootPage = 'TabsPage';
    }
    DashboardPage.prototype.openModal = function () {
        var modalPage = this.modalCtrl.create('ModalPage');
        modalPage.present();
    };
    DashboardPage.prototype.modalOpen = function () {
        var confPage = this.confCtrl.create('ConfiguracoesPage');
        confPage.present();
    };
    DashboardPage.prototype.Sair = function () {
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], DashboardPage.prototype, "nav", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\dashboard\dashboard.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n   \n\n    <ion-content>\n\n      <ion-list>\n\n          <button ion-item (click)="openModal()">Perfil</button>\n\n          <button ion-item (click)="modalOpen()">Configuracoes</button>\n\n          <button ion-item (click)="Sair()">Sair</button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n\n\n  <!-- main navigation -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _e || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqSenhaPageModule", function() { return EsqSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__esqSenha__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EsqSenhaPageModule = /** @class */ (function () {
    function EsqSenhaPageModule() {
    }
    EsqSenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__esqSenha__["a" /* EsqSenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__esqSenha__["a" /* EsqSenhaPage */]),
            ],
        })
    ], EsqSenhaPageModule);
    return EsqSenhaPageModule;
}());

//# sourceMappingURL=esqSenha.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedefinirSenhaPageModule", function() { return RedefinirSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redefinir_senha__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RedefinirSenhaPageModule = /** @class */ (function () {
    function RedefinirSenhaPageModule() {
    }
    RedefinirSenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__redefinir_senha__["a" /* RedefinirSenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__redefinir_senha__["a" /* RedefinirSenhaPage */]),
            ],
        })
    ], RedefinirSenhaPageModule);
    return RedefinirSenhaPageModule;
}());

//# sourceMappingURL=redefinir-senha.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */]),
            ],
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());

//# sourceMappingURL=tab1.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */]),
            ],
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());

//# sourceMappingURL=tab2.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyCodePageModule", function() { return VerifyCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_code__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyCodePageModule = /** @class */ (function () {
    function VerifyCodePageModule() {
    }
    VerifyCodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify_code__["a" /* VerifyCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify_code__["a" /* VerifyCodePage */]),
            ],
        })
    ], VerifyCodePageModule);
    return VerifyCodePageModule;
}());

//# sourceMappingURL=verify-code.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_redefinir_senha_redefinir_senha_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_esqSenha_esqSenha_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_verify_code_verify_code_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tab1_tab1_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tab2_tab2_module__ = __webpack_require__(165);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/esqSenha/esqSenha.module#EsqSenhaPageModule', name: 'EsqSenhaPage', segment: 'esqSenha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redefinir-senha/redefinir-senha.module#RedefinirSenhaPageModule', name: 'RedefinirSenhaPage', segment: 'redefinir-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify-code/verify-code.module#VerifyCodePageModule', name: 'VerifyCodePage', segment: 'verify-code', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro_module__["CadastroPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_redefinir_senha_redefinir_senha_module__["RedefinirSenhaPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_esqSenha_esqSenha_module__["EsqSenhaPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_verify_code_verify_code_module__["VerifyCodePageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_tab1_tab1_module__["Tab1PageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_tab2_tab2_module__["Tab2PageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Tab1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab1Page');
    };
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab1',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\tab1\tab1.html"*/'<style>\n\n    @font-face {\n\n      font-family: Souliyo-Regular;\n\n      src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n    }\n\n  \n\n    ion-content{\n\n      font-family: \'Souliyo Regular\', sans-serif;\n\n      background-color: #F1EEEE;\n\n    }\n\n    ion-header{\n\n    background-color: #3C7D6B;\n\n    width: 100%;\n\n    height: 50px;\n\n    display: flex;\n\n    flex-direction: row;\n\n  }\n\n  .menu{\n\n    background-color: #3C7D6B;\n\n    margin-left: 40%;\n\n    padding-top: 7px;\n\n  }\n\n  .p-header{\n\n    color: white;\n\n    margin-left: 15px;\n\n    padding-top: 7px;\n\n  }\n\n  h1{\n\n    padding-top: 50px;\n\n  }\n\n  ion-searchbar--placeholder-color{\n\n    color: #C4C4C4; \n\n  }\n\n  ion-searchbar--background{\n\n    color: white;\n\n  }\n\n  ion-searchbar{\n\n    background-color: white;\n\n    margin-left: 15px;\n\n    margin-top: 25%;\n\n    width: 98%;\n\n    font-size: 9px;\n\n  }\n\n  ion-img{\n\n    width: 100%;\n\n    height: 65%;\n\n    align-content: center;\n\n    padding-top: 40px;\n\n  }\n\n</style>\n\n\n\n  <ion-content padding>\n\n      <ion-header>\n\n          <p class="p-header">VACIMAPS</p>\n\n          <button class="menu" ion-button menuToggle>\n\n            <ion-label>Olá {{nome}}</ion-label>\n\n            <ion-avatar>\n\n              <ion-icon name="ios-contact"></ion-icon>\n\n            </ion-avatar>\n\n          </button>\n\n        </ion-header>\n\n\n\n        <ion-searchbar placeholder="Digite um nome de cidade"></ion-searchbar>\n\n\n\n        <ion-img src="./assets/imgs/Design.png"></ion-img>\n\n  </ion-content>\n\n\n\n        '/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\tab1\tab1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Tab1Page);
    return Tab1Page;
}());

//# sourceMappingURL=tab1.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Tab2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab2Page');
    };
    Tab2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab2',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\tab2\tab2.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Regular;\n\n    src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n  }\n\n\n\n  ion-content{\n\n    font-family: \'Souliyo Regular\', sans-serif;\n\n    background-color: #F1EEEE;\n\n  }\n\n  h1{\n\n    color: #FFFFFF; font-size: 12px; font-weight: 100; font-style: normal; line-height: normal;\n\n  }\n\n  p{\n\n    color:#808080;\n\n  } \n\n  ion-card{\n\n    background: rgba(18, 97, 76, 0.23);\n\n    width: 270px;\n\n    height: 100px;\n\n  }\n\n  .btn{\n\n    position: absolute;\n\n    bottom: 75px;\n\n    right: 53px;\n\n    padding-right: 2px;\n\n    padding-left: 3px;\n\n  }\n\n  .btn-2{\n\n    position: absolute;\n\n    bottom: 75px;\n\n    right: 18px;\n\n    padding: 2px;\n\n    padding-left: 3px;\n\n  }\n\n  .icon-btn{\n\n    background-color: #EEE9E9;\n\n    padding: 5px;\n\n    border-radius: 3px;\n\n  }\n\n  .p-card{\n\n    font-size: 12px;\n\n    color: white;\n\n    font-weight: bold;\n\n  }\n\n  ion-searchbar--placeholder-color{\n\n    color: #C4C4C4; \n\n  }\n\n  ion-searchbar--background{\n\n    color: white;\n\n  }\n\n  ion-searchbar{\n\n    background-color: white;\n\n    margin-left: 15px;\n\n    margin-top: 25%;\n\n    width: 98%;\n\n    font-size: 9px;\n\n  }\n\n  ion-header{\n\n    background-color: #3C7D6B;\n\n    width: 100%;\n\n    height: 50px;\n\n    display: flex;\n\n    flex-direction: row;\n\n  }\n\n  .menu{\n\n    background-color: #3C7D6B;\n\n    margin-left: 40%;\n\n    padding-top: 7px;\n\n  }\n\n  .p-header{\n\n    color: white;\n\n    margin-left: 15px;\n\n    padding-top: 7px;\n\n  }\n\n  .btn-vacinas{\n\n    height: 20px;\n\n    width: 90px;\n\n    font-size: 12px;\n\n    padding: 10px;\n\n    margin: 10px;\n\n    left: 20px;\n\n    background-color: white;\n\n    color: darkgrey;\n\n    float: right;\n\n  }\n\n  ion-icon{\n\n    color: #32BEA6;\n\n    padding-right: 5px;\n\n  }\n\n  ion-list{\n\n    left: -60px;\n\n  }\n\n</style>\n\n\n\n    <ion-content padding>\n\n      <ion-header>\n\n        <p class="p-header">VACIMAPS</p>\n\n        <button class="menu" ion-button menuToggle>\n\n          <ion-label>Olá {{nome}}</ion-label>\n\n          <ion-avatar>\n\n            <ion-icon style="color: white;" name="ios-contact"></ion-icon>\n\n          </ion-avatar>\n\n        </button>\n\n      </ion-header>\n\n\n\n      <ion-searchbar placeholder="Digite o nome da vacina"></ion-searchbar>\n\n\n\n      <button class="btn-vacinas" ion-button>\n\n        <ion-icon name="add-circle"></ion-icon>\n\n        Nova vacina \n\n      </button>\n\n\n\n        <ion-list>\n\n            <ion-card>\n\n              <ion-card-header>\n\n              <p class="p-card">MALARIA{{ Vacina }}</p>\n\n            </ion-card-header>\n\n              \n\n            <ion-card-content>\n\n              <p> Data: {{ data }} </p>\n\n              <p> Lote: {{ lote }} </p>\n\n            </ion-card-content>\n\n\n\n            <ion-row text-right>\n\n              <ion-col>\n\n                <button class="btn" ion-button icon-left clear small>\n\n                  <ion-icon class="icon-btn" name="md-create"></ion-icon>\n\n                </button>\n\n                <button class="btn-2" ion-button icon-left clear small>\n\n                  <ion-icon class="icon-btn" name="md-trash"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card>\n\n\n\n          <ion-card>\n\n            <ion-card-header>\n\n              <p class="p-card">FEBRE AMARELA{{ Vacina }}</p>\n\n            </ion-card-header>\n\n          \n\n            <ion-card-content>\n\n              <p> Data: {{ data }} </p>\n\n              <p> Lote: {{ lote }} </p>\n\n            </ion-card-content>\n\n    \n\n            <ion-row text-right>\n\n              <ion-col>\n\n                <button class="btn" ion-button icon-left clear small>\n\n                  <ion-icon class="icon-btn" name="md-create"></ion-icon>\n\n                </button>\n\n                <button class="btn-2" ion-button icon-left clear small>\n\n                  <ion-icon class="icon-btn" name="md-trash"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card>\n\n\n\n          <ion-card>\n\n            <ion-card-header>\n\n              <p class="p-card">INFLUENZA A{{ Vacina }}</p>\n\n            </ion-card-header>\n\n            \n\n            <ion-card-content>\n\n              <p> Data: {{ data }} </p>\n\n              <p> Lote: {{ lote }} </p>\n\n            </ion-card-content>\n\n      \n\n            <ion-row text-right>\n\n              <ion-col>\n\n                <button class="btn" ion-button icon-left clear small>\n\n                  <ion-icon class="icon-btn" name="md-create"></ion-icon>\n\n                </button>\n\n                <button class="btn-2" ion-button icon-left clear small>\n\n                  <ion-icon class="icon-btn" name="md-trash"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card>\n\n\n\n        </ion-list>\n\n\n\n    </ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\tab2\tab2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Tab2Page);
    return Tab2Page;
}());

//# sourceMappingURL=tab2.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = 'Tab1Page';
        this.tab2Root = 'Tab2Page';
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<style>\n\nion-tab{\n\n  color: #12614C;\n\n}\n\n</style>\n\n      \n\n    <ion-tabs [selectedIndex]="myIndex">\n\n      <ion-tab [root]="tab1Root" tabTitle="DashBoard - Mapa" tabIcon="globe"></ion-tab>\n\n      <ion-tab [root]="tab2Root" tabTitle="Minhas vacinas" tabIcon="book"></ion-tab>\n\n    </ion-tabs>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redefinir_senha_redefinir_senha__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__esqSenha_esqSenha__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, appCtrl, toast, formBuilder) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.appCtrl = appCtrl;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validEmail: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
            vaidSenha: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required],
        });
    }
    HomePage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    HomePage.prototype.redefinir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__redefinir_senha_redefinir_senha__["a" /* RedefinirSenhaPage */]);
    };
    HomePage.prototype.esqSenha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__esqSenha_esqSenha__["a" /* EsqSenhaPage */]);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/login";
        this.http
            .post(url, { email: this.email, password: this.senha })
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Usuario não encontrado') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else if (res['Mensagem'] == 'Senha Incorreta!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                localStorage.setItem('token', JSON.stringify(res));
                _this.toast.create({ message: "Bem Vindo!", duration: 3000, position: 'botton' }).present();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\home\home.html"*/'<style>\n\n  @font-face {\n\n    font-family: Souliyo-Regular;\n\n    src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n  }\n\n\n\n  ion-content{\n\n    font-family: \'Souliyo Regular\', sans-serif;  mix-blend-mode: luminosity;\n\n  }\n\n  h1{\n\n    color: white; padding: 80px 25px 45px 25px; text-align: center; font-size: 35px; font-weight: 100; font-style: normal; line-height: normal;\n\n  }\n\n  ion-item{\n\n    background-color: #12614C; color: white; align-content: center;\n\n  }\n\n  input::placeholder{\n\n    width: 230px; text-align: center; color: white; font-size: 12px; font-family: Roboto;\n\n  }\n\n  button{\n\n    width: 230px; height: 30px; color: #12614C; margin-left: 15px; margin-top: 25px;\n\n  }\n\n  .btn-others{\n\n   color: white; font-size: 12px; cursor: pointer; display: flex; flex-direction: column; text-align: center; margin: 8px; \n\n  }\n\n  .btn-new{\n\n    padding-top: 14px;\n\n  }\n\n  .btn-pass{\n\n    padding-top: 10px;\n\n  }\n\n</style>\n\n\n\n\n\n<ion-content style="background-color: #12614C; ">\n\n<body>\n\n  <h1>VACIMAPS</h1>\n\n  <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n\n\n      <ion-item>\n\n        <ion-input type="email"  [formControl]="formulario.controls[\'validEmail\']" [(ngModel)]="email" placeholder="e-mail"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-input type="password"  [formControl]="formulario.controls[\'vaidSenha\']" [(ngModel)]="senha" placeholder="senha"></ion-input>\n\n      </ion-item>\n\n\n\n      <button ion-button color="light" (click)=\'login()\' [disabled]="!formulario.valid">Entrar</button>\n\n    </ion-list>\n\n  </form>\n\n  <div>\n\n    <a class="btn-new btn-others" (click)="cadastrar()">Novo por aqui?</a>\n\n    <a class="btn-pass btn-others" (click)="esqSenha()">Esqueci minha senha</a>\n\n  </div>\n\n</body>\n\n</ion-content> \n\n\n\n'/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//.pipe(map(response => { localStorage.setItem('token', JSON.stringify(response)) }))
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, appCtrl, toast, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.toast = toast;
        this.http = http;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validNome: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            validEmail: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            vaidSenha: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.Voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CadastroPage.prototype.doPOST = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/usuario";
        this.datajson = {
            nome: this.nome,
            senha: this.senha,
            email: this.email,
        };
        console.log(this.datajson);
        this.http
            .post(url, this.datajson)
            .subscribe(function (res) {
            if (res['Mensagem'] == 'O email informado já está cadastrado!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
            else {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
        });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\cadastro\cadastro.html"*/'<style>\n\n@font-face {\n\n    font-family: Souliyo-Regular;\n\n    src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n}\n\n\n\n  ion-content{\n\n    font-family: \'Souliyo Regular\', sans-serif;\n\n  }\n\n  h1{\n\n    color: white; text-align: center;\n\n    padding: 40px 25px 45px 25px;\n\n    letter-spacing: 0.9px;\n\n  }\n\n  ion-item{\n\n    background-color: #12614C; color: white; align-content: center;\n\n  }\n\n  input::placeholder{\n\n    text-align: center; color: white; font-size: 12px; \n\n  }\n\n  button{\n\n    width: 210px; height: 30px; color: #12614C; margin-left: 7px; margin-top: 15px;\n\n  }\n\n  .btn-back{\n\n    color: white; font-size: 10px; padding-right: 185px; padding-top: 10px;\n\n  }\n\n\n\n</style>\n\n\n\n<ion-content padding style="background-color: #12614C">\n\n\n\n  <button ion-button clear class="btn-back" (click)="Voltar()"><< voltar</button>\n\n\n\n  <h1>VACIMAPS</h1>\n\n  <form [formGroup]="formulario">\n\n    <ion-list inset>\n\n\n\n      <ion-item>\n\n        <ion-input type="text"[formControl]="formulario.controls[\'validNome\']" [(ngModel)]="nome" placeholder="nome"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-input type="email" [formControl]="formulario.controls[\'validEmail\']" [(ngModel)]="email" placeholder="e-mail" ></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-input type="password" [formControl]="formulario.controls[\'vaidSenha\']"[(ngModel)]="senha" placeholder="senha" ></ion-input>\n\n      </ion-item>\n\n      <br>\n\n\n\n      <button ion-button color="light" (click)="doPOST()" [disabled]="!formulario.valid">Cadastrar</button>\n\n    </ion-list>\n\n  </form> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RedefinirSenhaPage = /** @class */ (function () {
    function RedefinirSenhaPage(navCtrl, http, navParams, appCtrl, toast, formBuilder) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            validConfSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.id = navParams.get('id');
    }
    RedefinirSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RedefinirSenhaPage');
    };
    RedefinirSenhaPage.prototype.Voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    RedefinirSenhaPage.prototype.reset_password = function () {
        var _this = this;
        if (this.senha == this.confSenha) {
            var url = this.API_URL + "/reset_password";
            this.http
                .put(url, { id: this.id, senha: this.senha })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Usuario não encontrado!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                }
                else {
                    _this.toast.create({ message: "Senha alterada com sucesso!", duration: 3000, position: 'botton' }).present();
                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
            });
        }
        else {
            this.toast.create({ message: "Senhas Diferentes!", duration: 3000, position: 'botton' }).present();
        }
    };
    RedefinirSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-redefinir-senha',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\redefinir-senha\redefinir-senha.html"*/'<style>\n\n @font-face {\n\n    font-family: Souliyo-Regular;\n\n    src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n  }\n\n\n\n  ion-content{\n\n    font-family: \'Souliyo Regular\', sans-serif;\n\n  }\n\n  h1{\n\n    color: white; text-align: center; font-size: 35px; font-weight: 100; font-style: normal; line-height: normal;\n\n    padding: 110px 25px 35px 25px;\n\n    letter-spacing: 0.9px;\n\n  }\n\n  ion-label{\n\n    color: white; padding-bottom: 5px;\n\n  }\n\n  ion-item{\n\n    background-color: #12614C; color: white; align-content: center;\n\n  }\n\n  input::placeholder{\n\n    text-align: center; color: white; font-size: 12px;\n\n  }\n\n  button{\n\n    width: 210px; height: 30px; color: #12614C; margin-left: 7px; margin-top: 15px;\n\n  }\n\n  .btn-back{\n\n    color: white; font-size: 10px; padding-right: 185px; padding-top: 10px;\n\n  }\n\n\n\n</style>\n\n\n\n<ion-content padding style="background-color: #12614C">\n\n\n\n  <h1>VACIMAPS</h1>\n\n  <form [formGroup]="formulario">\n\n  <ion-list inset>\n\n    <ion-label>\n\n      Redefinir senha:\n\n    </ion-label>\n\n    \n\n    <ion-item>\n\n      <ion-input type="password" [formControl]="formulario.controls[\'validSenha\']" [(ngModel)]="senha" placeholder="Nova Senha"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-input type="password" [formControl]="formulario.controls[\'validConfSenha\']"[(ngModel)]="confSenha" placeholder="Confirmar nova senha"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n\n\n    <button ion-button color="light" (click)=\'reset_password()\' [disabled]="!formulario.valid">Redefinir</button>\n\n  </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\redefinir-senha\redefinir-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RedefinirSenhaPage);
    return RedefinirSenhaPage;
}());

//# sourceMappingURL=redefinir-senha.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map