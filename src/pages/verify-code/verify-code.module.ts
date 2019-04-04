import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifyCodePage } from './verify-code';

@NgModule({
  declarations: [
    VerifyCodePage,
  ],
  imports: [
    IonicPageModule.forChild(VerifyCodePage),
  ],
})
export class VerifyCodePageModule {}
