// src/app/page/about/about-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      reload: false,
      title: 'About',
      navigation: {
        icon: 'ri-dashboard-line',
        link: ['/'],
        tip: 'Template'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
