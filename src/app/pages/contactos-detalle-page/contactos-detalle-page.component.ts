import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContanct } from 'src/app/models/contanct';
import { IRandomContact } from 'src/app/models/randomuser';

@Component({
  selector: 'app-contactos-detalle-page',
  templateUrl: './contactos-detalle-page.component.html',
  styleUrls: ['./contactos-detalle-page.component.scss']
})
export class ContactosDetallePageComponent implements OnInit {

id : any | undefined;

contacto : IRandomContact | undefined;
@Input() contacto2 : IRandomContact | undefined;

filtro_previo : string = 'todos';

  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {
    // Vamos a leer los paramatros
    this.route.params.subscribe((params : any) => {
      if (params.id) {
        this.id = params.id;
      }
    });

    // Vamos a leer tambien del state el contancto
  if(history.state.data){
    this.contacto = history.state.data;
  }

  if(history.state.filtro){
    this.filtro_previo  = history.state.data;
  }

}
}
