// src/app/app.component.ts

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Navigation } from './module/routing/routes';
import { AppService } from './service/app.service';
import { destory } from './util/subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'Template';
  navigation: Navigation = { icon: 'ri-home-3-line', link: ['/'], tip: 'Home' };

  private subscriptions: Subscription[] = [];

  constructor(
    public app: AppService
  ) {
    this.subscriptions.push(
      app.observableRouterData()
        .subscribe(data => {
          this.title = data.title;
          this.navigation = data.navigation || { icon: 'ri-home-3-line', link: ['/'], tip: 'Home' };
        })
    );
  }

  ngOnDestroy(): void {
    destory(this.subscriptions);
  }

}
