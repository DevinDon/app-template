import { Injectable, TrackByFunction } from '@angular/core';
import { Theme } from '../other/@types';
import { trackBy } from '../other/function';
import { FillWithPipe } from '../other/pipe/fill-with.pipe';

interface ThemeList {
  'light-coless-theme': Theme;
  'dark-coless-theme': Theme;
  'light-blue-theme': Theme;
  'dark-cyan-theme': Theme;
  'light-indigo-theme': Theme;
  'dark-teal-theme': Theme;
}

@Injectable({
  providedIn: 'root'
})
export class APPService {

  private fillWithPipe: FillWithPipe;

  /** APP title. */
  title = 'Client';
  /** TrackByFunction. */
  trackBy = trackBy;
  /** TrackByIDFunction. */
  trackByID: TrackByFunction<any> = trackBy('id');

  private themes: ThemeList;

  constructor() {
    this.fillWithPipe = new FillWithPipe();
    this.themes = {
      'dark-coless-theme': {
        name: 'dark-coless-theme',
        color: '#303030'
      },
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
      'light-coless-theme': {
        name: 'light-coless-theme',
        color: '#fafafa'
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

  /**
   * Get time, format HH:MM:SS.
   * @returns {string} Time string.
   */
  getTime(): string {
    const time = new Date();
    const hour = this.fillWithPipe.transform(time.getHours(), 2);
    const minute = this.fillWithPipe.transform(time.getMinutes(), 2);
    const second = this.fillWithPipe.transform(time.getSeconds(), 2);
    return `${hour}:${minute}:${second}`;
  }

}
