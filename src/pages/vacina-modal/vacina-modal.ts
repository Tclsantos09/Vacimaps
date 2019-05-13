import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { VacinaService, Vacina } from './vacina.services';
import { profileService, User } from '../modal/profile.services';
import { Tab2Page } from '../tab2/tab2';

/**
 * Generated class for the VacinaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vacina-modal',
  templateUrl: 'vacina-modal.html',
  providers: [VacinaService]

})
export class VacinaModalPage {
  private API_URL = 'https://vacimaps-app.herokuapp.com'
  vacina: string;
  data: string;
  lote: string;
  id;
  datajson;

  private formulario: FormGroup;
  token;

  vacinas: any;
  nome_vac: any[];

  hiddenCidades: Boolean;

  constructor(public navCtrl: NavController,    
    public viewCtrl : ViewController,
    private toast: ToastController, 
    private http: HttpClient,
    public appCtrl: App, 
    private formBuilder: FormBuilder,
    private VacinaService: VacinaService,
    public navParams: NavParams) {
      this.formulario = this.formBuilder.group({
        validarVacina: ['', Validators.required],
        validarData: ['', Validators.required],
        vaidarLote: ['', Validators.required],
      });
      this.token = JSON.parse(localStorage.getItem('token'));

      if (this.navParams.data.nome_vacina  && 
        this.navParams.data.data_vacina && 
        this.navParams.data.ds_local_vacina  &&
        this.navParams.data.id_usuario_vacina
        ) {
        this.vacina = this.navParams.data.nome_vacina;
        this.data = this.navParams.data.data_vacina;
        this.lote = this.navParams.data.ds_local_vacina;
        this.id = this.navParams.data.id_usuario_vacina; 
        
      } else {
        
        this.VacinaService.getVacinas().subscribe((vacinas) => {
        this.vacinas = vacinas;
        this.nome_vac = this.vacinas;
      });
      }
      
    
     this.hiddenCidades = true;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VacinaModalPage');
  }

  
  public closeModal(){
    this.viewCtrl.dismiss();
  }  

  initializeItems() {
    this.vacinas = this.nome_vac;
}

  doPOST() {
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
          this.closeModal()
          this.navCtrl.setRoot(Tab2Page);


        }
      })         
  }
  getVacinas(ev: any) {
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
      this.vacinas = this.vacinas.filter((vacina) => {        
        return (
          vacina.nome_vacina.toLowerCase().indexOf(val.toLowerCase()) > -1 
      );
      })
    }
  }
}

export interface VacinaUSer{
  id_vacina?: string;
  nome_vacina?: string;
  data_vacina?: string;
  ds_local_vacina?: string;
}
  
