webpackJsonp([0],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(288);
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

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function ModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\thais.lopes\Vacimaps\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n  <style>\n    @font-face {\n      font-family: Souliyo-Regular;\n      src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n    }\n  \n    ion-content{\n      font-family: \'Souliyo Regular\', sans-serif;\n    }\n    h1{\n      color: black; text-align: center; font-size: 16px; font-weight: 100; font-style: normal; line-height: normal;\n    }\n    ion-label{\n      color: black; font-size: 12px; font-weight: 100; font-style: normal; line-height: normal;\n    }\n    ion-avatar{\n      width: 30px; height: 30px; align-content: center;\n    }\n    ion-item{\n      background-color: white; color: black; align-content: center;\n    }\n    input{\n      color: black; font-size: 12px; \n    }\n    button{\n      width: 50px; height: 20px; font-size: 12px; align-items: center; margin-left: 15px; margin-top: 25px;\n    }\n  </style>\n  \n  \n<ion-content>\n  <ion-buttons end>\n    <button ion-button (click)="closeModal()">X</button>\n  </ion-buttons>\n  <body>\n    <h1>Meu Perfil</h1>\n    \n    <ion-avatar item-start>\n        <img src="../../assets/imgs/perfil.png" >\n    </ion-avatar>\n      <ion-list inset>\n        <h4>Nome</h4>\n        <ion-item>\n            \n            <ion-input type="text" name="Nome" >{{ nome }}</ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Data de Nascimento</ion-label>\n            <ion-datetime display-format="MMM DD, YYYY HH:mm"></ion-datetime>\n          </ion-item>\n  \n        <button ion-button block (click)="save()" style="background:green;color:black;">Salvar</button>\n      </ion-list>\n  </body>\n</ion-content>  '/*ion-inline-end:"C:\Users\thais.lopes\Vacimaps\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map