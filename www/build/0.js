webpackJsonp([0],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacinaModalPageModule", function() { return VacinaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vacina_modal__ = __webpack_require__(302);
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

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacinaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vacina_services__ = __webpack_require__(214);
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
            selector: 'page-vacina-modal',template:/*ion-inline-start:"C:\Users\Thais Lopes\Vacimaps\src\pages\vacina-modal\vacina-modal.html"*/'<style>\n\n    @font-face {\n\n      font-family: Souliyo-Unicode;\n\n      src: url(../www/assets/fonts/Souliyo-Unicode.ttf)\n\n    }\n\n  \n\n    ion-content{\n\n      font-family: \'Souliyo-Unicode\', sans-serif;\n\n      background-color: #a8a8a867;\n\n    }\n\n    div{\n\n      height:215px; \n\n      width:300px; \n\n      border-radius: 5px; \n\n      margin-top: 175px;\n\n      align-items: center;\n\n      margin-left: 10px; \n\n      background-color: #BECEC9;\n\n      box-shadow: 3px 3px 3px 1px black;\n\n    }\n\n    h1{\n\n      color: #FFFFFF; font-size: 12px; font-weight: 100; font-style: normal; line-height: normal;\n\n    }\n\n    ion-label{\n\n      color:#808080;\n\n    }\n\n    .btn{\n\n      position: absolute;\n\n      bottom: 68px;\n\n      right: 32px;\n\n      padding-right: 2px;\n\n      padding-left: 3px;\n\n    }\n\n    .btn-2{\n\n      position: absolute;\n\n      bottom: 68px;\n\n      right: 3px;\n\n      padding: 2px;\n\n      padding-left: 3px;\n\n    }\n\n    .icon-btn{\n\n      background-color: #EEE9E9;\n\n      padding: 5px;\n\n      border-radius: 3px;\n\n    }\n\n    .btn-nv-vacinas{\n\n      height: 20px;\n\n      width: 100px;\n\n      font-size: 12px;\n\n      /* padding: 10px; */\n\n      left: -3px;\n\n      background-color: white;\n\n      color: darkgrey;\n\n      /* float: right; */\n\n      text-transform: inherit;\n\n    }\n\n    .placeholder-input{\n\n      background-color: white;\n\n      width: 10px;\n\n      height: 28px;\n\n    }\n\n    ion-input--placeholder-color{\n\n      color: #FFFFFF;\n\n      left: -10px;\n\n    }\n\n    .input-margin{\n\n      margin-left: -55px;\n\n      margin-right: 8px;\n\n      border-radius: 4px;\n\n    }\n\n    ion-input .text-input{\n\n      margin-left: 11px;\n\n      font-size: 12px;\n\n    }\n\n    ion-select{\n\n      font-size: 12px;\n\n    }\n\n    ion-item{\n\n      border-radius: 10px;\n\n    }\n\n    ion-datetime{\n\n    background-color: white;\n\n    width: 60%;\n\n    height: 18px;\n\n    margin-left: -55px;\n\n    margin-right: 8px;\n\n    margin-top: 7px;\n\n    border-radius: 4px;\n\n    font-size: 12px;\n\n    }\n\n    .card-content-ios[_ngcontent-c3] {\n\n      padding: 0px 5px 0px;\n\n      font-size: 1.4rem;\n\n      line-height: 1.4;\n\n    }\n\n    /* css que nao vou usar mais mas que eh bom manter pq vai que \n\n    .nv-vacina{\n\n      display: flex;\n\n      flex-direction: row;\n\n    }\n\n    ion-searchbar--placeholder-color{\n\n      color: #C4C4C4; \n\n    }\n\n    ion-searchbar--background{\n\n      color: white;\n\n    }\n\n    ion-list{\n\n      left: -60px;\n\n    }\n\n    ion-datetime--placeholder-color{\n\n      color: #FFFFFF;\n\n    }\n\n     ion-datetime--placeholder{\n\n      font-size: 10px;\n\n    }\n\n    ion-grid{\n\n      background: rgba(18, 97, 76, 0.23);\n\n      width: 265px;\n\n      height: 170px;\n\n    }\n\n    .btn-nv-vacina{\n\n      left: -26px;\n\n      top: -12px;\n\n    } \n\n    */\n\n  \n\n  </style>\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <ion-row justify-content-center>\n\n        <ion-list>\n\n            <ion-col>\n\n              <ion-row>\n\n                  <ion-item>\n\n                      <ion-label>Vacinas</ion-label>\n\n                      <ion-select  [formControl]="formulario.controls[\'validarVacina\']" [(ngModel)]="vacina" disabled="disabled">\n\n                          <ion-option *ngFor="let c of vacinas" [value] = "c.id_vacina" >{{ c.nome_vacina }}</ion-option>\n\n                      </ion-select>\n\n                    </ion-item>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <ion-row>\n\n                    <ion-label>Data</ion-label>\n\n                    <!--<ion-datetime display-format="MM/DD/YYYY" placeholder="dd/mm/aaaa"></ion-datetime>-->\n\n                    <ion-datetime  [formControl]="formulario.controls[\'validarData\']" display-format="DD/MM/YYYY" [(ngModel)]="data"></ion-datetime>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <ion-row>\n\n                    <ion-label>Lote: </ion-label>\n\n                    <ion-input  type="text" class="placeholder-input input-margin" [formControl]="formulario.controls[\'vaidarLote\']" [(ngModel)]="lote"></ion-input>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <button class="btn-nv-vacinas" (click)="closeModal()" ion-button>\n\n\n\n                    <ion-icon style="color: red;" name="close-circle"></ion-icon>\n\n                      Cancelar\n\n                  </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <button class="btn-nv-vacinas" (click)="doPOST()" [disabled]="!formulario.valid" ion-button>\n\n                    <ion-icon style="color: green;" name="checkmark-circle"></ion-icon>\n\n                      Salvar \n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n              <br><br>\n\n            </ion-col>\n\n        </ion-list>\n\n      </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Thais Lopes\Vacimaps\src\pages\vacina-modal\vacina-modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__vacina_services__["a" /* VacinaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
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