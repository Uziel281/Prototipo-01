import { Component, OnInit } from '@angular/core';
import { AutoresEntity } from '../models/AutoresEntity';
import { AutoresService } from '../services/autores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-autores-entity',
  templateUrl: './modal-autores-entity.component.html',
  styleUrls: ['./modal-autores-entity.component.css']
})
export class ModalAutoresEntityComponent implements OnInit{
  autores:AutoresEntity = new AutoresEntity();
  registroExitoso = false;
  edicionExitosa = false;

  constructor(private autoresService:AutoresService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarAutor();
  }
  cargarAutor():void {
    this.activatedRoute.params.subscribe(
      a=>{
        let id = a['id'];
        if(id){
          this.autoresService.getAutorId(id).subscribe(
            es=>this.autores=es
          );
        }
      }
    )
  }
  createAutores():void{
    console.log(this.autores);
    this.autoresService.crearAutor(this.autores).subscribe(() => {
      this.registroExitoso = true;
      setTimeout(() => {
        this.registroExitoso = false;
      }, 3000);
      });
  }
  updateAutor():void {
    this.autoresService.updateAutor(this.autores).subscribe(() => {
      this.edicionExitosa = true;
      setTimeout(() => {
        this.edicionExitosa = false;
      }, 3000);
      });
  }
}
