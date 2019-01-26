import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APPComponent } from './component/app.component';
import { DialogModule } from './module/dialog.module';
import { MatModule } from './module/mat.module';
import { OtherModule } from './module/other.module';
import { APPRoutingModule } from './module/routing.module';
import { FillWithPipe } from './other/pipe/fill-with.pipe';

@NgModule({
  declarations: [
    APPComponent,
    FillWithPipe
  ],
  imports: [
    BrowserModule,
    APPRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    OtherModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [APPComponent]
})
export class AppModule { }
