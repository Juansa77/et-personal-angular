import { Component, Input } from '@angular/core';
import { Book } from '../../shared/interfaces/book.interface';

@Component({
  selector: 'app-book-curiosities',
  standalone: true,
  imports: [],
  templateUrl: './book-curiosities.component.html',
  styleUrl: './book-curiosities.component.css'
})
export class BookCuriositiesComponent {

  @Input() book!: Book

}
