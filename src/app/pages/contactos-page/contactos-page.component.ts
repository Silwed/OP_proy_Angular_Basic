import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContanct } from 'src/app/models/contanct';
import { IRandomContact, Result } from 'src/app/models/randomuser';
import { ContactService } from 'src/app/services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contactos-page',
  templateUrl: './contactos-page.component.html',
  styleUrls: ['./contactos-page.component.scss']
})
export class ContactosPageComponent implements OnInit {

  filtroSexo : string = 'todos';
  listaContactos : IContanct[] = [];
  listarandomContacts : IRandomContact[] = [];
  cargando : boolean = true;


  constructor(private router : Router, private route : ActivatedRoute,
     private contactService : ContactService, private randomContactService : RandomUserService ){

  }

  ngOnInit(): void {

    // Obtener la lista de contactos
    //this.route.queryParams.subscribe((params : any) => {

    //})


    //se obtiene los query paramas

    this.route.queryParams.subscribe((params : any) => {
      console.log('QueryParams: '+ params.sexo);


      if(params.sexo){
        this.filtroSexo = params.sexo;

        if (params.sexo === 'female' || params.sexo === 'male' ) {

          this.randomContactService.obtenerRandomContacts(10,params.sexo).subscribe(
            {
              next : (resp : Result) => {

               resp.results.forEach((randomContact : IRandomContact  ) => {
                  this.listarandomContacts.push(randomContact);
               });
               console.log(this.listarandomContacts)

              },
              error : (error) => {
                console.error(`${error}`);
              },
              complete : () => {console.info('completado');
              this.cargando = false;}
            }

              );

        } else {
            console.log("entra en el else de todos")
          this.randomContactService.obtenerRandomContacts(10).subscribe(
            {
              next : (resp : Result) => {

               resp.results.forEach((randomContact : IRandomContact  ) => {
                  this.listarandomContacts.push(randomContact);
               });
               console.log(this.listarandomContacts)
              },
              error : (error) => {
                console.error(`${error}`);
              },
              complete : () => {console.info('completado');
              this.cargando = false;}
            }

              );

        }


      }

      /*
      this.contactService.obtenerContactos(this.filtroSexo)
      .then((lista) => this.listaContactos = lista)
      .catch((error) => console.log(error));
      */
      //implementacio para obtener la lista de contactos


    });





  }


  pasarContacto(contacto : IRandomContact){
    let navigationExtras: NavigationExtras= {
      state:{
        data : contacto
      }
    }
    this.router.navigate(['/dashboard'],navigationExtras);
  }



}
