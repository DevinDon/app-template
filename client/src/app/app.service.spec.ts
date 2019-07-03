import { TestBed } from '@angular/core/testing';

import { APPService } from './app.service';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APPService = TestBed.get(APPService);
    expect(service).toBeTruthy();
  });
});
