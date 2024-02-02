import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: 'landing-page',
        loadComponent: () => import('./landing-page/landing-page.component'),
      },
      {
        path: 'landing-page/books',
        loadComponent: () =>
          import('./landing-page/books/books.component').then(
            (b) => b.BooksComponent
          ),
      },
    ],
  },
];
