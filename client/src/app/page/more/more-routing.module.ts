import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreComponent } from './more.component';

const routes: Routes = [
  { path: '', component: MoreComponent, data: { reload: false, title: 'More Demos' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreRoutingModule { }
