import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { MaterialModule } from './module/material.module';
import { AppRoutingModule } from './module/router/app-routing.module';
import { SharedModule } from './module/shared.module';
import { PageModule } from './page/page.module';
import { AppService } from './service/app.service';
import { LoadingInterceptor } from './util/loading-interceptor';

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
    AppRoutingModule
  ],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
