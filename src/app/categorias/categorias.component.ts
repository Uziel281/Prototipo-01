import { Component, OnInit } from '@angular/core';
import { CategoriasEntity } from '../models/CategoriasEntity';
import { CategoriasService } from '../services/categorias.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{

  categorias:CategoriasEntity[]=[];
  categoriaAEliminar: CategoriasEntity | null = null;

  constructor(private categoriasService:CategoriasService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.getCategorias();
  }
  getCategorias(){
    this.categoriasService.getCategorias().subscribe(
      c => this.categorias=c
    );
  }
  eliminarCategoria(categoria:CategoriasEntity): void {
    if (categoria && categoria.id){
      this.setUrlInBrowser(`/url/categorias/delete/${categoria.id}`);
      this.categoriaAEliminar = categoria;
    }
  }
  setUrlInBrowser(url: string):void {
    this.location.go(url);
  }
  confirmarEliminacion(): void {
    if (this.categoriaAEliminar && this.categoriaAEliminar.id) {
      this.categoriasService.eliminarCategoria(this.categoriaAEliminar.id).subscribe(
        (res) => {
          this.categoriasService.getCategorias().subscribe((response) => {
          this.categorias = response;
          this.router.navigate(['/url/categorias/all']);
          });
          this.categoriaAEliminar = null;
        }
      );
    }
  }

  cancelarEliminacion(): void {
    this.categoriaAEliminar = null;
  }
}
