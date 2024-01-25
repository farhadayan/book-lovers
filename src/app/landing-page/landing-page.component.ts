import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookModel } from './state/book.model';
import { BookState } from './state/book.state';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NgFor,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
@Injectable({
  providedIn: 'root',
})
export default class LandingPageComponent {
  allBooksData: BookModel[] = [];
  allBooksList: BookModel[] = [];

  foundBooks: BookModel[] = [];

  bookTitle = new FormControl('');

  constructor(
    private bookState: BookState,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.latestBooks();
  }

  latestBooks() {
    this.allBooksData = this.bookState
      .allBooksInfo()
      .sort(
        (a, b) =>
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );
  }

  private bookTitleChange = this.bookTitle.valueChanges.subscribe(
    (searchValues) => {
      if (searchValues?.length) {
        this.foundBooks = this.bookState
          .allBooksInfo()
          .filter((x) =>
            x.bookTitle.toLocaleLowerCase().includes(searchValues.toLowerCase())
          );
        this.allBooksData = [...this.foundBooks];
        this.router.navigate([this.route.queryParams], {
          queryParams: { searchValues },
        });
      } else {
        this.router.navigate(['/landing-page']);
        this.latestBooks();
      }
    }
  );
}
