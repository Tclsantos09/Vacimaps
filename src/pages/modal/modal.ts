import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { profileService, User } from './profile.services';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  providers: [profileService]

})
export class ModalPage {
  token;
  usuario: User;
  nome: String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl : ViewController,
    private profileService: profileService) {
      this.profileService.getUser().subscribe((usuario: User) => {
        this.usuario = usuario;
        this.nome = usuario.nome;
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

}
