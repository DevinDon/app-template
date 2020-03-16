import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { MaterialModule } from './module/material.module';
import { AppRouteReuseStrategy, RouteModule } from './module/route/route.module';
import { SharedModule } from './module/shared.module';
import { PageModule } from './page/page.module';
import { ApiService } from './service/api.service';
import { AppService } from './service/app.service';
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
    RouteModule
  ],
  providers: [
    AppService,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
