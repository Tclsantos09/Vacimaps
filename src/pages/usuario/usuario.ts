import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Usuarios {
  private API_URL = 'https://vacimaps-app.herokuapp.com/'

  constructor(public http: Http) { }

  PostUsuario(nome: string, email: string, senha: string) {
    return new Promise((resolve, reject) => {
      var datajson = {
        nome: nome,
        email: email,
        senha: senha
      };
 
      this.http.post(this.API_URL + 'usuario', datajson)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}