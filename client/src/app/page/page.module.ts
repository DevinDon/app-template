// src/app/page/page.module.ts

import { NgModule } from '@angular/core';
import { ComponentModule } from '../component/component.module';
import { MaterialModule } from '../module/material.module';
import { SharedModule } from '../module/shared.module';
import { AboutComponent } from './about/about.component';
import { DragComponent } from './drag/drag.component';
import { MoreComponent } from './more/more.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [AboutComponent, UploadComponent, MoreComponent, DragComponent],
  imports: [
    SharedModule,
    MaterialModule,
    ComponentModule
  ]
})
export class PageModule { }
