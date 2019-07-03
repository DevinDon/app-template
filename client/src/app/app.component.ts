import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('title', [
      state('light', style({ color: '#999' })),
      state('dark', style({ color: '#000' })),
      transition('light <=> dark', [animate('1500ms ease-in-out')])
    ])
  ]
})
export class AppComponent {

  public animation = {
    title: {
      callback: () => this.animation.title.state = this.animation.title.state === 'light' ? 'dark' : 'light',
      state: 'dark'
    }
  };

  public desc = 'Angular client + Rester server';

  constructor(
    public app: AppService
  ) { }

}
