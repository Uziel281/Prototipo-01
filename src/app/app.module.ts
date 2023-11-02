import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LibrosComponent } from './libros/libros.component';
import { LectoresComponent } from './lectores/lectores.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AutoresComponent } from './autores/autores.component';
import { AlquileresComponent } from './alquileres/alquileres.component';
import { ModalAutoresEntityComponent } from './autores/modal-autores-entity.component'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalCategoriasEntityComponent } from './categorias/modal-categorias-entity.component';
import { ModalEditorialesEntityComponent } from './editoriales/modal-editoriales-entity.component';
import { ModalLectoresEntityComponent } from './lectores/modal-lectores-entity.component';
import { ModalAlquileresEntityComponent } from './alquileres/modal-alquileres-entity.component';
import { ModalLibrosEntityComponent } from './libros/modal-libros-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    LectoresComponent,
    EditorialesComponent,
    CategoriasComponent,
    AutoresComponent,
    AlquileresComponent,
    ModalAutoresEntityComponent,
    ModalCategoriasEntityComponent,
    ModalEditorialesEntityComponent,
    ModalLectoresEntityComponent,
    ModalAlquileresEntityComponent,
    ModalLibrosEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
