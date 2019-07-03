import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
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
    AppService,
    { provide: RouteReuseStrategy, useClass: RouteReuseHandler }
  ]
})
export class AppModule { }
