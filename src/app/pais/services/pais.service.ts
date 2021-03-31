import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import { catchError } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]> {
    
    const url = `${ this._apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url );
      /*.pipe(
        catchError( err => of([]) )
      );*/
  }

  buscarCapital( termino: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {

    const url = `${ this._apiUrl }/alpha/${ id }`;

    return this.http.get<Country>( url );
  }

}
