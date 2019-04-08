import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { RedefinirSenhaPage } from '../redefinir-senha/redefinir-senha'
import { EsqSenhaPage } from '../esqSenha/esqSenha'
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { DashboardPage } from '../dashboard/dashboard';
import { App } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private API_URL = 'https://vacimaps-app.herokuapp.com'
  private formulario: FormGroup;

  senha: string;
  email: string;
  datajson;
  retorno;

  constructor(public navCtrl: NavController, 
    private http: HttpClient, 
    public appCtrl: App, 
    private toast: ToastController,
    private formBuilder: FormBuilder) {
      this.formulario = this.formBuilder.group({
        validEmail: ['', Validators.required],
        vaidSenha: ['', Validators.required],
      });

  }

  cadastrar(){
    this.navCtrl.push(CadastroPage)
  }

  redefinir(){
    this.navCtrl.push(RedefinirSenhaPage)
  }

  esqSenha(){
    this.navCtrl.push(EsqSenhaPage)
  }

  login() {
    console.log("POST");
    let url = `${this.API_URL}/login`;
    this.http
      .post(url, { email: this.email, password: this.senha })
      .subscribe(res => {
        if(res['Mensagem'] == 'Usuario não encontrado'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
       
        }else if(res['Mensagem'] == 'Senha Incorreta!'){
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    

        }else{
          localStorage.setItem('token', JSON.stringify(res))
          this.toast.create({ message: "Bem Vindo!", duration: 3000, position: 'botton' }).present()    
          this.appCtrl.getRootNav().setRoot(DashboardPage)
        }
      })

        
      
      
}

}

//.pipe(map(response => { localStorage.setItem('token', JSON.stringify(response)) }))
