import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { profileService, User, Vacina } from '../modal/profile.services';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ModalController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { VacinaService,  } from '../vacina-modal/vacina.services';
import { PopoverPage } from '../popover/popover';


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
  providers: [profileService, VacinaService],
})
export class Tab2Page {
  usuario: User;
  vacinas;
  token;
  hiddenVacinas: Boolean;
  hiddenCardVacinas: Boolean;
  hiddenFormVacinas: Boolean;
  user_vacinas;
  private formulario: FormGroup;
  datajson;

  vacina: string;
  vacinaSelect: any;
  data: string;
  lote: string;
  id_usuario_vacina: string;

  nome_vac: any[];
  nome: string;

  private API_URL = 'https://vacimaps-app.herokuapp.com'


  constructor(public navCtrl: NavController,
    public vacinaModal : ModalController,
    private toast: ToastController, 
    private profileService: profileService,
    private http: HttpClient,
    public appCtrl: App, 
    public popoverCtrl: PopoverController,
    private VacinaService: VacinaService,
    private formBuilder: FormBuilder,
    public navParams: NavParams) {
      this.formulario = this.formBuilder.group({
        validarVacina: ['', Validators.required],
        validarData: ['', Validators.required],
        vaidarLote: ['', Validators.required],
      });

      this.profileService.getUser().subscribe((usuario: User) => {
        this.nome = usuario.nome;
      });
    
     this.getVacinas();
    
     this.VacinaService.getVacinas().subscribe((vacinas) => {
      this.vacinaSelect = vacinas;
      this.nome_vac = this.vacinaSelect;
    });

     this.token = JSON.parse(localStorage.getItem('token'));

     this.hiddenVacinas = true;
     this.hiddenFormVacinas = true;
     this.hiddenCardVacinas = false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  getVacinas(){
    this.profileService.getUser().subscribe((usuario: User) => {
      this.usuario = usuario;
      this.vacinas = usuario.vacinas;
      this.user_vacinas = this.vacinas;

     });
  }
  
  initializeItems() {
    this.vacinas = this.user_vacinas;
}

presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  ModalVacina(){
    /*var modalvacina = this.vacinaModal.create ('VacinaModalPage');
    modalvacina.onDidDismiss(() => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
     modalvacina.present();*/
     this.hiddenFormVacinas = false;

  }

  editContact(vacina) {
    console.log(vacina)
    this.nome_vac = vacina.nome_vacina;
    this.data = new Date(vacina.data_vacina).toISOString();
    this.lote = vacina.local;    
    this.id_usuario_vacina = vacina.id; 
    this.vacina = vacina.id_vacina;
    this.hiddenFormVacinas = false;
    this.hiddenCardVacinas = true;

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

  getVacina(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    let val

    try{
      val = ev.target.value;
               
      if(val.length > 2){
        this.hiddenVacinas = false;
      }else{
        this.hiddenVacinas = true;
      }
    }catch{
      val = "a";
      this.hiddenVacinas = true;
    }
     
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.vacinas = this.vacinas.filter((vacina) => {        
        return (
          vacina.vacina.toLowerCase().indexOf(val.toLowerCase()) > -1 
      );
      })
    }
  }

  public closeModal(){
    this.nome_vac = [];
    this.data = "";
    this.lote = '';    
    this.id_usuario_vacina = ''; 
    this.vacina = '';
    this.hiddenFormVacinas = true;
    this.hiddenCardVacinas = false;

  } 

  doPOST() {
    if(this.id_usuario_vacina){
      console.log("PUT");
      this.datajson ={ 
        id_vacina: this.vacina, 
        data_vacina: this.data, 
        ds_local_vacina: this.lote,
      }
      console.log(this.datajson);
      let url = `${this.API_URL}/usuario/vacina/${this.id_usuario_vacina}`;
      this.http
      .put(url, this.datajson, {headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => {
        if(res['Mensagem'] == 'Vacina alterada com sucesso!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }else {
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()     
          


        }
      })  
        
    }else{
    console.log("POST");
    let url = `${this.API_URL}/usuario/vacina`;
    this.datajson ={ 
      id_vacina: this.vacina, 
      data_vacina: this.data, 
      lote: this.lote,
    }
    console.log(this.datajson);
    this.http
      .post(url, this.datajson, {headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => {
        if(res['Mensagem'] == 'Erro ao cadastrar vacina!'){          
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
       
        }else {
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()     
          this.navCtrl.setRoot(this.navCtrl.getActive().component);


        }
      })   
    }    
  }
}
