import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { APPService } from './app.service';

// tslint:disable: component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletComponent { }

const appServiceStub: Partial<APPService> = {
  title: 'Template',
  desc: 'Web APP: Angular client + Rester server.'
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletComponent
      ],
      providers: [{ provide: APPService, useValue: appServiceStub }]
    }).compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in an h1.title tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1.title').textContent).toContain(appServiceStub.title);
  });

  it('should render desc in a p.desc tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p.desc').textContent).toContain(appServiceStub.desc);
  });
});
