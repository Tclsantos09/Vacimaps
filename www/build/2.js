webpackJsonp([2],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(297);
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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-configuracoes',template:/*ion-inline-start:"/home/renan/Vídeos/Vacimaps/src/pages/configuracoes/configuracoes.html"*/'<style>\n  @font-face {\n      font-family: Souliyo-Regular;\n      src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n  }\n  ion-content{\n    font-family: \'Souliyo Regular\', sans-serif; height:85%; width:95%; border-radius: 5px; top: 10%; left: 3%; \n  }\n  h1{\n    color: black; text-align: center; font-size: 18px; font-weight: 100; font-style: normal; line-height: normal; padding-top: 0px; padding-bottom: 15px;\n  }\n  .div-config{\n    background-color: #F6F5F5;  \n  }\n  .input-email{\n    text-align: center; font-size: 12px; color: #C4C4C4; top: -23px;\n  }\n  ion-input{\n    left: 4px; height: 30px; top: -24px; \n  }\n  input::placeholder{\n    text-align: center; color: #B3B3B3; font-size: 12px; background-color: #FFFFFF; height: 30px;\n  }\n  p{\n    font-size: 12px; color: #C4C4C4; margin-top: -11px;\n  }\n  .btn-salvar{\n    width: 55px; \n    height: 20px; \n    font-size: 10px; \n    align-items: center; \n    margin-left: 15px; \n    margin-top: 60px; \n    align-content: flex-end; \n    background-color: #4FBA6E;\n    float: right;\n    color: #FFFFFF;\n  }\n  ion-icon {\n    font-size: 160px;\n    vertical-align: auto;\n  }\n  a{\n    color: gray;\n  }\n</style>\n\n<ion-content>\n  <body>\n    <a (click)="closeModal()"> <ion-icon name="close" style=" cursor: pointer; font-size: 30px; float: right; padding-top: 10px;"></ion-icon></a>\n\n    <h1>Configurações</h1>\n    \n    <div class="div-config">\n      <p>E-mail</p>\n      <ion-input class="input-email" type="email" placeholder="joao_silva@email.com.br" disabled></ion-input>\n\n      <p>Alterar senha</p>\n        <ion-input  type="password" placeholder="Digite a senha atual"></ion-input>\n    \n        <ion-input type="password" placeholder="Digite a nova senha"></ion-input>\n\n        <ion-input type="password" placeholder="Confirme a nova senha"></ion-input>\n    </div>\n\n    <button ion-button class="btn-salvar" (click)="save()" color="light">Salvar</button>\n  </body>\n  \n</ion-content>'/*ion-inline-end:"/home/renan/Vídeos/Vacimaps/src/pages/configuracoes/configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ })

});
//# sourceMappingURL=2.js.map