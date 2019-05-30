webpackJsonp([3],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeModalPageModule", function() { return CidadeModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cidade_modal__ = __webpack_require__(297);
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

/***/ 297:
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
            selector: 'page-cidade-modal',template:/*ion-inline-start:"/home/renan/Vídeos/Vacimaps/src/pages/cidade-modal/cidade-modal.html"*/'<!--\n  Generated template for the CidadeModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  ion-content{\n    font-family: \'Souliyo-Unicode\', sans-serif; background-color: #a8a8a867;\n  }\n  body{\n    height:75%; width:93%; border-radius: 5px; top: 13%; left: 4%; \n    background-color: white;\n  }\n  h1{\n    color: black; text-align: center; font-size: 18px; font-weight: 100; font-style: normal; line-height: normal; padding-top: 0;\n  }\n  .modal{\n    float: right;\n    color: rgba(0, 0, 0, 0.36);\n    font-size: 18px; \n    padding-top: 10px; \n    padding-right: 15px;\n  }\n  ion-list{\n    width: 100%;\n    background-color: #F6F5F5;\n  }\n  ion-label{\n    font-size: 12px;\n  }\n  .letrinha{\n    font-size: 7px; color: #000000; margin-left: -20px;\n  }\n  .letrinha2{\n    font-size: 7px; color: #000000; margin-top: -8px; margin-bottom: -3px; margin-left: 5px;\n  }\n  .coluna1{\n    background-color: #E74424;\n    border-radius: 4px;\n    color: white;\n    width: 33px;\n    height: 15px;\n    font-size: 10px;\n    padding-left: 7px;\n    padding-top: 2px;\n    margin-bottom: -4px;\n    margin-top: -5px;\n    margin-left: -27px;\n  }\n  .coluna2{\n    background-color: #B3B3B3;;\n    border-radius: 4px;\n    color: white;\n    width: 45px;\n    height: 15px;\n    font-size: 10px;\n    padding-right: 2px;\n    padding-left: 5px;\n    padding-top: 2px;\n    margin-bottom: -4px;\n    margin-top: 5px;\n    margin-left: -27px;\n  }\n  .colunas1{\n    background-color: #48A0DC;\n    color: white;\n    width: 45px;\n    height: 15px;\n    font-size: 10px;\n    border-radius: 4px;\n    padding-right: 3px;\n    padding-left: 7px;\n    padding-top: 2px;\n    margin-bottom: -4px;\n    margin-top: -22px;\n  }\n  .colunas2{\n    background-color: #48A0DC;\n    color: white;\n    width: 67px;\n    height: 17px;\n    font-size: 10px;\n    border-radius: 4px;\n    padding-right: 3px;\n    padding-left: 5px;\n    padding-top: 3px;\n    margin-top: -15px;\n    margin-left: 6px;\n  }\n  ion-row{\n    background-color: #F6F5F5;\n    margin-bottom: 7px;\n    align-items: center;\n    margin-left: 2px;\n    margin-right: 3px;\n    padding-bottom: 2px;\n  }\n  .labels{\n    margin-right: -34px;\n  }\n  .labels1{\n    margin-right: -19px;\n  }\n  .paragrafo-doencas{\n    font-size: 10px;\n    margin-top: -6px;\n    margin-left: -7px;\n    margin-bottom: -8px;\n    margin-right: -13px;\n}\n</style>\n\n<ion-content>\n\n<body>\n  <a class="modal" (click)="closeModal()"> X</a>\n\n  <h1>{{ nome_cidade }} - {{ uf_cidade }}</h1>\n\n  <ion-grid>\n    <ion-row>\n      <ion-label class="labels1">Vacinação obrigatória</ion-label> \n      <ion-col align-self-center>\n        <p class="coluna1">Não</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-label class="labels">Vacinação sugerida</ion-label>\n      <ion-col align-self-center>\n        <p class="coluna2">Dengue</p>\n        <p class="letrinha">Pendente</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-row>\n        <ion-label style="margin-left: 73px;">Doenças endemicas da região</ion-label>\n      </ion-row>\n      <ion-row>\n          <p class="colunas2">Leptospirose</p>\n        <ion-row>\n          <p class="letrinha2">Clique na doença para ter mais informações</p>\n          <ion-card>\n            <ion-card-content>\n              <p class="paragrafo-doencas">\n                Leptospirose é uma doença causada por uma bactéria presente na urina do rato que, normalmente, se espalha pela água suja de enchentes e esgotos. <br>\n                <b>Profilaxia e recomendações:</b> evite o contato com água ou lama de enchentes ou esgotos, ou qualquer outro que possa estar contaminado pela urina dos ratos. Procure o posto de saúde mais próximo em caso de suspeita de contaminação. <br>\n                <b>Sinais e sintomas:</b> o período de incubação da doença varia de 1 a 30 dias, sendo mais frequente entre 5 a 14 dias. <br>\n                <b>Fase precoce (leptospirêmica):</b> Febre abrupta; Dores de cabeça; Dores e desconforto nos músculos. <br>\n                <b>Fase tardia (fase imune):</b> Ictericia (pele amarelada ou alaranjada); Insuficiência renal; Hemorragia (principalmente pulmonar)\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </ion-row>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n  \n</body>\n</ion-content>  '/*ion-inline-end:"/home/renan/Vídeos/Vacimaps/src/pages/cidade-modal/cidade-modal.html"*/,
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