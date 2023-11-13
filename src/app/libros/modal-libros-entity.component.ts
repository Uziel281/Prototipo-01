import { Component, Inject, OnInit } from '@angular/core';
import { LibrosEntity } from '../models/LibrosEntity';
import { LibrosService } from '../services/libros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoresEntity } from '../models/AutoresEntity';
import { AutoresService } from '../services/autores.service';
import { CategoriasService } from '../services/categorias.service';
import { CategoriasEntity } from '../models/CategoriasEntity';
import { EditorialesEntity } from '../models/EditorialesEntity';
import { EditorialesService } from '../services/editoriales.service';

@Component({
  selector: 'app-modal-libros-entity',
  templateUrl: './modal-libros-entity.component.html',
  styleUrls: ['./modal-libros-entity.component.css']
})
export class ModalLibrosEntityComponent implements OnInit{
  libros:LibrosEntity = new LibrosEntity();
  listAutor: AutoresEntity[] = [];
  listCategoria: CategoriasEntity[] = [];
  listEditorial: EditorialesEntity[] = [];
  registroExitoso = false;
  edicionExitosa = false;
  statusUpdate:boolean = false;


  constructor(private service:AutoresService,private librosService:LibrosService,
    private router:Router, private activatedRoute:ActivatedRoute,
     private categoriasService:CategoriasService, private editorialesService:EditorialesService) { }

  ngOnInit(): void {
    this.librosService.updateEffect.subscribe(data =>  this.statusUpdate = data);
    this.cargarLibro();
    this.getAutores();
    this.getCategorias();
    this.getEditoriales();
    console.log(this.listAutor)
    console.log(this.libros)
  }

  getAutores(){
    this.service.getAutores().subscribe(
      a => {
        console.log(a)
        this.listAutor=a
  });
  }
  getCategorias(){
    this.categoriasService.getCategorias().subscribe(
      c => {
        console.log(c)
        this.listCategoria = c
      });
  }
  getEditoriales(){
    this.editorialesService.getEditoriales().subscribe(
      e => {
        console.log(e)
        this.listEditorial = e
      }
    )
  }

  cargarLibro():void {
    this.activatedRoute.params.subscribe(
      a=>{
        let id = a['id'];
        if(id){
          this.librosService.getLibroId(id).subscribe(
            es=>{
              this.libros=es
            console.log(this.libros.autores.id)
            console.log(this.statusUpdate)
          }
          );
        }
      }
    )
  }
  createLibro():void {
    // Verifica que se hayan seleccionado autor, categoría y editorial
  if (!this.libros.titulo || !this.libros.autores || !this.libros.categorias || !this.libros.editoriales) {
    // Muestra un mensaje de error o manejo de error adecuado
    console.error("Por favor, complete todos los campos necesarios para crear el libro.");
    return;
  }



    console.log(this.libros)
    this.librosService.crearLibro(this.libros).subscribe(() => {
      this.registroExitoso = true;
      setTimeout(() => {
        this.registroExitoso = false;
      }, 1000);
      });
  }
  updateLibro():void {
    const id = this.libros.id;
    console.log(id)
    delete this.libros.id;
    console.log(this.libros)
    this.librosService.updateLibro(this.libros , id).subscribe(() => {
      this.edicionExitosa = true;
      setTimeout(() => {
        this.edicionExitosa = false;
      }, 1000);
      });
  }

}
