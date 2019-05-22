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
        if (this.navParams.data.nome_cidade &&
            this.navParams.data.uf_cidade) {
            this.nome_cidade = this.navParams.data.nome_cidade;
            this.uf_cidade = this.navParams.data.uf_cidade;
        }
    }
    CidadeModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CidadeModalPage');
    };
    CidadeModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CidadeModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cidade-modal',template:/*ion-inline-start:"C:\Users\Thais.Lopes\Vacimaps\src\pages\cidade-modal\cidade-modal.html"*/'<!--\n\n  Generated template for the CidadeModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<style>\n\n  @font-face {\n\n    font-family: Souliyo-Unicode;\n\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n  }\n\n  ion-content{\n\n    font-family: \'Souliyo-Unicode\', sans-serif; background-color: #a8a8a867;\n\n  }\n\n  body{\n\n    height:80%; width:95%; border-radius: 2px; top: 7%; left: 3%; \n\n    background-color: white;\n\n    border-radius: 3px;\n\n    box-shadow: 0.5px 0.5px 0.5px 0.5px black;\n\n  }\n\n  h1{\n\n    color: black; text-align: center; font-size: 18px; font-weight: 100; font-style: normal; line-height: normal; padding-top: 0;\n\n  }\n\n  .modal{\n\n    float: right;\n\n    color: rgba(0, 0, 0, 0.36);\n\n    font-size: 18px; \n\n    padding-top: 10px; \n\n    padding-right: 15px;\n\n  }\n\n  ion-list{\n\n    width: 100%;\n\n    background-color: #F6F5F5;\n\n  }\n\n  ion-label{\n\n    font-size: 12px;\n\n  }\n\n  .letrinha{\n\n    font-size: 7px; color: #000000; margin-left: 7px;\n\n  }\n\n  .letrinha2{\n\n    font-size: 7px; color: #000000; margin-top: -8px; margin-bottom: -3px;\n\n  }\n\n  .coluna1{\n\n    background-color: #E74424;\n\n    border-radius: 4px;\n\n    color: white;\n\n    width: 33px;\n\n    height: 15px;\n\n    font-size: 10px;\n\n    padding-left: 7px;\n\n    padding-top: 2px;\n\n    margin-bottom: -4px;\n\n    margin-top: -5px;\n\n  }\n\n  .coluna2{\n\n    background-color: #B3B3B3;;\n\n    border-radius: 4px;\n\n    color: white;\n\n    width: 45px;\n\n    height: 15px;\n\n    font-size: 10px;\n\n    padding-right: 2px;\n\n    padding-left: 5px;\n\n    padding-top: 2px;\n\n    margin-bottom: -4px;\n\n    margin-top: 5px;\n\n  }\n\n  .colunas1{\n\n    background-color: #48A0DC;\n\n    color: white;\n\n    width: 45px;\n\n    height: 15px;\n\n    font-size: 10px;\n\n    border-radius: 4px;\n\n    padding-right: 3px;\n\n    padding-left: 7px;\n\n    padding-top: 2px;\n\n    margin-bottom: -4px;\n\n    margin-top: -22px;\n\n  }\n\n  .colunas2{\n\n    background-color: #48A0DC;\n\n    color: white;\n\n    width: 67px;\n\n    height: 15px;\n\n    font-size: 10px;\n\n    border-radius: 4px;\n\n    padding-right: 3px;\n\n    padding-left: 5px;\n\n    padding-top: 2px;\n\n    margin-top: -7px;\n\n    margin-left: 6px;\n\n  }\n\n  ion-row{\n\n    background-color: #F6F5F5;\n\n    margin-bottom: 7px;\n\n    align-items: center;\n\n    padding-left: 3px\n\n  }\n\n  .labels{\n\n    margin-right: -34px;\n\n  }\n\n  .labels1{\n\n    margin-right: -19px;\n\n  }\n\n  .paragrafo-doencas{\n\n    font-size: 10px;\n\n  }\n\n</style>\n\n\n\n\n\n<ion-content>\n\n\n\n<body>\n\n  <a class="modal" (click)="closeModal()"> X</a>\n\n\n\n  <h1>{{ nome_cidade }} - {{ uf_cidade }}</h1>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-label class="labels1">Vacinacao obrigatoria</ion-label> \n\n      <ion-col align-self-center>\n\n        <p class="coluna1">Nao</p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-label class="labels">Vacinacao Sugerida</ion-label>\n\n      <ion-col align-self-center>\n\n        <p class="coluna2">Dengue</p>\n\n        <p class="letrinha">Pendente</p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-row>\n\n        <ion-label style="margin-left: 44px;">Doencas endemicas da regiao</ion-label>\n\n      </ion-row>\n\n      <ion-row>\n\n          <p class="colunas2">Leptospirose</p>\n\n        <ion-row>\n\n          <p class="letrinha2">Clique na doenca para ter mais informacoes</p>\n\n          <ion-card>\n\n            <ion-card-content>\n\n              <p class="paragrafo-doencas">\n\n                Leptospirose é uma doença causada por uma bactéria presente na urina do rato que, normalmente, se espalha pela água suja de enchentes e esgotos. <br>\n\n                <b>Profilaxia e recomendações:</b> evite o contato com água ou lama de enchentes ou esgotos, ou qualquer outro que possa estar contaminado pela urina dos ratos. Procure o posto de saúde mais próximo em caso de suspeita de contaminação. <br>\n\n                <b>Sinais e sintomas:</b> o período de incubação da doença varia de 1 a 30 dias, sendo mais frequente entre 5 a 14 dias. <br>\n\n                <b>Fase precoce (leptospirêmica):</b> Febre abrupta; Dores de cabeça; Dores e desconforto nos músculos. <br>\n\n                <b>Fase tardia (fase imune):</b> Ictericia (pele amarelada ou alaranjada); Insuficiência renal; Hemorragia (principalmente pulmonar)\n\n              </p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-row>\n\n      </ion-row>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n</body>\n\n</ion-content>  '/*ion-inline-end:"C:\Users\Thais.Lopes\Vacimaps\src\pages\cidade-modal\cidade-modal.html"*/,
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