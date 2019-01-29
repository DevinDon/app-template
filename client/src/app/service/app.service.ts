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
   * @param {'light' | 'dark'} name Theme name.
   * @returns {void} Void.
   */
  changeTheme(name?: 'light' | 'dark'): void {
    if (name) {
      this.bodyCSS.remove('use-light-theme', 'use-dark-theme');
      this.bodyCSS.add(`use-${name}-theme`);
    } else {
      if (this.bodyCSS.contains('use-light-theme')) {
        this.bodyCSS.remove('use-light-theme');
        this.bodyCSS.add('use-dark-theme');
        this.themeColor.setAttribute('content', '#00bcd4');
      } else {
        this.bodyCSS.remove('use-dark-theme');
        this.bodyCSS.add('use-light-theme');
        this.themeColor.setAttribute('content', '#009688');
      }
    }
    console.log(`Theme changed.`);
  }

}
