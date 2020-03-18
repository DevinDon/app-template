// src/app/component/component.module.ts

import { NgModule } from '@angular/core';
import { MaterialModule } from '../module/material.module';
import { SharedModule } from '../module/shared.module';
import { CustomSnackBarComponent } from './custom-snack-bar/custom-snack-bar.component';

@NgModule({
  declarations: [CustomSnackBarComponent],
  imports: [
    SharedModule,
    MaterialModule
  ]
})
export class ComponentModule { }
