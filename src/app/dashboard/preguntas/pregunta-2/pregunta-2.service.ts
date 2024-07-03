import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta2 } from './pregunta-2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Pregunta2Service {

  constructor(private httpClient: HttpClient) { }

  getAllLocations():Observable<Pregunta2>{
    return this.httpClient.get<Pregunta2>("https://rickandmortyapi.com/api/location");
  }

}
