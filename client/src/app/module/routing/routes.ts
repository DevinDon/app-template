// src/app/module/routing/routes.ts

import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  },
  {
    path: 'upload',
    loadChildren: () => import('../../page/upload/upload.module').then(m => m.UploadModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../../page/about/about.module').then(m => m.AboutModule)
  }
];
