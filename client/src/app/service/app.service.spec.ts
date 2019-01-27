import { TestBed } from '@angular/core/testing';
import { APPService } from './app.service';

describe('APPService', () => {

  let service: APPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(APPService);
  });

  it('should be created', done => {
    expect(service).toBeTruthy();
    done();
  });

  it('should has a title', done => {
    expect(service.title).toBeDefined();
    done();
  });

});
