import { Injectable } from '@angular/core';
import { allBooks } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getBooksData() {
    return allBooks;
  }
}
