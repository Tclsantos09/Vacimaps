import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class VacinaService{
    private API_URL = 'https://vacimaps-app.herokuapp.com'
    token;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient){
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    
      ionViewDidLoad() {
        console.log('ionViewDidLoad VacinaService');
      }
    
      getVacinas(){
        return this.http.get(`${this.API_URL}/vacinas`, {headers: new HttpHeaders({
            'token': this.token.token
        })});
    }
    getVacinasUSer(){
        return this.http.get(`${this.API_URL}/usuario/vacinas`, {headers: new HttpHeaders({
            'token': this.token.token
        })});
    }
    
}

export interface Vacina{
    id_vacina?: string;
    nome_vacina?: string;
}
