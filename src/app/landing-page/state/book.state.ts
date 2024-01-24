import { Injectable, signal } from '@angular/core';
import { BookService } from '../service/book.service';
import { BookModel } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookState {
  constructor(private bookService: BookService) {}
  allBooks = signal(this.bookService.getBooksData());
  //allBookList: BookModel[] = [];

  allBooksInfo() {
    return this.allBooks().map((x) => x);
  }
}
