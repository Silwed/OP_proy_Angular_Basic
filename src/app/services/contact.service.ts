import { Injectable } from '@angular/core';
import { LISTA_CONTACTOS } from '../mock/contacts.mock';
import { IContanct } from '../models/contanct';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 listaContactos : IContanct[] = LISTA_CONTACTOS;

    constructor() { }


    obtenerContactos(sexo? : string) : Promise<IContanct[]>  {

      if(sexo == 'Hombre' || sexo == 'Mujer'){
        let listaFiltrada : IContanct[] = this.listaContactos.filter((contacto) => contacto.sexo == sexo);
        return Promise.resolve(listaFiltrada);
      } else if(sexo == 'todos'){
        return Promise.resolve(this.listaContactos);
      }

      else{
        return Promise.reject('No se ha encontrado el sexo');
      }

    }
}
