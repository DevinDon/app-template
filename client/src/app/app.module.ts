// src/app/app.module.ts

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { MaterialModule } from './module/material.module';
import { AppRouteReuseStrategy, RoutingModule } from './module/routing/routing.module';
import { SharedModule } from './module/shared.module';
import { PageModule } from './page/page.module';
import { ApiService } from './service/api.service';
import { AppService } from './service/app.service';
import { FirebaseService } from './service/firebase.service';
import { LoadingInterceptor } from './util/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    ComponentModule,
    PageModule,
    RoutingModule
  ],
  providers: [
    AppService,
    ApiService,
    FirebaseService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
