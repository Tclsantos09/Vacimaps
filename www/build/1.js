webpackJsonp([1],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(298);
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_services__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
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
    function ModalPage(navCtrl, navParams, toast, http, appCtrl, viewCtrl, profileService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.http = http;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.profileService = profileService;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.profileService.getUser().subscribe(function (usuario) {
            _this.usuario = usuario;
            _this.nome = usuario.nome;
            _this.dt_nascimento = new Date(usuario.dt_nascimento).toISOString();
        });
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.save = function () {
        var _this = this;
        this.datajson = {
            nome: this.nome,
            dt_nascimento: this.dt_nascimento,
        };
        console.log(this.datajson);
        var url = this.API_URL + "/usuario";
        this.http
            .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
            .subscribe(function (res) {
            if (res['Mensagem'] == 'Usuário alterado com sucesso!') {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                _this.closeModal();
            }
            else {
                _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
            }
        });
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/home/renan/Vídeos/Vacimaps/src/pages/modal/modal.html"*/'<style>\n    @font-face {\n      font-family: Souliyo-Unicode;\n      src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n    }\n    body{\n      top: 11%; \n      left: 0%; \n      /*background-color: white; */\n      font-family: \'Souliyo-Unicode\', sans-serif;\n    }\n    ion-card{\n      height: 74%;\n      width: 93%;\n      margin-left: 13px;\n      border-radius: 5px;\n    }\n    h1{\n      color: black; /* text-align: center; */ font-size: 18px; font-weight: 100; font-style: normal; line-height: normal; padding-top: 0px; padding-left: 116px;\n    }\n    #nome{\n      font-size: 12px; font-weight: 100; font-style: normal; line-height: normal; color: #C4C4C4; margin-top: 8px; margin-left: 5px;\n    }\n    #data{\n      font-size: 12px; font-weight: 100; font-style: normal; line-height: normal; color: #C4C4C4; margin-top: 11px; margin-left: 5px; margin-bottom: 12px;\n    }\n    ion-avatar{\n      width: 25px; height: 25px; align-content: center;\n    }\n    ion-item{\n      background-color: white; color: black; align-content: center; width:210px;\n    }\n    input{\n      color: black; font-size: 16px; font-weight: 100; width:100%; align-content:center;\n    }\n    #div-config{\n      background-color: #F6F5F5;\n      margin: -10px;\n      padding: 2px;\n      margin-top: 10px;\n      margin-right: -8px;\n      margin-left: -10px;\n      padding-bottom: 15px;\n    }\n    ion-datetime{\n      color: black; font-size: 12px; top: 3px;\n    }\n    ion-datetime--padding-start{\n      padding: 0px;\n    }\n    button{\n      width: 67px; height: 23px; font-size: 12px; align-items: center; margin-left: 15px; margin-top: 67px; margin-right: -7px; margin-bottom: 18px; align-content: flex-end; text-transform: inherit; padding-top: 2px; border-radius: 5px; box-shadow: none;\n    }\n    a{\n      color: gray;\n    }\n    ion-icon {\n      font-size: 160px; vertical-align: auto;\n    }\n  </style>\n\n  <body>\n    <ion-card>\n      <ion-card-content>\n        <a (click)="closeModal()"> <ion-icon name="close" style="font-size: 20px; float: right; padding-top: 0px; padding-right: 0px;"></ion-icon></a>\n\n        <h1>Meu Perfil</h1>\n        <ion-row>\n          <ion-col text-center>\n            <ion-icon name="ios-contact"></ion-icon>\n          </ion-col>\n        </ion-row>\n            \n        <div id="div-config">\n          <ion-label id ="nome">Nome</ion-label>\n          <ion-item style="width: 98%; padding-top: 0px; padding-left: 0px; margin-top: -9px; margin-left: 2px;">\n            <ion-input type="text" name="Nome"  [(ngModel)]="nome"></ion-input>\n          </ion-item>\n          <ion-label id="data">Data de Nascimento</ion-label>\n          <ion-item style="width:40%; padding-top: 0px; padding-left: 0px; margin-top: -9px; margin-left: 2px;">\n            <ion-datetime display-format="DD/MM/YYYY" [(ngModel)]="dt_nascimento"></ion-datetime>\n          </ion-item>\n        </div>\n        <button ion-button block (click)="save()" style="background:#4FBA6E; float: right;">Salvar</button>\n      </ion-card-content> \n    </ion-card>\n  </body>\n'/*ion-inline-end:"/home/renan/Vídeos/Vacimaps/src/pages/modal/modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__profile_services__["a" /* profileService */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map