webpackJsonp([3],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeModalPageModule", function() { return CidadeModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cidade_modal__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CidadeModalPageModule = /** @class */ (function () {
    function CidadeModalPageModule() {
    }
    CidadeModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cidade_modal__["a" /* CidadeModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cidade_modal__["a" /* CidadeModalPage */]),
            ],
        })
    ], CidadeModalPageModule);
    return CidadeModalPageModule;
}());

//# sourceMappingURL=cidade-modal.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadeModalPage; });
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



/**
 * Generated class for the CidadeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CidadeModalPage = /** @class */ (function () {
    function CidadeModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    CidadeModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CidadeModalPage');
    };
    CidadeModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CidadeModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cidade-modal',template:/*ion-inline-start:"/home/renan/Vídeos/Vacimaps/src/pages/cidade-modal/cidade-modal.html"*/'<!--\n  Generated template for the CidadeModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n  @font-face {\n    font-family: Souliyo-Regular; overflow: hidden;\n    src: url(../www/assets/fonts/Souliyo-Regular.ttf)\n  }\n\n  ion-content{\n    font-family: \'Souliyo Regular\', sans-serif; height:80%; width:95%; border-radius: 2px; top: 7%; left: 3%; \n  }\n  h1{\n    color: black; text-align: center; font-size: 18px; font-weight: 100; font-style: normal; line-height: normal; padding-top: 0;\n  }\n  .modal{\n    float: right;\n  }\n  ion-list{\n    width: 100%;\n    background-color: #F6F5F5;\n  }\n  ion-label{\n    font-size: 12px;\n  }\n  .letrinha{\n    font-size: 7px; color: #000000; margin-left: 7px;\n  }\n  .letrinha2{\n    font-size: 7px; color: #000000; margin-left: 7px; margin-top: -3px;\n  }\n  .coluna1{\n    background-color: #E74424;\n    border-radius: 4px;\n    color: white;\n    width: 33px;\n    height: 15px;\n    font-size: 10px;\n    padding-left: 7px;\n    padding-top: 2px;\n    margin-bottom: -4px;\n    margin-top: -5px;\n  }\n  .coluna2{\n    background-color: #B3B3B3;;\n    border-radius: 4px;\n    color: white;\n    width: 45px;\n    height: 15px;\n    font-size: 10px;\n    padding-right: 3px;\n    padding-left: 4px;\n    padding-top: 2px;\n    margin-bottom: -4px;\n    margin-top: 5px;\n  }\n  .colunas1{\n    background-color: #48A0DC;\n    color: white;\n    width: 45px;\n    height: 15px;\n    font-size: 10px;\n    border-radius: 4px;\n    padding-right: 3px;\n    padding-left: 7px;\n    padding-top: 2px;\n    margin-bottom: -4px;\n    margin-top: -17px;\n  }\n  .colunas2{\n    background-color: #48A0DC;\n    color: white;\n    width: 67px;\n    height: 15px;\n    font-size: 10px;\n    border-radius: 4px;\n    padding-right: 3px;\n    padding-left: 7px;\n    padding-top: 2px;\n    margin-bottom: -4px;\n    margin-top: -17px;\n    margin-left: -18px;\n  }\n  ion-row{\n    background-color: #F6F5F5;\n    margin-bottom: 7px;\n    align-items: center;\n  }\n  .labels{\n    margin-right: -34px;\n  }\n  .labels1{\n    margin-right: -19px;\n  }\n</style>\n\n\n<ion-content>\n\n<body>\n  <a class="modal" (click)="closeModal()"> X</a>\n\n  <h1>Nome da cidade</h1>\n\n  <ion-grid>\n    <ion-row>\n      <ion-label class="labels1">Vacinacao obrigatoria</ion-label> \n      <ion-col align-self-center>\n        <p class="coluna1">Nao</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-label class="labels">Vacinacao Sugerida</ion-label>\n      <ion-col align-self-center>\n        <p class="coluna2">Dengue</p>\n        <p class="letrinha">Pendente</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-row>\n        <ion-label class="">Doencas endemicas da regiao</ion-label>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p class="colunas1">Degue</p>\n        </ion-col>\n        <ion-col>\n          <p class="colunas2">Leptospirose</p>\n        </ion-col>\n        <p class="letrinha2">Clique na doenca para ter mais informacoes</p>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n  \n</body>\n</ion-content>  '/*ion-inline-end:"/home/renan/Vídeos/Vacimaps/src/pages/cidade-modal/cidade-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CidadeModalPage);
    return CidadeModalPage;
}());

//# sourceMappingURL=cidade-modal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map