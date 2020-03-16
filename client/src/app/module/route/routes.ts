import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'about',
    loadChildren: () => import('../../page/about/about.module').then(m => m.AboutModule)
  }
];
