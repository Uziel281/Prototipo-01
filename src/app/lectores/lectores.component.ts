import { Component, OnInit } from '@angular/core';
import { LectoresEntity } from '../models/LectoresEntity';
import { LectoresService } from '../services/lectores.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lectores',
  templateUrl: './lectores.component.html',
  styleUrls: ['./lectores.component.css']
})
export class LectoresComponent implements OnInit{
  lectores:LectoresEntity[]=[];
  lectoresAEliminar: LectoresEntity | null = null;

  constructor(private lectoresService:LectoresService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.getLectores();
  }
  getLectores(){
    this.lectoresService.getLectores().subscribe(
      l => this.lectores = l
    );
  }
  eliminarLectores(lector:LectoresEntity):void {
    if (lector && lector.id) {
      this.setUrlInBrowser(`/url/lectores/delete/${lector.id}`);
      this.lectoresAEliminar = lector;
    }
  }
  setUrlInBrowser(url:string): void{
    this.location.go(url);
  }
  confirmarEliminacion(): void {
    if (this.lectoresAEliminar && this.lectoresAEliminar.id) {
      this.lectoresService.eliminarLector(this.lectoresAEliminar.id).subscribe(
        (res) => {
          this.lectoresService.getLectores().subscribe((response) => {
          this.lectores = response;
          this.router.navigate(['/url/lectores/all']);
          });
          this.lectoresAEliminar = null;
        }
      );
    }
  }

  cancelarEliminacion(): void {
    this.lectoresAEliminar = null;
  }
}
