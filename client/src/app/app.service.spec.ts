import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('should has properity title', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service.title).toBeTruthy();
  });

  it('should has properity desc', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service.desc).toBeTruthy();
  });
});
