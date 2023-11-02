import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibrosEntity } from '../models/LibrosEntity';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url = "http://localhost:8082/url/libros";

  constructor(private http:HttpClient) { }
  getLibros(){
    return this.http.get<LibrosEntity[]>(`${this.url}/all`);
  }
  getLibroId(idLibro: number){
    return this.http.get<LibrosEntity>(`${this.url}/BuscarID/${idLibro}`);
  }
  crearLibro(libro:LibrosEntity){
    return this.http.post<LibrosEntity>(`${this.url}/Crearlibros`, libro, {
      observe:'response'
    });
  }
  updateLibro(libro:LibrosEntity) {
    return this.http.put(`${this.url}/update/${libro.id}`, libro);
  }
  eliminarLibro(idLibro: number) {
    return this.http.delete(`${this.url}/delete/${idLibro}`);
  }
}
