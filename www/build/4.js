webpackJsonp([4],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfiguracoesPageModule = /** @class */ (function () {
    function ConfiguracoesPageModule() {
    }
    ConfiguracoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */]),
            ],
        })
    ], ConfiguracoesPageModule);
    return ConfiguracoesPageModule;
}());

//# sourceMappingURL=configuracoes.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
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



var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracoesPage');
    };
    ConfiguracoesPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"C:\Users\victoria.rodovalho\Vacimaps\Vacimaps\src\pages\configuracoes\configuracoes.html"*/'<style>\n  @font-face {\n      font-family: Souliyo-Regular;\n      src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n  }\n  ion-content{\n    font-family: \'Souliyo Regular\', sans-serif;\n    background-color: white;\n  }\n  ion-label{\n    padding-top: 40px; padding-bottom: 20px; text-align: center; font-size: 17px;\n  }\n  .div-config{\n    background-color: #F6F5F5;  margin: 5px; padding: 2px; \n  }\n  .input-email{\n    text-align: center; top: -15px; font-size: 11px; margin-top: 15px; color: #C4C4C4; \n  }\n \n  ion-input{\n    top: -18px; margin-bottom: -12px; left: 4px;\n  }\n  input::placeholder{\n    text-align: center; color: #B3B3B3; font-size: 11px; background-color: white; padding: 10px; \n  }\n  p{\n    font-size: 10px; color: #C4C4C4; \n  }\n  .btn-salvar{\n    padding: 10px; width: 55px; height: 25px; font-size: 11px; left: 190px; top: 140px; background-color: #4FBA6E; color: white;\n  }\n  .btn-back{\n    color: #12614C; font-size: 10px; padding-right: 195px; padding-top: 20px;\n  }\n</style>\n\n<ion-content padding style="background-color: #fff">\n  <body>\n\n    <a (click)="closeModal()"> <ion-icon name="close" style="font-size: 40px; float: right; padding-top: 16px;"></ion-icon></a>\n\n    <ion-label>\n      Configurações\n    </ion-label>\n    \n    <div class="div-config">\n      <p>E-mail</p>\n      <ion-input class="input-email" type="email" placeholder="joao_silva@email.com.br" disabled></ion-input>\n\n      <p>Alterar senha</p>\n        <ion-input type="password" placeholder="Digite a senha atual"></ion-input>\n    \n        <ion-input type="password" placeholder="Digite a nova senha"></ion-input>\n\n        <ion-input type="password" placeholder="Confirme a nova senha"></ion-input>\n      <br>\n    </div>\n\n    <button ion-button class="btn-salvar" (click)="save()" color="light">Salvar</button>\n  </body>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\victoria.rodovalho\Vacimaps\Vacimaps\src\pages\configuracoes\configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _c || Object])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ })

});
//# sourceMappingURL=4.js.map