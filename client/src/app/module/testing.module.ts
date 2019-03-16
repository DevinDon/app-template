import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import 'jasmine';
import { StubAboutComponent } from 'src/app/component/content/about/about.component.spec';
import { StubContentComponent } from 'src/app/component/content/content.component.spec';
import { StubHomeComponent } from 'src/app/component/content/home/home.component.spec';
import { StubSidenavComponent } from 'src/app/component/content/sidenav.component.spec';
import { StubDialogAlertComponent } from 'src/app/component/dialog/dialog-alert/dialog-alert.component.spec';
import { MatModule } from './mat.module';

@NgModule({
  declarations: [
    StubAboutComponent,
    StubHomeComponent,
    StubContentComponent,
    StubSidenavComponent,
    StubDialogAlertComponent
  ],
  exports: [
    BrowserAnimationsModule,
    RouterTestingModule,
    MatModule,
    FormsModule,
    FlexLayoutModule,
    StubAboutComponent,
    StubHomeComponent,
    StubContentComponent,
    StubSidenavComponent,
    StubDialogAlertComponent
  ]
})
export class TestingModule { }
