// src/app/module/routing/routes.ts

import { Route } from '@angular/router';

export interface Navigation {
  icon: string;
  link: string[];
  tip: string;
}

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  },
  {
    path: 'about',
    loadChildren: () => import('../../page/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'more',
    loadChildren: () => import('../../page/more/more.module').then(m => m.MoreModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('../../page/upload/upload.module').then(m => m.UploadModule)
  }
];
