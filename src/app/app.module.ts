import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

/*import { AngularFireModule } from 'angularfire2';*/
import firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { LoginProvider } from '../providers/login/login';
import { RegistrarPage } from "../pages/registrar/registrar";
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';
import { LovProvider } from '../providers/lov/lov';
import { TarefaProvider } from '../providers/tarefa/tarefa';

const firebaseConfig = {
    apiKey: "AIzaSyCrqQW9qV-yAJVctemDpkMm4UmWUX-qfeI",
    authDomain: "listadordetarefa.firebaseapp.com",
    databaseURL: "https://listadordetarefa.firebaseio.com",
    /*projectId: "listadordetarefa",*/
    storageBucket: "listadordetarefa.appspot.com",
    messagingSenderId: "1055309427002"
  };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    LovProvider,
    TarefaProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
