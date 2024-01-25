import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { BookModel } from '../state/book.model';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-books-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './books-details.component.html',
  styleUrl: './books-details.component.scss',
})
export class BooksDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: {
      bookData: BookModel;
    },
    public dialogRef: MatDialogRef<BooksDetailsComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
