import { Injectable, inject } from '@angular/core';
import { Book } from '../shared/interfaces/book.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksServiceService {
  private http = inject(HttpClient);

  private jsonUrl: string = 'assets/data/booksData.json';
  public booksCollection: Book[] = [];
  constructor() {
    this.getBooks();
  }

  //* Función para obtener todos los usuarios
  getBooks() {
    //*Llámada HTTP
    this.http.get<Book[]>(this.jsonUrl).subscribe((resp) => {
      return this.booksCollection = resp;
    });
  }
}
