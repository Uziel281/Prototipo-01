import { Component, OnInit } from '@angular/core';
import { LibrosEntity } from '../models/LibrosEntity';
import { LibrosService } from '../services/libros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-libros-entity',
  templateUrl: './modal-libros-entity.component.html',
  styleUrls: ['./modal-libros-entity.component.css']
})
export class ModalLibrosEntityComponent implements OnInit{
  libros:LibrosEntity = new LibrosEntity();
  registroExitoso = false;
  edicionExitosa = false;

  constructor(private librosService:LibrosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarLibro();
  }
  cargarLibro():void {
    this.activatedRoute.params.subscribe(
      a=>{
        let id = a['id'];
        if(id){
          this.librosService.getLibroId(id).subscribe(
            es=>this.libros=es
          );
        }
      }
    )
  }
  createLibro():void {
    console.log(this.libros);
    this.librosService.crearLibro(this.libros).subscribe(() => {
      this.registroExitoso = true;
      setTimeout(() => {
        this.registroExitoso = false;
      }, 1000);
      });
  }
  updateLibro():void {
    this.librosService.updateLibro(this.libros).subscribe(() => {
      this.edicionExitosa = true;
      setTimeout(() => {
        this.edicionExitosa = false;
      }, 1000);
      });
  }

}
