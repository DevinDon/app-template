import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PWALogService {

  constructor(
    private worker: SwUpdate
  ) {
    this.worker.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    this.worker.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
    console.log(`PWALogService init successfully.`);
  }

}
