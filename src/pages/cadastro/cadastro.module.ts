import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CadastroPage
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage),
    HttpClientModule
    
  ],
})
export class CadastroPageModule {}
