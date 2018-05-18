import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { EstadoTarefa } from "../../models/estado-tarefa";
import { Tarefa } from "../../models/tarefa";
import { FormGroup, FormBuilder, Validators } from "@angular/forms/forms";
import { TarefaProvider } from "../../providers/tarefa/tarefa";
import { LovProvider } from "../../providers/lov/lov";

/**
 * Generated class for the TarefasAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html',
})
export class TarefasAddPage {

  tarefa:Tarefa;
  tarefaForm:FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tarefasProvider: TarefaProvider,
              public viewCtrl: ViewController,
              public fb: FormBuilder,
              public lovProvider: LovProvider) {
    this.initialize();
  }

  private initialize(){
    this.tarefa = this.navParams.get('tarefa');
    if(!this.tarefa){
      this.tarefa = new Tarefa();
    }
    this.tarefaForm = this.fb.group({
      'titulo' : ['',Validators.compose([Validators.required, Validators.minLength(5)])],
      'descricao' : [''],
      'estadoTarefa' : ['',Validators.required]
    });
  }

  getEstadoValue(estadoTarefa: EstadoTarefa):string{
    return EstadoTarefa[estadoTarefa];
  }

  salvarTarefa(){
    this.tarefasProvider.save(this.tarefa);
    this.viewCtrl.dismiss();
  }

}
