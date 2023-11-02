import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutoresEntity } from '../models/AutoresEntity';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  url = "http://localhost:8082/url/autores";

  constructor(private http:HttpClient) { }
  getAutores(){
    return this.http.get<AutoresEntity[]>(`${this.url}/all`);
  }
  getAutorId(id: number){
    return this.http.get<AutoresEntity>(`${this.url}/BuscarID/${id}`);
  }
  crearAutor(autor:AutoresEntity){
    return this.http.post<AutoresEntity>(`${this.url}/Crearautor`, autor, {
      observe:'response'
    });
  }
  updateAutor(autor:AutoresEntity) {
    return this.http.put(`${this.url}/update/${autor.id}`, autor);
  }
  eliminarAutor(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
