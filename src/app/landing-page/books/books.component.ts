import { Component, ViewChild } from '@angular/core';
import { BookState } from '../state/book.state';
import { CommonModule } from '@angular/common';
import { BookModel } from '../state/book.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BooksDetailsComponent } from '../books-details/books-details.component';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  pageLimitOptions: Array<number> = [10, 20];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private bookState: BookState,

    private _dialog: MatDialog
  ) {}

  booksList = new MatTableDataSource<BookModel>(this.bookState.allBooksInfo());
  displayColumns = ['bookAuthor', 'bookTitle'];
  openDetails(book: BookModel) {
    let dialogRef = this._dialog.open(BooksDetailsComponent, {
      height: '300px',
      width: '400px',
      autoFocus: true,
      disableClose: false,
      data: {
        bookData: book,
      },
    });
  }

  ngAfterViewInit() {
    console.log('paginator: ', this.paginator);
    this.booksList.paginator = this.paginator;
  }
}
