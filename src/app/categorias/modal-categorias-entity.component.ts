import { Component,OnInit } from '@angular/core';
import { CategoriasEntity } from '../models/CategoriasEntity';
import { CategoriasService } from '../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-categorias-entity',
  templateUrl: './modal-categorias-entity.component.html',
  styleUrls: ['./modal-categorias-entity.component.css']
})
export class ModalCategoriasEntityComponent implements OnInit{
  categorias:CategoriasEntity = new CategoriasEntity();
  registroExitoso = false;
  edicionExitosa = false;

  constructor(private categoriasService:CategoriasService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCategoria();
  }
  cargarCategoria():void  {
    this.activatedRoute.params.subscribe(
      a=>{
        let id = a['id'];
        if(id){
          this.categoriasService.getCategoriaId(id).subscribe(
            es=>this.categorias=es
          );
        }
      }
    )
  }
  createCategoria():void {
    console.log(this.categorias);
    this.categoriasService.crearCategoria(this.categorias).subscribe(() => {
      this.registroExitoso = true;
      setTimeout(() => {
        this.registroExitoso = false;
      }, 3000);
      });
  }
  updateCategoria():void {
    this.categoriasService.updateCategoria(this.categorias).subscribe(() => {
      this.edicionExitosa = true;
      setTimeout(() => {
        this.edicionExitosa = false;
      }, 3000);
      });
  }
}
