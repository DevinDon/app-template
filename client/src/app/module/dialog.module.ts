import { NgModule } from '@angular/core';
import { DialogAlertComponent } from 'src/app/component/dialog/dialog-alert/dialog-alert.component';
import { MatModule } from './mat.module';
import { OtherModule } from './other.module';

@NgModule({
  imports: [
    MatModule,
    OtherModule
  ],
  exports: [
    DialogAlertComponent
  ],
  declarations: [
    DialogAlertComponent
  ],
  entryComponents: [
    DialogAlertComponent
  ]
})
export class DialogModule { }
