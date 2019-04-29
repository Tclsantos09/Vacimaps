import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class Tab1Service{
    private API_URL = 'https://vacimaps-app.herokuapp.com'
    token;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient){
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    
      ionViewDidLoad() {
        console.log('ionViewDidLoad DashboardPage');
      }
    
      getCity(){
        return this.http.get(`${this.API_URL}/cidades`, {headers: new HttpHeaders({
            'token': this.token.token
        })});
    }
    
}

export interface City{
    id_cidade?: string;
    nome_cidade?: string;
    uf_cidade?: string;
}
