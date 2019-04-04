import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { CadastroPage } from '../cadastro/cadastro';
import { IonicPage, NavController, NavParams, ToastController,App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { VerifyCodePage } from '../verify-code/verify-code';

@IonicPage()
@Component({
  selector: 'page-esqSenha',
  templateUrl: 'esqSenha.html',
})
export class EsqSenhaPage {
  private API_URL = 'https://vacimaps-app.herokuapp.com'

  private formulario: FormGroup;
  email: string;
  datajson;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private toast: ToastController, 
    public appCtrl: App,
    private http: HttpClient,
    private formBuilder: FormBuilder) {
      this.formulario = this.formBuilder.group({
        validEmail: ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqSenhaPage');
  }

  Voltar(){
    this.navCtrl.push(HomePage)
  }
  
  cadastrar(){
    this.navCtrl.push(CadastroPage)
  }

  forgot_password() {
    console.log("POST");
    let url = `${this.API_URL}/forgot_password`;
    this.datajson ={ 
      email: this.email,
    }
    console.log(this.datajson);
    this.http
      .post(url, this.datajson)
      .subscribe(res => {
        if(res['Mensagem'] == 'Usuario não encontrado!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
       
        }else{
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
          this.appCtrl.getRootNav().setRoot(VerifyCodePage)
        }
      })
         
  }


}