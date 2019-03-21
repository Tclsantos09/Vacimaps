import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { RedefinirSenhaPage } from '../redefinir-senha/redefinir-senha'
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { DashboardPage } from '../dashboard/dashboard';
import { App } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private API_URL = 'https://vacimaps-app.herokuapp.com'

  senha: string;
  email: string;
  datajson;

  constructor(public navCtrl: NavController, 
    private http: HttpClient,public appCtrl: App) {

  }

  cadastrar(){
    this.navCtrl.push(CadastroPage)
  }

  redefinir(){
    this.navCtrl.push(RedefinirSenhaPage)
  }

  login() {
    console.log("POST");
    let url = `${this.API_URL}/login`;
    this.http
      .post(url, { email: this.email, password: this.senha })
      .pipe(map(response => { localStorage.setItem('token', JSON.stringify(response)) }))
      .subscribe(res => console.log("Bem Vindo!"))
      this.appCtrl.getRootNav().setRoot(DashboardPage)
      
}

}
