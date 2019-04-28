import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { TabsPage } from './../tabs/tabs';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  
})
export class DashboardPage {
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    public confCtrl : ModalController){
}

public openModal () {
  var modalPage = this.modalCtrl.create ('ModalPage'); modalPage.present (); 
}

public modalOpen () {
  var confPage = this.confCtrl.create ('ConfiguracoesPage'); confPage.present (); 
}

public Sair () {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  

}

