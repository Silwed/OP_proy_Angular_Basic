import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';
import { IRandomContact, Result } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {


  @Input() contacts: IRandomContact | undefined;

  constructor(private randomUserService : RandomUserService, private http : HttpClient) { }

  ngOnInit(): void {
   this. obtenerNuevoContacto();
  }

  obtenerNuevoContacto(){



    //forma antigua de trabajar con observables
    /*
    this.randomUserService.obtenerRandomContact().subscribe((resp : Result) => {
      this.contacts = resp.results[0];
      console.table(this.contacts.name)
    }, (error) => {
      console.error(`${error}`);
    })
      */



    // forma nueva de trabajar con observables

    this.randomUserService.obtenerRandomContact().subscribe(
      {
        next : (resp : Result) => {
          this.contacts = resp.results[0];
          console.table(this.contacts.name)
        },
        error : (error) => {
          console.error(`${error}`);
        },
        complete : () => { console.info('completado') }
      }
    )
}

obtenerContactoRandom(n: number){
  this.randomUserService.obtenerRandomContacts(n).subscribe(
  {
    next : (resp : Result) => { console.log(resp) },
    error : (error) => {
      console.error(`${error}`);
    },
    complete : () => {console.info('completado')}
  }
    )
}
}
