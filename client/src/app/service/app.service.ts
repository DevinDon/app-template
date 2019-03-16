import { Injectable, TrackByFunction } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Theme, ThemeGroup } from 'src/app/other/@types';
import { trackBy } from 'src/app/other/function';
import { FillWithPipe } from 'src/app/other/pipe/fill-with.pipe';

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

  /** Side mode. */
  sideMode: 'over' | 'side';
  /** Side open. */
  sideOpen: boolean;

  /** All themes. */
  themeGroups: ThemeGroup[];
  /** Currect theme. */
  theme: Theme;

  constructor() {
    this.fillWithPipe = new FillWithPipe();
    this.background = 'assets/image/background-light.png';
    this.sideMode = this.getSideMode();
    this.sideOpen = window.innerWidth > 600;
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
    this.listenOnWindowResize();
  }

  /**
   * Listen event on winows resize.
   * @returns {void} Void.
   */
  listenOnWindowResize(): void {
    fromEvent(window, 'resize').pipe(
      debounceTime(50),
      distinctUntilChanged()
    ).subscribe(e => {
      this.sideMode = this.getSideMode();
      this.sideOpen = window.innerWidth > 600;
    });
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
   * Get side mode, over mode on moblie and side mode on desktop.
   * @returns {'over' | 'side'} 'over' or 'side'.
   */
  getSideMode(): 'over' | 'side' {
    return window.innerWidth < 600 ? 'over' : 'side';
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
