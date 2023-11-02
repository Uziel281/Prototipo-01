import { Component, OnInit } from '@angular/core';
import { EditorialesEntity } from '../models/EditorialesEntity';
import { EditorialesService } from '../services/editoriales.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-editoriales-entity',
  templateUrl: './modal-editoriales-entity.component.html',
  styleUrls: ['./modal-editoriales-entity.component.css']
})
export class ModalEditorialesEntityComponent implements OnInit{
  editoriales:EditorialesEntity = new EditorialesEntity();
  registroExitoso = false;
  edicionExitosa = false;

  constructor(private editorialesService:EditorialesService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEditorial();
  }
  cargarEditorial():void {
    this.activatedRoute.params.subscribe(
      a=>{
        let id = a['id'];
        if(id){
          this.editorialesService.getEditorialId(id).subscribe(
            es=>this.editoriales=es
          );
        }
      }
    )
  }
  createEditorial():void {
    console.log(this.editoriales);
    this.editorialesService.crearEditorial(this.editoriales).subscribe(() => {
      this.registroExitoso = true;
      setTimeout(() => {
        this.registroExitoso = false;
      }, 3000);
      });
  }
  updateEditorial():void {
    this.editorialesService.updateEditorial(this.editoriales).subscribe(() => {
      this.edicionExitosa = true;
      setTimeout(() => {
        this.edicionExitosa = false;
      }, 3000);
      });
  }
}
