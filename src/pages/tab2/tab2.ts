import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { profileService, User } from '../modal/profile.services';
import { ModalController } from 'ionic-angular';


/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
  providers: [profileService],
})
export class Tab2Page {
  usuario: User;
  vacinas;

  constructor(public navCtrl: NavController,
    public vacinaModal : ModalController,
    private profileService: profileService,
     public navParams: NavParams) {
       
     this.profileService.getUser().subscribe((usuario: User) => {
      this.usuario = usuario;
      this.vacinas = usuario.vacinas;

     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  ModalVacina(){
    var modalvacina = this.vacinaModal.create ('VacinaModalPage'); modalvacina.present();
  }

  

}
