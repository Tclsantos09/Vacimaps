import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CidadeModalPage } from './cidade-modal';

@NgModule({
  declarations: [
    CidadeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CidadeModalPage),
  ],
})
export class CidadeModalPageModule {}
