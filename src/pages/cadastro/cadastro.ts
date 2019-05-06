import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  private API_URL = 'https://vacimaps-app.herokuapp.com'
  private formulario: FormGroup;

  nome: string;
  senha: string;
  email: string;
  datajson;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appCtrl: App, 
    private toast: ToastController, 
    private http: HttpClient,private formBuilder: FormBuilder) {
      this.formulario = this.formBuilder.group({
        validNome: ['', Validators.required],
        validEmail: ['', Validators.required],
        vaidSenha: ['', Validators.required],
      });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  Voltar(){
    this.navCtrl.push(HomePage)
  }
  
  doPOST() {
    console.log("POST");
    let url = `${this.API_URL}/usuario`;
    this.datajson ={ 
      nome: this.nome, 
      senha: this.senha, 
      email: this.email,
    }
    console.log(this.datajson);
    this.http
      .post(url, this.datajson)
      .subscribe(res => {
        if(res['Mensagem'] == 'O email informado já está cadastrado!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
       
        }else {
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
          this.appCtrl.getRootNav().setRoot(HomePage)
        }
      })         
  }

}
