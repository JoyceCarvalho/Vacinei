import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TarefaProvider } from "../../providers/tarefa/tarefa";
import { Tarefa } from "../../models/tarefa";
import { TarefasAddPage } from "../tarefas-add/tarefas-add";

/**
 * Generated class for the TarefasListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasListPage {

  tarefas:Array<Tarefa>;

  constructor(public navCtrl: NavController,
              public tarefaProvider: TarefaProvider,
              public toastCtrl: ToastController,
              public ngZone: NgZone) {}

  ionViewDidLoad() {
    /*
     * value - Escuta todas as alterações da referencia
     * child_added - Ouvinte para quando um filtlo for adicionado
     * child_changed - Ouvinte para quando algum filtlo for alterado
     * child_removed - Ouvinte para quando algum filho for deletado
     * child_moved - Ouvinte para ouvir as mudanças na prioridade de um filho
     */
    this.tarefaProvider.reference.on('child_removed', (snapshot) => {
      let tarefaRemovida = snapshot.val();
      this.toastCtrl.create({
        message: 'Tarefa '+tarefaRemovida.titulo+' removida!',
        duration: 3000
      }).present();
    })

    this.tarefaProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.tarefas = innerArray;
      })
    })
  }

  atualizarTarefa(tarefa:Tarefa){
    this.navCtrl.push(TarefasAddPage,{'tarefa' : tarefa});
  }

  adicionarTarefa(){
    this.navCtrl.push(TarefasAddPage,{'tarefa' : new Tarefa()});
  }

deletarTarefa(tarefa:Tarefa){
    this.tarefaProvider.deletar(tarefa).then(
      sucesso => console.log('tarefa deletada')
    )
    .catch(error => console.log('nao foi possivel deletar a tarefa'));
}

}
