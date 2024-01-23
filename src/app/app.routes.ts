import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BioComponent } from './bio/bio.component';

export const routes: Routes = [

  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "books",
    component:BooksComponent
  },

  {
    path: "bio",
    component:BioComponent
  },

//* RUTA POR DEFECTO

  {
    path: "",
    component:HomeComponent
  },

  //* TODO: NOT FOUND
  {
    path: "**",
    component:HomeComponent
  },


];
