import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tab1Service, City } from './tab1.services';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
  providers: [Tab1Service]
})
export class Tab1Page {

  cidades: City;
  city: any;
  selectOptions;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private Tab1Service: Tab1Service,
     public cityModal : ModalController) {      
      
      this.initializeItems();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
    this.selectOptions = {
      title: 'Cidade',
      subTitle: 'Selecione uma Cidade',
    };
  }

  initializeItems() {
    this.Tab1Service.getCity().subscribe((cidades: City) => {
      this.city = cidades;
    });
  }

  something(){
    var modalcidade = this.cityModal.create ('CidadeModalPage'); modalcidade.present();
  }
}
