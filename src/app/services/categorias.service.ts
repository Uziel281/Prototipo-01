import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriasEntity } from '../models/CategoriasEntity';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = "http://localhost:8082/url/categorias";

  constructor(private http:HttpClient) { }
  getCategorias(){
    return this.http.get<CategoriasEntity[]>(`${this.url}/all`);
  }
  getCategoriaId(id: number){
    return this.http.get<CategoriasEntity>(`${this.url}/BuscarID/${id}`);
  }
  crearCategoria(categoria:CategoriasEntity){
    return this.http.post<CategoriasEntity>(`${this.url}/Crearcategorias`, categoria, {
      observe:'response'
    });
  }
  updateCategoria(categoria:CategoriasEntity) {
    return this.http.put(`${this.url}/update/${categoria.id}`, categoria);
  }
  eliminarCategoria(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
