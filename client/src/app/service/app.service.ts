import { Injectable, TrackByFunction } from '@angular/core';
import { ThemeGroup } from '../other/@types';
import { trackBy } from '../other/function';
import { FillWithPipe } from '../other/pipe/fill-with.pipe';

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

  /** All themes. */
  public themeGroups: ThemeGroup[];

  constructor() {
    this.fillWithPipe = new FillWithPipe();
    this.themeGroups = [{
      name: 'dark',
      themes: [{
        name: 'dark-coless-theme',
        backgroundColor: '#161616',
        color: '#303030'
      }, {
        name: 'dark-cyan-theme',
        backgroundColor: '#161616',
        color: '#00bcd4'
      }, {
        name: 'dark-teal-theme',
        backgroundColor: '#161616',
        color: '#009688'
      }]
    }, {
      name: 'light',
      themes: [{
        name: 'light-blue-theme',
        backgroundColor: '#fff',
        color: '#2196f3'
      }, {
        name: 'light-coless-theme',
        backgroundColor: '#fff',
        color: '#fafafa'
      }, {
        name: 'light-indigo-theme',
        backgroundColor: '#fff',
        color: '#3f51b5'
      }]
    }];
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
        document.head.querySelector('[name=theme-color]').setAttribute('content', result.color);
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
