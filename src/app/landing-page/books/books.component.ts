import { Component } from '@angular/core';
import { BookState } from '../state/book.state';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgFor, MatCardModule, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  constructor(private bookState: BookState) {}

  booksList = this.bookState.allBooksInfo();
}
