import { Component, OnInit } from '@angular/core';
import { AutoresEntity } from '../models/AutoresEntity';
import { AutoresService } from '../services/autores.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit{

  autores:AutoresEntity[]=[];
  autorAEliminar: AutoresEntity | null = null;

  constructor(private autoresService:AutoresService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.getAutores();
  }
  getAutores(){
    this.autoresService.getAutores().subscribe(
      a => this.autores=a
    );
  }
  // eliminarAutor(item:AutoresEntity):void {
  //   console.log("Raspa y elimina");
  //   if (item && item.id) {
  //   this.autoresService.eliminarAutor(item.id).subscribe(
  //     res=>this.autoresService.getAutores().subscribe(
  //       response=>this.autores=response
  //     )
  //   );
  //   }
  // }
  eliminarAutor(autor:AutoresEntity):void {
    if (autor && autor.id) {
      this.setUrlInBrowser(`/url/autores/delete/${autor.id}`);
      this.autorAEliminar = autor;
    }
  }
  setUrlInBrowser(url: string):void {
    this.location.go(url);
  }
  confirmarEliminacion(): void {
    if (this.autorAEliminar && this.autorAEliminar.id) {
      this.autoresService.eliminarAutor(this.autorAEliminar.id).subscribe(
        (res) => {
          this.autoresService.getAutores().subscribe((response) => {
          this.autores = response;
          this.router.navigate(['/url/autores/all']);
          });
          this.autorAEliminar = null;
        }
      );
    }
  }

  cancelarEliminacion(): void {
    this.autorAEliminar = null;
  }
}
