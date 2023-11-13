import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LibrosEntity } from '../models/LibrosEntity';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url = "http://localhost:8082/url/libros";
  public  updateEffect:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http:HttpClient) { }
  getLibros(){
    return this.http.get(`${this.url}/all`);
  }
  getLibroId(idLibro: number){
    return this.http.get<LibrosEntity>(`${this.url}/BuscarID/${idLibro}`);
  }

  public emit(status:boolean){
    this.updateEffect.next(status);
  }

  crearLibro(libro:LibrosEntity){
    return this.http.post<LibrosEntity>(`${this.url}/Crearlibros`, libro, {
      observe:'response'
    });
  }
  updateLibro(libro:LibrosEntity,id:any) {
    return this.http.put(`${this.url}/update/${id}`, libro);
  }
  eliminarLibro(idLibro: number) {
    return this.http.delete(`${this.url}/delete/${idLibro}`);
  }
}
