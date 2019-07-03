import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { APPService } from './app.service';
import { MaterialModule } from './module/material.module';
import { RouteReuseHandler, RoutingModule } from './module/routing.module';
import { SharedModule } from './module/shared.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [
    APPService,
    { provide: RouteReuseStrategy, useClass: RouteReuseHandler }
  ]
})
export class AppModule { }
