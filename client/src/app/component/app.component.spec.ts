import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APPService } from 'src/app/service/app.service';
import { TestingModule } from '../module/testing.module';
import { APPComponent } from './app.component';

describe('APPComponent', () => {

  let fixture: ComponentFixture<APPComponent>;
  let component: APPComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        APPComponent
      ],
      providers: [
        APPService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APPComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
