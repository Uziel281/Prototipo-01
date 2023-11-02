import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoresComponent } from './autores/autores.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { ModalAutoresEntityComponent } from './autores/modal-autores-entity.component';
import { LibrosComponent } from './libros/libros.component';
import { AlquileresComponent } from './alquileres/alquileres.component';
import { LectoresComponent } from './lectores/lectores.component';


const routes: Routes = [
  {path: 'url/libros/all', component: LibrosComponent},
  {path: 'url/libros/Crearlibros', component: LibrosComponent},
  {path: 'url/libros/update/:id', component: LibrosComponent},
  {path: 'url/libros/delete/:id', component: LibrosComponent},
  {path: 'url/alquileres/all', component: AlquileresComponent},
  {path: 'url/alquileres/Crearalquiler', component: AlquileresComponent},
  {path: 'url/alquileres/update/:id', component: AlquileresComponent},
  {path: 'url/alquileres/delete/:id', component: AlquileresComponent},
  {path: 'url/lectores/all', component: LectoresComponent},
  {path: 'url/lectores/Crearlectores', component: LectoresComponent},
  {path: 'url/lectores/update/:id', component: LectoresComponent},
  {path: 'url/lectores/delete/:id', component: LectoresComponent},
  {path: 'url/autores/all', component: AutoresComponent},
  {path: 'url/autores/Crearautor', component: AutoresComponent},
  {path: 'url/autores/update/:id', component: AutoresComponent},
  {path: 'url/autores/delete/:id', component: AutoresComponent},
  {path: 'url/categorias/all', component: CategoriasComponent},
  {path: 'url/categorias/Crearcategorias', component: CategoriasComponent},
  {path: 'url/categorias/update/:id', component: CategoriasComponent},
  {path: 'url/categorias/delete/:id', component: CategoriasComponent},
  {path: 'url/editoriales/all', component: EditorialesComponent},
  {path: 'url/editoriales/Creareditoriales', component: EditorialesComponent},
  {path: 'url/editoriales/update/:id', component: EditorialesComponent},
  {path: 'url/editoriales/delete/:id', component: EditorialesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
