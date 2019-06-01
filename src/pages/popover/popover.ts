import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { ModalController, App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App, 
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
  localStorage.removeItem('token');
  this.appCtrl.getRootNav().setRoot(HomePage)
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

}
