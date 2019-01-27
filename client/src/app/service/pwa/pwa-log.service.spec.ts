import { TestBed } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { of } from 'rxjs';
import { PWALogService } from './pwa-log.service';

class StubSwUpdate {

  available = of();

  activated = of();

  checkForUpdate() { }

}

export class StubPWALogService { }

describe('PWALogService', () => {

  let service: PWALogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SwUpdate, useClass: StubSwUpdate }
      ]
    });
    service = TestBed.get(PWALogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
