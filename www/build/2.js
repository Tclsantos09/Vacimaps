webpackJsonp([2],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(300);
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

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
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
    function ConfiguracoesPage(navCtrl, navParams, formBuilder, profileService, toast, http, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.profileService = profileService;
        this.toast = toast;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.profileService.getUser().subscribe(function (usuario) {
            _this.email = usuario.email;
        });
        this.formulario = this.formBuilder.group({
            validarSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            validarNovaSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            validarConfSenha: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracoesPage');
    };
    ConfiguracoesPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ConfiguracoesPage.prototype.doPut = function () {
        var _this = this;
        console.log("POST");
        var url = this.API_URL + "/change_password";
        this.datajson = {
            senha_atual: this.senhaAtual,
            nova_senha: this.novasenha,
        };
        console.log(this.datajson);
        if (this.novasenha == this.confsenha) {
            this.http
                .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Senha alterada com sucesso!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                    _this.closeModal();
                }
                else {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                }
            });
        }
        else {
            this.toast.create({ message: "Senhas Diferentes!", duration: 3000, position: 'botton' }).present();
        }
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"/home/renan/Vídeos/Vacimaps/src/pages/configuracoes/configuracoes.html"*/'<style>\n  @font-face {\n    font-family: Souliyo-Unicode;\n    src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n  }\n  body{ \n    top: 11%; \n    left: 0%; \n    /*background-color: white; */\n    font-family: \'Souliyo-Unicode\', sans-serif;\n  }\n  ion-card{\n    height: 74%;\n    width: 93%;\n    margin-left: 13px;\n    border-radius: 5px;\n  }\n  h1{\n    color: black; text-align: center; font-size: 18px; font-weight: 100; font-style: normal; line-height: normal; padding-top: 0px; padding-bottom: 15px; margin-top: 0.5rem !important;\n  }\n  #div-config{\n    background-color: #F6F5F5;\n    width: 104%;\n    height: 38%;\n    margin-left: -5px;\n    margin-top: 27px;\n    padding-bottom: 27px;\n  }\n  .input-email{\n    text-align: center; font-size: 12px; color: #E7E6E6; top: -23px; padding: 2px; width: 104%; left: -7px; margin-top: 17px;\n  }\n  ion-input{ \n    /* left: 4px; */\n    height: 30px;\n    top: -24px;\n    /* padding: 7px; */\n    width: 102%;\n    left: -4px;\n  }\n  input::placeholder{\n    text-align: center; color: #B3B3B3; font-size: 12px; background-color: #FFFFFF; height: 30px;\n  }\n  p{\n    font-size: 12px; color: #C4C4C4;\n  }\n  #perfil{\n    padding-top: 5px;\n    padding-left: 5px;\n  }\n  #senha{\n    margin-top: -14px;\n  }\n  .btn-salvar{\n    width: 67px; height: 23px; font-size: 12px; align-items: center; margin-left: 80%; margin-top: 55%; /* margin-right: -33px; margin-bottom: 18px; */ align-content: flex-end; text-transform: inherit; padding-top: 2px; border-radius: 5px; box-shadow: none;\n  }\n  ion-icon {\n    font-size: 160px; \n    vertical-align: auto;\n  }\n  a{\n    color: gray;\n  }\n</style>\n\n  <body>\n    <ion-card>\n      <ion-card-content>\n        <a (click)="closeModal()"> <ion-icon name="close" style=" cursor: pointer; font-size: 20px; float: right; padding-top: 6px; padding-right: 10px;"></ion-icon></a>\n\n        <h1>Configurações</h1>\n        \n        <div id="div-config">\n          <p id="perfil">E-mail</p>\n          <ion-input style="top: -33px" class="input-email" type="email" placeholder="{{ email }}" disabled></ion-input>\n\n          <p id="senha">Alterar senha</p>\n            <ion-input style="top: -14px" type="password" [(ngModel)]="senhaAtual" placeholder="Digite a senha atual" [formControl]="formulario.controls[\'validarSenha\']" ></ion-input>\n        \n            <ion-input style="top: -13px" type="password" [(ngModel)]="novasenha"placeholder="Digite a nova senha" [formControl]="formulario.controls[\'validarNovaSenha\']" ></ion-input>\n\n            <ion-input style="top: -10px" type="password" [(ngModel)]="confsenha" placeholder="Confirme a nova senha" [formControl]="formulario.controls[\'validarConfSenha\']" ></ion-input>\n        </div>\n\n        <button ion-button class="btn-salvar" (click)="doPut()" [disabled]="!formulario.valid" color="light">Salvar</button>\n      </ion-card-content> \n    </ion-card>\n  </body>'/*ion-inline-end:"/home/renan/Vídeos/Vacimaps/src/pages/configuracoes/configuracoes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["a" /* profileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__modal_profile_services__["a" /* profileService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ })

});
//# sourceMappingURL=2.js.map