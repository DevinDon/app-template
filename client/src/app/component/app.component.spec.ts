import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { APPService } from 'src/app/service/app.service';
import { PWALogService } from '../service/pwa/pwa-log.service';
import { StubPWALogService } from '../service/pwa/pwa-log.service.spec';
import { APPComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<APPComponent>;
  let component: APPComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        APPComponent
      ],
      providers: [
        APPService,
        { provide: PWALogService, useClass: StubPWALogService }
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

  it('should render title in a p.welcome tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p.welcome').textContent).toContain('Welcome to Client!');
  });

});
