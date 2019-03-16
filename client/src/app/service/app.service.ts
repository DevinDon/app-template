import { Injectable, TrackByFunction } from '@angular/core';
import { FillWithPipe } from 'src/app/other/pipe/fill-with.pipe';
import { trackBy } from 'src/app/other/function';
import { ThemeGroup, Theme } from 'src/app/other/@types';

@Injectable({
  providedIn: 'root'
})
export class APPService {

  fillWithPipe: FillWithPipe;

  /** Sidenav background. */
  background: string;
  /** APP title. */
  title = 'Client';
  /** TrackByFunction. */
  trackBy = trackBy;
  /** TrackByIDFunction. */
  trackByID: TrackByFunction<any> = trackBy('id');

  /** All themes. */
  themeGroups: ThemeGroup[];
  /** Currect theme. */
  theme: Theme;

  constructor() {
    this.fillWithPipe = new FillWithPipe();
    this.background = 'assets/image/background-light.png';
    this.themeGroups = [{
      name: 'dark',
      themes: [{
        name: 'dark-coless-theme',
        primary: '#424242',
        accent: '#2196f3',
        warn: 'f44336'
      }, {
        name: 'dark-cyan-theme',
        primary: '#00bcd4',
        accent: '#e91e63',
        warn: '#f44336'
      }, {
        name: 'dark-teal-theme',
        primary: '#009688',
        accent: '#e91e63',
        warn: '#f44336'
      }]
    }, {
      name: 'light',
      themes: [{
        name: 'light-blue-theme',
        primary: '#2196f3',
        accent: '#ff5722',
        warn: '#f44336'
      }, {
        name: 'light-coless-theme',
        primary: '#ffffff',
        accent: '#2196f3',
        warn: '#f44336'
      }, {
        name: 'light-indigo-theme',
        primary: '#3f51b5',
        accent: '#ff5722',
        warn: '#f44336'
      }]
    }];
    this.changeTheme('light-coless-theme');
  }

  /**
   * Change material theme.
   * @param {string} name Theme name.
   * @returns {void} Void.
   */
  changeTheme(name: string): void {
    document.body.classList.value = 'mat-app-background';
    document.body.classList.add(name);
    this.themeGroups.find(group => {
      const result = group.themes.find(theme => theme.name === name);
      if (result) {
        document.head.querySelector('[name=theme-color]').setAttribute('content', result.primary);
        if (group.name === 'dark') {
          this.background = 'assets/image/background-dark.png';
        } else {
          this.background = 'assets/image/background-light.png';
        }
        this.theme = result;
      }
      return Boolean(result);
    });
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
