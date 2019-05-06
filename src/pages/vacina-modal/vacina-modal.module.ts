import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VacinaModalPage } from './vacina-modal';

@NgModule({
  declarations: [
    VacinaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(VacinaModalPage),
  ],
})
export class VacinaModalPageModule {}
