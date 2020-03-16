import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/module/shared.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
