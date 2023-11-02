import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlquileresEntity } from '../models/AlquileresEntity';

@Injectable({
  providedIn: 'root'
})
export class AlquileresService {

  url = "http://localhost:8082/url/alquileres";

  constructor(private http:HttpClient) { }
  getAlquileres(){
    return this.http.get<AlquileresEntity[]>(`${this.url}/all`);
  }
  getAlquilerId(idAlquileres: number){
    return this.http.get<AlquileresEntity>(`${this.url}/BuscarID/${idAlquileres}`);
  }
  crearAlquiler(alquiler:AlquileresEntity){
    return this.http.post<AlquileresEntity>(`${this.url}/Crearalquiler`, alquiler, {
      observe:'response'
    });
  }
  updateAlquiler(alquiler:AlquileresEntity) {
    return this.http.put(`${this.url}/update/${alquiler.id}`, alquiler);
  }
  eliminarAlquiler(idAlquileres: number) {
    return this.http.delete(`${this.url}/delete/${idAlquileres}`);
  }
}
