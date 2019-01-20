import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlertComponent } from './dialog-alert.component';

describe('DialogAlertComponent', () => {
  let component: DialogAlertComponent;
  let fixture: ComponentFixture<DialogAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
