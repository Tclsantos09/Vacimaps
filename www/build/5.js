webpackJsonp([5],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_services__ = __webpack_require__(296);
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
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, viewCtrl, profileService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.profileService = profileService;
        this.profileService.getUser().subscribe(function (usuario) {
            _this.usuario = usuario;
            _this.nome = usuario.nome;
        });
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\victoria.rodovalho\Vacimaps\Vacimaps\src\pages\modal\modal.html"*/'<style>\n\n    @font-face {\n\n      font-family: Souliyo-Regular;\n\n      src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n\n    }\n\n  \n\n    ion-content{\n\n      font-family: \'Souliyo Regular\', sans-serif;\n\n    }\n\n    h1{\n\n      color: black; text-align: center; font-size: 18px; font-weight: 100; font-style: normal; line-height: normal; padding-top: 20px;\n\n    }\n\n    ion-label{\n\n      font-size: 12px; font-weight: 100; font-style: normal; line-height: normal; color: #C4C4C4;\n\n    }\n\n    ion-avatar{\n\n      width: 30px; height: 30px; align-content: center;\n\n    }\n\n    ion-item{\n\n      background-color: white; color: black; align-content: center;\n\n    }\n\n    input{\n\n      color: black; font-size: 16px; font-weight: 100;\n\n    }\n\n    ion-datetime{\n\n      color: black; font-size: 12px;\n\n    }\n\n    button{\n\n      width: 50px; height: 20px; font-size: 12px; align-items: center; margin-left: 15px; margin-top: 25px; align-content: flex-end;\n\n    }\n\n    a{\n\n      color: gray;\n\n    }\n\n    ion-icon {\n\n      font-size: 160px;\n\n      vertical-align: auto;\n\n    }\n\n  </style>\n\n  \n\n  \n\n<ion-content>\n\n  \n\n  <body>\n\n    <a (click)="closeModal()"> <ion-icon name="close" style="font-size: 40px; float: right; padding-top: 16px;"></ion-icon></a>\n\n\n\n    <h1>Meu Perfil</h1>\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <ion-icon name="ios-contact"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n      <ion-list inset>\n\n          <ion-label>Nome</ion-label>\n\n        <ion-item>\n\n            <ion-input type="text" name="Nome" value="{{ nome }}"></ion-input>\n\n        </ion-item>\n\n        <ion-label>Data de Nascimento</ion-label>\n\n        <ion-item>\n\n            <ion-datetime display-format="MMM DD, YYYY HH:mm"></ion-datetime>\n\n        </ion-item>\n\n        <button ion-button block (click)="save()" style="background:#4FBA6E; float: right;">Salvar</button>\n\n      </ion-list>\n\n  </body>\n\n</ion-content>  '/*ion-inline-end:"C:\Users\victoria.rodovalho\Vacimaps\Vacimaps\src\pages\modal\modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__profile_services__["a" /* profileService */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var profileService = /** @class */ (function () {
    function profileService(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    profileService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    profileService.prototype.getUser = function () {
        return this.http.get(this.API_URL + "/usuario", { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'token': this.token.token
            }) });
    };
    profileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], profileService);
    return profileService;
}());

//# sourceMappingURL=profile.services.js.map

/***/ })

});
//# sourceMappingURL=5.js.map