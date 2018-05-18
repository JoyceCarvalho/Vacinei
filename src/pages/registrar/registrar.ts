import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from "../../providers/login/login";
import { Credencial } from "../../models/credencial";


@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  credencial: Credencial;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginProvider: LoginProvider) {

    this.credencial = new Credencial();
  }

  

  doRegister(){
    this.loginProvider.registrarUsuario(this.credencial);
  }

}
