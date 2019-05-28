webpackJsonp([0],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacinaModalPageModule", function() { return VacinaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vacina_modal__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VacinaModalPageModule = /** @class */ (function () {
    function VacinaModalPageModule() {
    }
    VacinaModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vacina_modal__["a" /* VacinaModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vacina_modal__["a" /* VacinaModalPage */]),
            ],
        })
    ], VacinaModalPageModule);
    return VacinaModalPageModule;
}());

//# sourceMappingURL=vacina-modal.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacinaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vacina_services__ = __webpack_require__(212);
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
 * Generated class for the VacinaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VacinaModalPage = /** @class */ (function () {
    function VacinaModalPage(navCtrl, viewCtrl, toast, http, appCtrl, formBuilder, VacinaService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toast = toast;
        this.http = http;
        this.appCtrl = appCtrl;
        this.formBuilder = formBuilder;
        this.VacinaService = VacinaService;
        this.navParams = navParams;
        this.API_URL = 'https://vacimaps-app.herokuapp.com';
        this.formulario = this.formBuilder.group({
            validarVacina: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            validarData: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            vaidarLote: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.token = JSON.parse(localStorage.getItem('token'));
        if (this.navParams.data.nome_vacina &&
            this.navParams.data.data_vacina &&
            this.navParams.data.ds_local_vacina &&
            this.navParams.data.id_usuario_vacina) {
            this.nome_vac = this.navParams.data.nome_vacina;
            this.data = new Date(this.navParams.data.data_vacina).toISOString();
            this.lote = this.navParams.data.ds_local_vacina;
            this.id = this.navParams.data.id_usuario_vacina;
            this.vacina = this.navParams.data.id_vacina;
            ;
        }
        this.VacinaService.getVacinas().subscribe(function (vacinas) {
            _this.vacinas = vacinas;
            _this.nome_vac = _this.vacinas;
        });
        this.hiddenCidades = true;
    }
    VacinaModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VacinaModalPage');
    };
    VacinaModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    VacinaModalPage.prototype.initializeItems = function () {
        this.vacinas = this.nome_vac;
    };
    VacinaModalPage.prototype.doPOST = function () {
        var _this = this;
        if (this.id) {
            this.datajson = {
                id_vacina: this.vacina,
                data_vacina: this.data,
                ds_local_vacina: this.lote,
            };
            console.log(this.datajson);
            var url = this.API_URL + "/usuario/vacina/" + this.id;
            this.http
                .put(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Vacina alterada com sucesso!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                    _this.closeModal();
                }
                else {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                }
            });
        }
        else {
            console.log("POST");
            var url = this.API_URL + "/usuario/vacina";
            this.datajson = {
                id_vacina: this.vacina,
                data_vacina: this.data,
                lote: this.lote,
            };
            console.log(this.datajson);
            this.http
                .post(url, this.datajson, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'token': this.token.token }) })
                .subscribe(function (res) {
                if (res['Mensagem'] == 'Erro ao cadastrar vacina!') {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                }
                else {
                    _this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present();
                    _this.closeModal();
                }
            });
        }
    };
    VacinaModalPage.prototype.getVacinas = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        var val;
        // set val to the value of the searchbar
        try {
            val = ev.target.value;
            if (val.length > 2) {
                this.hiddenCidades = false;
            }
            else {
                this.hiddenCidades = true;
            }
        }
        catch (_a) {
            val = "a";
            this.hiddenCidades = true;
        }
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.vacinas = this.vacinas.filter(function (vacina) {
                return (vacina.nome_vacina.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    VacinaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vacina-modal',template:/*ion-inline-start:"/home/renan/Vídeos/Vacimaps/src/pages/vacina-modal/vacina-modal.html"*/'<style>\n    @font-face {\n      font-family: Souliyo-Unicode;\n      src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n    }\n  \n    ion-content{\n      font-family: \'Souliyo-Unicode\', sans-serif;\n      background-color: #a8a8a867;\n    }\n    div{\n      height:215px; \n      width:300px; \n      border-radius: 5px; \n      margin-top: 175px;\n      align-items: center;\n      margin-left: 10px; \n      background-color: #BECEC9;\n      box-shadow: 3px 3px 3px 1px black;\n    }\n    h1{\n      color: #FFFFFF; font-size: 12px; font-weight: 100; font-style: normal; line-height: normal;\n    }\n    ion-label{\n      color:#808080;\n    }\n    .btn{\n      position: absolute;\n      bottom: 68px;\n      right: 32px;\n      padding-right: 2px;\n      padding-left: 3px;\n    }\n    .btn-2{\n      position: absolute;\n      bottom: 68px;\n      right: 3px;\n      padding: 2px;\n      padding-left: 3px;\n    }\n    .icon-btn{\n      background-color: #EEE9E9;\n      padding: 5px;\n      border-radius: 3px;\n    }\n    .btn-nv-vacinas{\n      height: 20px;\n      width: 100px;\n      font-size: 12px;\n      /* padding: 10px; */\n      left: -3px;\n      background-color: white;\n      color: darkgrey;\n      /* float: right; */\n      text-transform: inherit;\n    }\n    .placeholder-input{\n      background-color: white;\n      width: 10px;\n      height: 28px;\n    }\n    ion-input--placeholder-color{\n      color: #FFFFFF;\n      left: -10px;\n    }\n    .input-margin{\n      margin-left: -55px;\n      margin-right: 8px;\n      border-radius: 4px;\n    }\n    ion-input .text-input{\n      margin-left: 11px;\n      font-size: 12px;\n    }\n    ion-select{\n      font-size: 12px;\n    }\n    ion-item{\n      border-radius: 10px;\n    }\n    ion-datetime{\n    background-color: white;\n    width: 60%;\n    height: 18px;\n    margin-left: -55px;\n    margin-right: 8px;\n    margin-top: 7px;\n    border-radius: 4px;\n    font-size: 12px;\n    }\n    .card-content-ios[_ngcontent-c3] {\n      padding: 0px 5px 0px;\n      font-size: 1.4rem;\n      line-height: 1.4;\n    }\n    /* css que nao vou usar mais mas que eh bom manter pq vai que \n    .nv-vacina{\n      display: flex;\n      flex-direction: row;\n    }\n    ion-searchbar--placeholder-color{\n      color: #C4C4C4; \n    }\n    ion-searchbar--background{\n      color: white;\n    }\n    ion-list{\n      left: -60px;\n    }\n    ion-datetime--placeholder-color{\n      color: #FFFFFF;\n    }\n     ion-datetime--placeholder{\n      font-size: 10px;\n    }\n    ion-grid{\n      background: rgba(18, 97, 76, 0.23);\n      width: 265px;\n      height: 170px;\n    }\n    .btn-nv-vacina{\n      left: -26px;\n      top: -12px;\n    } \n    */\n  \n  </style>\n\n<ion-content padding>\n  <div>\n    <ion-row justify-content-center>\n        <ion-list>\n            <ion-col>\n              <ion-row>\n                  <ion-item>\n                      <ion-label>Vacinas</ion-label>\n                      <ion-select  [formControl]="formulario.controls[\'validarVacina\']" [(ngModel)]="vacina" disabled="disabled">\n                          <ion-option *ngFor="let c of vacinas" [value] = "c.id_vacina" >{{ c.nome_vacina }}</ion-option>\n                      </ion-select>\n                    </ion-item>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-row>\n                    <ion-label>Data</ion-label>\n                    <!--<ion-datetime display-format="MM/DD/YYYY" placeholder="dd/mm/aaaa"></ion-datetime>-->\n                    <ion-datetime  [formControl]="formulario.controls[\'validarData\']" display-format="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-row>\n                    <ion-label>Lote: </ion-label>\n                    <ion-input  type="text" class="placeholder-input input-margin" [formControl]="formulario.controls[\'vaidarLote\']" [(ngModel)]="lote"></ion-input>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <button class="btn-nv-vacinas" (click)="closeModal()" ion-button>\n\n                    <ion-icon style="color: red;" name="close-circle"></ion-icon>\n                      Cancelar\n                  </button>\n                </ion-col>\n                <ion-col>\n                  <button class="btn-nv-vacinas" (click)="doPOST()" [disabled]="!formulario.valid" ion-button>\n                    <ion-icon style="color: green;" name="checkmark-circle"></ion-icon>\n                      Salvar \n                  </button>\n                </ion-col>\n              </ion-row>\n              <br><br>\n            </ion-col>\n        </ion-list>\n      </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/renan/Vídeos/Vacimaps/src/pages/vacina-modal/vacina-modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__vacina_services__["a" /* VacinaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__vacina_services__["a" /* VacinaService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VacinaModalPage);
    return VacinaModalPage;
}());

//# sourceMappingURL=vacina-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map