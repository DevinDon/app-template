import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragComponent } from './drag.component';

const routes: Routes = [
  {
    path: '',
    component: DragComponent,
    data: {
      reload: false,
      title: 'Drag Demo',
      navigation: {
        icon: 'ri-arrow-left-line',
        link: ['/more'],
        tip: 'Back'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragRoutingModule { }
