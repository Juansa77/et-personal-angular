import { Component } from '@angular/core';
import { BookCardLeftComponent } from './book-card-left/book-card-left.component';
import { BooksBannerComponent } from './books-banner/books-banner.component';
import { BookCuriositiesComponent } from './book-curiosities/book-curiosities.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    BookCardLeftComponent,
    BooksBannerComponent,
    BookCuriositiesComponent,
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {}
