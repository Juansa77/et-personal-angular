import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../shared/interfaces/book.interface';

@Component({
  selector: 'app-book-card-left',
  standalone: true,
  imports: [],
  templateUrl: './book-card-left.component.html',
  styleUrl: './book-card-left.component.css'
})
export class BookCardLeftComponent {

  @Input() book!:Book | undefined



}
