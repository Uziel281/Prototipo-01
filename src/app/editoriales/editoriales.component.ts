import { Component, OnInit } from '@angular/core';
import { EditorialesEntity } from '../models/EditorialesEntity';
import { EditorialesService } from '../services/editoriales.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit {

  editoriales:EditorialesEntity[] = [];
  editorialAEliminar: EditorialesEntity | null = null;

  constructor(private editorialesService:EditorialesService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    this.getEditoriales();
  }
  getEditoriales(){
    this.editorialesService.getEditoriales().subscribe(
      e => this.editoriales = e
    );
  }
  eliminarEditorial(editorial:EditorialesEntity): void {
    if (editorial && editorial.id) {
      this.setUrlInBrowser(`/url/editoriales/delete/${editorial.id}`);
      this.editorialAEliminar = editorial;
    }
  }
  setUrlInBrowser(url: string):void {
    this.location.go(url);
  }
  confirmarEliminacion(): void {
    if (this.editorialAEliminar && this.editorialAEliminar.id) {
      this.editorialesService.eliminarEditorial(this.editorialAEliminar.id).subscribe(
        (res) => {
          this.editorialesService.getEditoriales().subscribe((response) => {
          this.editoriales = response;
          this.router.navigate(['/url/editoriales/all']);
          });
          this.editorialAEliminar = null;
        }
      );
    }
  }

  cancelarEliminacion(): void {
    this.editorialAEliminar = null;
  }
}
