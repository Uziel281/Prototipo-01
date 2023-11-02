import { Component, OnInit } from '@angular/core';
import { AlquileresEntity } from '../models/AlquileresEntity';
import { AlquileresService } from '../services/alquileres.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit{
  alquileres:AlquileresEntity[]=[];
  alquilerAEliminar: AlquileresEntity | null = null;

  constructor(private alquileresService:AlquileresService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.getAlquileres();
  }
  getAlquileres(){
    this.alquileresService.getAlquileres().subscribe(
      e => this.alquileres = e
    );
  }
  eliminarAlquiler(alquiler:AlquileresEntity): void{
    if (alquiler && alquiler.id) {
      this.setUrlInBrowser(`/url/alquileres/delete/${alquiler.id}`);
      this.alquilerAEliminar = alquiler;
    }
  }
  setUrlInBrowser(url: string):void {
    this.location.go(url);
  }
  confirmarEliminacion(): void {
    if (this.alquilerAEliminar && this.alquilerAEliminar.id) {
      this.alquileresService.eliminarAlquiler(this.alquilerAEliminar.id).subscribe(
        (res) => {
          this.alquileresService.getAlquileres().subscribe((response) => {
          this.alquileres = response;
          this.router.navigate(['/url/alquileres/all']);
          });
          this.alquilerAEliminar = null;
        }
      );
    }
  }

  cancelarEliminacion(): void {
    this.alquilerAEliminar = null;
  }
}
