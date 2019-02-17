import { Component } from '@angular/core';
import { APPService } from '../service/app.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class APPComponent {

  /** Is on top, control toolbar shadow. */
  isTop: boolean;
  /** Sidenav side mode. */
  sideMode: 'over' | 'side';
  /** Is sidenav open. */
  sideOpened: boolean;
  /** Toobar background color. */
  toolbarBackgroundColor: string;

  constructor(
    public app: APPService
  ) {
    this.isTop = true;
    this.sideMode = 'over';
    this.sideOpened = window.innerWidth < 600 ? false : true;
    this.toolbarBackgroundColor = '#00000000';
    this.listenToolbarBackgroundColor();
  }

  listenToolbarBackgroundColor() {
    fromEvent(window, 'scroll').subscribe(e => {
      if (pageYOffset > 48) {
        this.isTop = false;
        this.toolbarBackgroundColor = this.app.theme.primary;
        return;
      }
      this.isTop = true;
      const alpha = this.app.fillWithPipe.transform(Math.floor(pageYOffset / 48 * 255).toString(16), 2);
      this.toolbarBackgroundColor = this.app.theme.primary + alpha;
    });
  }

  getSideMode(): 'over' | 'side' {
    return window.innerWidth < 600 ? 'over' : 'side';
  }

}
