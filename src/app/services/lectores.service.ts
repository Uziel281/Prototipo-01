import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LectoresEntity } from '../models/LectoresEntity';

@Injectable({
  providedIn: 'root'
})
export class LectoresService {
  url = "http://localhost:8082/url/lectores";

  constructor(private http:HttpClient) { }
  getLectores(){
    return this.http.get<LectoresEntity[]>(`${this.url}/all`);
  }
  getLectorId(idLector: number){
    return this.http.get<LectoresEntity>(`${this.url}/BuscarID/${idLector}`);
  }
  crearLector(lector:LectoresEntity){
    return this.http.post<LectoresEntity>(`${this.url}/Crearlectores`, lector, {
      observe:'response'
    });
  }
  updateLector(lector:LectoresEntity) {
    return this.http.put(`${this.url}/update/${lector.id}`, lector);
  }
  eliminarLector(idLector: number) {
    return this.http.delete(`${this.url}/delete/${idLector}`);
  }
}
