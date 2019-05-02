import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the CidadeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cidade-modal',
  templateUrl: 'cidade-modal.html',
})
export class CidadeModalPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CidadeModalPage');
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

}
