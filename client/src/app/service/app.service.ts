import { Injectable, TrackByFunction } from '@angular/core';
import { trackBy } from '../other/function';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public trackByID: TrackByFunction<any> = trackBy('id');

  constructor() { }

}
