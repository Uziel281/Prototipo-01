import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditorialesEntity } from '../models/EditorialesEntity';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {

  url = "http://localhost:8082/url/editoriales";

  constructor(private http:HttpClient) { }
  getEditoriales(){
    return this.http.get<EditorialesEntity[]>(`${this.url}/all`);
  }
  getEditorialId(id: number){
    return this.http.get<EditorialesEntity>(`${this.url}/BuscarID/${id}`);
  }
  crearEditorial(editorial:EditorialesEntity){
    return this.http.post<EditorialesEntity>(`${this.url}/Creareditoriales`, editorial, {
      observe:'response'
    });
  }
  updateEditorial(editorial:EditorialesEntity) {
    return this.http.put(`${this.url}/update/${editorial.id}`, editorial);
  }
  eliminarEditorial(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
