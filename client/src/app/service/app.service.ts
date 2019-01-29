import { Injectable, TrackByFunction } from '@angular/core';
import { trackBy } from '../other/function';

interface Theme {
  name: string;
  color: string;
}

interface ThemeList {
  'light-blue-theme': Theme;
  'dark-cyan-theme': Theme;
  'light-indigo-theme': Theme;
  'dark-teal-theme': Theme;
}

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

  private themes: ThemeList;

  constructor() {
    this.themes = {
      'dark-cyan-theme': {
        name: 'dark-cyan-theme',
        color: '#00bcd4'
      },
      'dark-teal-theme': {
        name: 'dark-teal-theme',
        color: '#009688'
      },
      'light-blue-theme': {
        name: 'light-blue-theme',
        color: '#2196f3'
      },
      'light-indigo-theme': {
        name: 'light-indigo-theme',
        color: '#3f51b5'
      }
    };
  }

  /**
   * Change material theme.
   * @param {string} name Theme name.
   * @returns {void} Void.
   */
  changeTheme(name: keyof ThemeList): void {
    document.body.classList.value = 'mat-app-background';
    document.body.classList.add(name);
    document.head.querySelector('[name=theme-color]').setAttribute('content', this.themes[name].color);
    console.log(`Theme changed to ${name}.`);
  }

}
