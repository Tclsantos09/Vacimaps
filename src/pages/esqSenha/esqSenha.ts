import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { CadastroPage } from '../cadastro/cadastro';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-esqSenha',
  templateUrl: 'esqSenha.html',
})
export class EsqSenhaPage {
  private API_URL = 'https://vacimaps-app.herokuapp.com'

  email: string;
  datajson;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private http: HttpClient) {
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
      .subscribe(res => this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present())
         
  }


}