import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class profileService{
    private API_URL = 'https://vacimaps-app.herokuapp.com'
    token;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient){
        this.token = JSON.parse(localStorage.getItem('token'));
    }
    
      ionViewDidLoad() {
        console.log('ionViewDidLoad DashboardPage');
      }
    
      getUser(){
        return this.http.get(`${this.API_URL}/usuario`, {headers: new HttpHeaders({
            'token': this.token.token
        })});
    }
    
}

export interface User{
    user_id?: string;
    nome?: string;
    email?: string;
}