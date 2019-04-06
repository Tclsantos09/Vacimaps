import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { profileService, User } from './profile.services';
declare var google;
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
  map: any;
  token;
  usuario: User;
  nome: String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private profileService: profileService){
      this.profileService.getUser().subscribe((usuario: User) => {
        this.usuario = usuario;
        this.nome = usuario.nome;
        console.log(usuario)
        
      });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    const position = new google.maps.LatLng(-21.763409, -43.349034);
 
    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true
    }
 
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
 
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
 
      //Titulo
      title: 'Minha posição',
 
      //Animção
      animation: google.maps.Animation.DROP, // BOUNCE
 
      //Icone
      icon: 'assets/imgs/pessoa.png'
    });
  }

}

