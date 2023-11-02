import { Component, OnInit } from '@angular/core';
import { LectoresEntity } from '../models/LectoresEntity';
import { LectoresService } from '../services/lectores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-lectores-entity',
  templateUrl: './modal-lectores-entity.component.html',
  styleUrls: ['./modal-lectores-entity.component.css']
})
export class ModalLectoresEntityComponent implements OnInit{
  lectores:LectoresEntity = new LectoresEntity();
  registroExitoso = false;
  edicionExitosa = false;

  constructor(private lectoresService:LectoresService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarLector();
  }
  cargarLector():void {
    this.activatedRoute.params.subscribe(
      a=>{
        let id = a['id'];
        if(id){
          this.lectoresService.getLectorId(id).subscribe(
            es=>this.lectores=es
          );
        }
      }
    )
  }
  createLector():void {
    console.log(this.lectores);
    this.lectoresService.crearLector(this.lectores).subscribe(() => {
      this.registroExitoso = true;
      setTimeout(() => {
        this.registroExitoso = false;
      }, 1000);
      });
  }
  updateLector():void {
    this.lectoresService.updateLector(this.lectores).subscribe(() => {
      this.edicionExitosa = true;
      setTimeout(() => {
        this.edicionExitosa = false;
      }, 1000);
      });
  }
}
