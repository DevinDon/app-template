import { Injectable, TrackByFunction } from '@angular/core';
import { trackBy } from '../other/function';

@Injectable({
  providedIn: 'root'
})
export class APPService {

  /** APP title. */
  title = 'Client';
  /** TrackByFunction. */
  trackBy = trackBy;
  /** TrackByIDFunction. */
  trackByID: TrackByFunction<any> = trackBy('id');

  constructor() { }

}
