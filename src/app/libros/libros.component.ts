import { Component, OnInit } from '@angular/core';
import { LibrosEntity } from '../models/LibrosEntity';
import { LibrosService } from '../services/libros.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit{
  libros: LibrosEntity[] = [];
  libroAEliminar: LibrosEntity | null = null;

  constructor(private librosService:LibrosService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.getLibros();
  }
  getLibros(){
    this.librosService.getLibros().subscribe(
      e => this.libros = e
    );
  }
  eliminarLibro(libro:LibrosEntity): void{
    if (libro && libro.id) {
      this.setUrlInBrowser(`/url/libros/delete/${libro.id}`);
      this.libroAEliminar = libro;
    }
  }
  setUrlInBrowser(url: string):void {
    this.location.go(url);
  }
  confirmarEliminacion(): void {
    if (this.libroAEliminar && this.libroAEliminar.id) {
      this.librosService.eliminarLibro(this.libroAEliminar.id).subscribe(
        (res) => {
          this.librosService.getLibros().subscribe((response) => {
          this.libros = response;
          this.router.navigate(['/url/editoriales/all']);
          });
          this.libroAEliminar = null;
        }
      );
    }
  }

  cancelarEliminacion(): void {
    this.libroAEliminar = null;
  }
}
