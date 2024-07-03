import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta3 } from './pregunta-3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pregunta3Service {

  constructor(private httpClient: HttpClient) { }

  getAllTodos():Observable<Pregunta3[]>{
    return this.httpClient.get<Pregunta3[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
