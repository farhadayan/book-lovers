import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing-page.component'),
  },
  {
    path: 'landing-page',
    loadComponent: () => import('./landing-page.component'),
    children: [
      {
        path: 'landing-page/books',
        loadComponent: () =>
          import('./books/books.component').then((b) => b.BooksComponent),
      },
    ],
  },
];

export default routes;
