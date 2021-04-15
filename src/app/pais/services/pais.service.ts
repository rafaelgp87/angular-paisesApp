import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import { catchError } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set( 'fields', 'name;capital;alpha2Code;flag;population' );
  }

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]> {
    
    const url = `${ this._apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );
      /*.pipe(
        catchError( err => of([]) )
      );*/
  }

  buscarCapital( termino: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {

    const url = `${ this._apiUrl }/alpha/${ id }`;

    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this._apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
      .pipe(
        tap( console.log )
      )

  }

}
