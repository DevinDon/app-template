import { TestBed } from '@angular/core/testing';
import { APPService } from './app.service';

describe('AppService', () => {

  let service: APPService;

  beforeEach(done => {
    TestBed.configureTestingModule({});
    service = TestBed.get(APPService);
    done();
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
