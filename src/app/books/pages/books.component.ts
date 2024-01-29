import { Component, inject } from '@angular/core';
import { BookCardLeftComponent } from '../book-card-left/book-card-left.component';
import { BooksBannerComponent } from '../books-banner/books-banner.component';
import { BookCuriositiesComponent } from '../book-curiosities/book-curiosities.component';
import { BooksServiceService } from '../../services/books-service.service';
import { Book } from '../../shared/interfaces/book.interface';

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
export class BooksComponent {
  public booksService = inject(BooksServiceService);

  get books(): Book[] {
    return this.booksService.booksCollection;
  }

  constructor() {
    console.log(this.booksService.booksCollection);
  }
}
