import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
    data: {
      reload: false,
      title: 'Upload Demo',
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
export class UploadRoutingModule { }
