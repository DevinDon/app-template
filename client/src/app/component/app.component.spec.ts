import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { APPService } from 'src/app/service/app.service';
import { MatModule } from '../module/mat.module';
import { APPComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<APPComponent>;
  let component: APPComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        MatModule,
        FormsModule
      ],
      declarations: [
        APPComponent
      ],
      providers: [
        APPService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(APPComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "Client"', () => {
    expect(component.app.title).toEqual('Client');
  });

});
