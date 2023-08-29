import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRandomContact, Result } from '../models/randomuser';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http : HttpClient) { }

  handleError(error: HttpErrorResponse){
    if (error.status === 0) {
        console.log(`Ha ocurrido un eroor: ${error.error}`)
    } else {
      console.log(`Ha ocurrido un error en el backend: ${error.status}. el error es: ${error.error}`)
    }
    return throwError( () => new Error ('Algo malo ha pasado, por favor intente mas tarde'));
  }

  obtenerRandomContact(): Observable<Result>{
    let opciones : HttpParams = new HttpParams().set('results', 10);



    return this.http.get<Result>('https://randomuser.me/api', {params : opciones}).pipe(
      retry(2), // reintentar la peticion 2 veces o numero de reintentos para la peticion
      catchError(this.handleError)// se saca error si algo falla
    );

  }

  obtenerRandomContacts(n: number, sexo?: string): Observable<Result>{

    let opciones : HttpParams = new HttpParams().set('results', n);

    if(sexo){
     opciones = opciones.append("gender", sexo);
    }

    return this.http.get<Result>('https://randomuser.me/api', {params : opciones}).pipe(
      retry(2), // reintentar la peticion 2 veces o numero de reintentos para la peticion
      catchError(this.handleError)// se saca error si algo falla
    );
  }

  obtenerContactoporGenero(num : number, sexo: string): Observable<Result>{

    const opciones : HttpParams = new HttpParams().set('gender', sexo);

    return this.http.get<Result>('https://randomuser.me/api', {params : opciones}).pipe(
      retry(2), // reintentar la peticion 2 veces o numero de reintentos para la peticion
      catchError(this.handleError)// se saca error si algo falla
    );
  }

}
