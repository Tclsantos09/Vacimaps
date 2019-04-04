import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RedefinirSenhaPage } from '../redefinir-senha/redefinir-senha';

/**
 * Generated class for the VerifyCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify-code',
  templateUrl: 'verify-code.html',
})
export class VerifyCodePage {
  private API_URL = 'https://vacimaps-app.herokuapp.com'

  private formulario: FormGroup;
  codigo: string;
  datajson;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private toast: ToastController, 
    public appCtrl: App,
    private http: HttpClient,
    private formBuilder: FormBuilder) {
      this.formulario = this.formBuilder.group({
        validCodigo: ['', Validators.required]
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyCodePage');
  }

  Voltar(){
    this.navCtrl.push(HomePage)
  }

  validar_token() {
    console.log("POST");
    let url = `${this.API_URL}/validar_token`;
    this.datajson ={ 
      token: this.codigo,
    }
    console.log(this.datajson);
    this.http
      .post(url, this.datajson)
      .subscribe(res => {
        if(res['Mensagem'] == 'Código inválido!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
       
        }else{
          this.appCtrl.getRootNav().setRoot(RedefinirSenhaPage, {id: res})
        }
      })

}
}
