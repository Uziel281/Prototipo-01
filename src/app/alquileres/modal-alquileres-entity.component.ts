import { Component, OnInit } from '@angular/core';
import { AlquileresEntity } from '../models/AlquileresEntity';
import { AlquileresService } from '../services/alquileres.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-alquileres-entity',
  templateUrl: './modal-alquileres-entity.component.html',
  styleUrls: ['./modal-alquileres-entity.component.css']
})
export class ModalAlquileresEntityComponent implements OnInit{
  alquileres:AlquileresEntity = new AlquileresEntity();
  registroExitoso = false;
  edicionExitosa = false;

  constructor(private alquileresService:AlquileresService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarAlquiler();
  }
  cargarAlquiler():void {
    this.activatedRoute.params.subscribe(
      a=>{
        let id = a['id'];
        if(id){
          this.alquileresService.getAlquilerId(id).subscribe(
            es=>this.alquileres=es
          );
        }
      }
    )
  }
  createAlquiler():void {
    console.log(this.alquileres);
    this.alquileresService.crearAlquiler(this.alquileres).subscribe(() => {
      this.registroExitoso = true;
      setTimeout(() => {
        this.registroExitoso = false;
      }, 1000);
      });
  }
  updateAlquiler(): void {
    this.alquileresService.updateAlquiler(this.alquileres).subscribe(() => {
      this.edicionExitosa = true;
      setTimeout(() => {
        this.edicionExitosa = false;
      }, 3000);
      });
  }
}
