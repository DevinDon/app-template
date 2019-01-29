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

  private themeColor: HTMLElement;
  private bodyCSS: DOMTokenList;

  constructor() {
    this.themeColor = document.head.querySelector('[name=theme-color]');
    this.bodyCSS = document.body.classList;
  }

  /**
   * Change material theme.
   * @param {string} name Theme name.
   * @returns {void} Void.
   */
  changeTheme(name: 'light-blue-theme' | 'dark-cyan-theme' | 'light-indigo-theme' | 'dark-teal-theme'): void {
    this.bodyCSS.remove('light-blue-theme', 'dark-cyan-theme', 'light-indigo-theme', 'dark-teal-theme');
    this.bodyCSS.add(name);
    console.log(`Theme changed to ${name}.`);
  }

}
