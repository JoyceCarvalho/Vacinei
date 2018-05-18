import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EstadoTarefa } from "../../models/estado-tarefa";

/*
  Generated class for the LovProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LovProvider {

  getTarefaStates():Array<EstadoTarefa>{
    return [EstadoTarefa.NOVA,EstadoTarefa.EXECUTANDO,EstadoTarefa.FINALIZADA]
}

}
