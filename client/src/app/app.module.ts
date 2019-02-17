import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { APPComponent } from './component/app.component';
import { AboutComponent } from './component/content/about/about.component';
import { ContentComponent } from './component/content/content.component';
import { HomeComponent } from './component/content/home/home.component';
import { SidenavComponent } from './component/content/sidenav.component';
import { DialogModule } from './module/dialog.module';
import { MatModule } from './module/mat.module';
import { OtherModule } from './module/other.module';
import { APPRoutingModule } from './module/routing.module';
import { FillWithPipe } from './other/pipe/fill-with.pipe';

@NgModule({
  declarations: [
    APPComponent,
    FillWithPipe,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    APPRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    OtherModule,
    DialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [APPComponent]
})
export class AppModule { }
