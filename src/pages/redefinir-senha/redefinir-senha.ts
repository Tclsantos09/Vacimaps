import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, App, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
@IonicPage()
@Component({
  selector: 'page-redefinir-senha',
  templateUrl: 'redefinir-senha.html',
})
export class RedefinirSenhaPage {
  private API_URL = 'https://vacimaps-app.herokuapp.com'
  private formulario: FormGroup;

  senha: string;
  confSenha: string;
  id: string;

  constructor(public navCtrl: NavController, 
    private http: HttpClient,
    public navParams: NavParams, 
    public appCtrl: App, 
    private toast: ToastController,
    private formBuilder: FormBuilder) {
      this.formulario = this.formBuilder.group({
        validSenha: ['', Validators.required],
        validConfSenha: ['', Validators.required]
      });
      this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedefinirSenhaPage');
  }

  Voltar(){
    this.navCtrl.push(HomePage)
  }
  reset_password() {
    if(this.senha == this.confSenha){ 
      let url = `${this.API_URL}/reset_password`;
      this.http
        .put(url, { id: this.id , senha: this.senha })
        .subscribe(res => {
          if(res['Mensagem'] == 'Usuario não encontrado!'){          
            this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
        
          }else{
            this.toast.create({ message: "Senha alterada com sucesso!", duration: 3000, position: 'botton' }).present()    
            this.appCtrl.getRootNav().setRoot(HomePage)
          }
        })
    }else{
      this.toast.create({ message: "Senhas Diferentes!", duration: 3000, position: 'botton' }).present()
    }
        
      
      
}
}