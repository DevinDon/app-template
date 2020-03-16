import { ComponentType } from '@angular/cdk/portal';
import { Injectable, OnDestroy, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { filter, map, mergeMap, throttleTime } from 'rxjs/operators';
import { Device, getDeviceInfo } from '../util/device';
import { destory } from '../util/subscription';

interface Subjections {
  device: BehaviorSubject<Device>;
  loading: BehaviorSubject<number>;
  paths: BehaviorSubject<string[]>;
}

export const APP = {
  name: 'Template',
  published: '2020-03-15 22:00:00'
};

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {

  private subscriptions: Subscription[] = [];

  private subjections: Subjections = {
    device: new BehaviorSubject(getDeviceInfo()),
    loading: new BehaviorSubject(0),
    paths: new BehaviorSubject(['', ''])
  };

  constructor(
    public bar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router,
    public routerActive: ActivatedRoute,
    public title: Title
  ) {
    // auto resize
    this.subscriptions.push(
      fromEvent(window, 'resize').subscribe(() => this.subjections.device.next(getDeviceInfo()))
    );
    // auto change page title
    this.subscriptions.push(
      this.observableRouterData()
        .subscribe(data => this.title.setTitle(`${APP.name} - ${data.title}`))
    );
    // publish current paths
    this.subscriptions.push(
      this.observableRouterEvent()
        .subscribe((event: NavigationEnd) => this.subjections.paths.next(location.pathname.split('/')))
    );
    console.log('Published at: ', APP.published);
  }

  observableDevice() {
    return this.subjections.device
      .pipe(
        throttleTime(50)
      );
  }

  observableLoading() {
    return this.subjections.loading
      .pipe(
        throttleTime(50)
      );
  }

  observablePaths() {
    return this.subjections.paths;
  }

  observableRouterEvent() {
    return this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );
  }

  observableRouterData() {
    return this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.routerActive),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap(route => route.data)
      );
  }

  loadingBusy() {
    this.subjections.loading.next(this.subjections.loading.value + 1);
  }

  loadingFree() {
    this.subjections.loading.next(Math.min(this.subjections.loading.value - 1, 0));
  }

  openBar(
    message: string,
    action: string = '了解',
    config: MatSnackBarConfig = {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    }
  ) {
    return this.bar.open(message, action, config);
  }

  closeBar() {
    this.bar.dismiss();
  }

  openDialog<T>(
    component: ComponentType<T> | TemplateRef<T>,
    config?: MatDialogConfig
  ) {
    return this.dialog.open(
      component,
      Object.assign(
        {},
        config || {},
        {
          panelClass: ['fit-dialog']
        }
      )
    );
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  ngOnDestroy() {
    destory(this.subscriptions);
  }

}
