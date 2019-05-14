import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { profileService, User, Vacina } from '../modal/profile.services';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
  token;

  private API_URL = 'https://vacimaps-app.herokuapp.com'


  constructor(public navCtrl: NavController,
    public vacinaModal : ModalController,
    private toast: ToastController, 
    private profileService: profileService,
    private http: HttpClient,
     public navParams: NavParams) {
       
    
     this.getVacinas();

     this.token = JSON.parse(localStorage.getItem('token'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  getVacinas(){
    this.profileService.getUser().subscribe((usuario: User) => {
      this.usuario = usuario;
      this.vacinas = usuario.vacinas;

     });
  }

  ModalVacina(){
    var modalvacina = this.vacinaModal.create ('VacinaModalPage');
    modalvacina.onDidDismiss(() => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
     modalvacina.present();
  }

  editContact(vacina) {
    console.log(vacina)
    var modalvacina = this.vacinaModal.create ('VacinaModalPage', { 
      nome_vacina: vacina.vacina,
      data_vacina: vacina.data_vacina,
      ds_local_vacina: vacina.local,
      id_usuario_vacina: vacina.id,
      id_vacina: vacina.id_vacina
    }); modalvacina.onDidDismiss(() => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
    modalvacina.present();
  }

  doDELETE(vacina) {
    console.log("DELETE");
    let url = `${this.API_URL}/usuario/vacina/${vacina.id}`;
    console.log(url)
    this.http
      .delete(url, {headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => {
        if(res['Mensagem'] == 'Vacina deletada com sucesso!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }else {
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()
          
        }
      })          
  }

}
