import { Injectable } from '@angular/core';
import { trackBy } from '../other/function';
import { TrackByFunction } from '../other/type';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public trackByID: TrackByFunction = trackBy('id');

  constructor() { }

}
