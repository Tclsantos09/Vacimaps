import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { profileService, User } from './profile.services';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [profileService]

})
export class DashboardPage {
  token;
  usuario: User;
  nome: String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl : ModalController,
    private profileService: profileService){
      this.profileService.getUser().subscribe((usuario: User) => {
        this.usuario = usuario;
        this.nome = usuario.nome;
        console.log(usuario)
        
      });
}

public openModal () {
  var modalPage = this.modalCtrl.create ('ModalPage'); modalPage.present (); 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}

