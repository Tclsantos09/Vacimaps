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

  cidades: any;
  cidade: any[];
  hiddenCidades: Boolean;
  selectOptions;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private Tab1Service: Tab1Service,
     public cityModal : ModalController) {      
      
      this.Tab1Service.getCity().subscribe((cidades) => {
        this.cidades = cidades;
        this.cidade = this.cidades;
      });
    
     this.hiddenCidades = true;
      
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  initializeItems() {
      this.cidades = this.cidade;
  }

  something(cidade){
    var modalcidade = this.cityModal.create ('CidadeModalPage',{ 
      nome_cidade: cidade.nome_cidade,
      uf_cidade: cidade.uf_cidade,
      
    }); modalcidade.present();
  }

  getCity(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    let val
    // set val to the value of the searchbar
    try{
      val = ev.target.value;
               
      if(val.length > 2){
        this.hiddenCidades = false;
      }else{
        this.hiddenCidades = true;
      }
    }catch{
      val = "a";
      this.hiddenCidades = true;
    }
     
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.cidades = this.cidades.filter((cidade) => {        
        return (
          cidade.nome_cidade.toLowerCase().indexOf(val.toLowerCase()) > -1 
      );
      })
    }
  }

}
