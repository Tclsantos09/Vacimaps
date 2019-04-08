import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { RedefinirSenhaPageModule } from '../pages/redefinir-senha/redefinir-senha.module';
import { EsqSenhaPageModule } from '../pages/esqSenha/esqSenha.module';
import { VerifyCodePageModule } from '../pages/verify-code/verify-code.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,    
    IonicModule.forRoot(MyApp),
    CadastroPageModule,
    DashboardPageModule,
    RedefinirSenhaPageModule,
    EsqSenhaPageModule,
    VerifyCodePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
