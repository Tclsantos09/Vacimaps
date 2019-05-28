import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { profileService, User } from '../modal/profile.services';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
  providers: [profileService]
})
export class ConfiguracoesPage {
  email;
  novasenha: String;
  senhaAtual: String;
  confsenha: String;
  private formulario: FormGroup;
  private API_URL = 'https://vacimaps-app.herokuapp.com'
  datajson;
  token;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private profileService: profileService, 
    private toast: ToastController,   
    private http: HttpClient,
    public viewCtrl : ViewController) {
      this.profileService.getUser().subscribe((usuario: User) => {
        this.email = usuario.email;
  
       });

       this.formulario = this.formBuilder.group({
        validarSenha: ['', Validators.required],
        validarNovaSenha: ['', Validators.required],
        validarConfSenha: ['', Validators.required],
      });

      this.token = JSON.parse(localStorage.getItem('token'));


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  doPut() {
    console.log("POST");
    let url = `${this.API_URL}/change_password`;
    this.datajson ={ 
      senha_atual: this.senhaAtual, 
      nova_senha: this.novasenha,
    }
    console.log(this.datajson);
    if(this.novasenha == this.confsenha){
      this.http
      .put(url, this.datajson, {headers: new HttpHeaders({'token': this.token.token})})
      .subscribe(res => {
        if(res['Mensagem'] == 'Senha alterada com sucesso!'){
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
          this.closeModal()

        }else {
          this.toast.create({ message: res["Mensagem"], duration: 3000, position: 'botton' }).present()    
        }
      })
    }else{
      this.toast.create({ message: "Senhas Diferentes!", duration: 3000, position: 'botton' }).present()    

    }
             
  }

}
