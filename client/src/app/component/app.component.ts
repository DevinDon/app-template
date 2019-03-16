import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { APPService } from 'src/app/service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class APPComponent {

  /** Is on top, control toolbar shadow. */
  isTop: boolean;
  /** Toobar background color. */
  toolbarBackgroundColor: string;

  constructor(
    public app: APPService
  ) {
    this.isTop = true;
    this.toolbarBackgroundColor = '#00000000';
    this.listenToolbarBackgroundColor(120);
  }

  /**
   * Transparent toolbar.
   * @param height Transparent height, px.
   */
  listenToolbarBackgroundColor(height: number) {
    fromEvent(window, 'scroll').subscribe(e => {
      if (pageYOffset > height) {
        this.isTop = false;
        this.toolbarBackgroundColor = this.app.theme.primary;
        return;
      }
      this.isTop = true;
      const alpha = this.app.fillWithPipe.transform(Math.floor(pageYOffset / height * 255).toString(16), 2);
      this.toolbarBackgroundColor = this.app.theme.primary + alpha;
    });
  }

}
