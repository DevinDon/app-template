# How to build this project

## 1 Create New Project

`ng new client` with `scss` & `no router`

## 2 Add *Remix Icon* Package

`npm i -S remixicon`

## 3 Add *Angular Material* Package

`ng add @angular/material`

## 4 Add Custom Material Style

```scss
// src/styles.scss

// Fira Code Font
@import url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css');

// Remix Icon Font
@import '~remixicon/fonts/remixicon.css';

// Custom Theming for Angular Material
// For more information: https://material.angular.io/guide/theming
@import '~@angular/material/theming';
// Plus imports for other components in your app.

// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Be sure that you only ever include this mixin once!
$custom-typography: mat-typography-config($font-family: '"Fira Code","Consolas",  "Roboto",  "Helvetica Neue",  sans-serif');
@include mat-core($custom-typography);

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue. Available color palettes: https://material.io/design/color/

$edusys-primary : mat-palette($mat-blue);
$edusys-accent  : mat-palette($mat-orange, A200, A100, A400);

// The warn palette is optional (defaults to red).
$edusys-warn: mat-palette($mat-red);

// Create the theme object (a Sass map containing all of the palettes).
$edusys-theme: mat-light-theme($edusys-primary, $edusys-accent, $edusys-warn);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include angular-material-theme($edusys-theme);

// Global font & size
body {
  margin          : 0;
  font-family     : "Fira Code", "Consolas", "Roboto", "Helvetica Neue", sans-serif;
  font-size       : 1.4rem;
  background-color: #fafafa;
}

// Mobile device
@media only screen and (max-width: 599px) {
  :root {
    font-size: calc(100vw / 36.0);
  }

  body {
    font-size: 1.4rem;
  }
}

// Table device
@media only screen and (min-width: 600px) and (max-width: 1023px) {
  :root {
    font-size: calc(100vw / 80.0);
  }

  body {
    font-size: 1.4rem;
  }
}

// Desktop device
@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  :root {
    font-size: calc(100vw / 102.4);
  }
}

@media only screen and (min-width: 1280px) and (max-width: 1439px) {
  :root {
    font-size: calc(100vw / 128.0);
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1599px) {
  :root {
    font-size: calc(100vw / 144.0);
  }
}

@media only screen and (min-width: 1600px) {
  :root {
    font-size: calc(100vw / 160.0);
  }
}

// Scroll bar
::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-radius   : 0;
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-thumb:vertical {
  background-color: #afafaf;
  border-radius   : 2px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #999;
}

:root {
  -webkit-tap-highlight-color: transparent;
}

// Reset style
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
}

a {
  color          : unset;
  text-decoration: unset;

  &:hover {
    color: unset;
  }
}

// Fix material style
// Fix place holder vertical-align
mat-hint,
mat-error,
mat-label {
  display        : flex !important;
  flex-direction : row;
  justify-content: flex-start;
  align-items    : center;
  width          : fit-content;

  >span {
    margin-left: .4rem;
  }
}

.fit-dialog {
  display       : flex;
  flex-direction: column;
  align-items   : center;

  @media only screen and (max-width: 599px) {
    width     : 80vw;
    max-height: 80vh;
    overflow  : auto;

    mat-form-field {
      width: 100%;
    }
  }
}

.mat-card {
  box-shadow        : 0 10px 20px rgba(0, 0, 0, 0.05) !important;
  // box-shadow     : 0 10px 20px -25px rgba(0, 0, 0) !important;

  .mat-card-header {
    display       : flex;
    flex-direction: row;
    align-items   : center;
    margin-bottom : 1.6rem;

    .mat-card-subtitle {
      margin-bottom: 0;
    }
  }

  .mat-card-content {
    font-size    : 1.4rem;
    line-height  : 2rem;
    margin-bottom: 0;
  }

}

.mat-expansion-panel {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05) !important;
}
```

## 5 Create Modules

### 5.1 Create Material Module

`ng g m module/material --flat`

```typescript
// src/app/module/material.module.ts

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    // Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ]
})
export class MaterialModule { }
```

### 5.2 Create Shared Module

`ng g m module/shared --flat`

```typescript
// src/app/module/shared.module.ts

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
```

### 5.3 Create Component Module

`ng g m component`

```typescript
// src/app/component/component.module.ts

import { NgModule } from '@angular/core';
import { MaterialModule } from '../module/material.module';
import { SharedModule } from '../module/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    MaterialModule
  ]
})
export class ComponentModule { }
```

### 5.4 Create Page Module

#### 5.4.1 Page Module

`ng g m page`

##### (1) Component Module

```typescript
// src/app/page/page.module.ts

import { NgModule } from '@angular/core';
import { ComponentModule } from '../component/component.module';
import { MaterialModule } from '../module/material.module';
import { SharedModule } from '../module/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    MaterialModule,
    ComponentModule
  ]
})
export class PageModule { }
```

#### 5.4.2 About Page

`ng g c page/about && ng g m page/about --routing`

##### (1) Component Template

```html
<!-- src/app/page/about/about.component.html -->

<div id="wave"></div>
<div class="window">

  <!-- <h1 class="title" [@title]="animation.title.state" (@title.done)="animation.title.callback()">{{ app.title }}</h1> -->
  <h1 class="title">{{ title }}</h1>

  <p class="desc">{{ desc }}</p>

  <div class="link">
    <a mat-button href="https://github.com/DevinDon/app-template" target="_blank">
      <mat-icon class="ri-github-line"></mat-icon><span class="name">GitHub</span>
    </a>
    <a mat-button href="https://angular.io" target="_blank">
      <mat-icon class="ri-angularjs-line"></mat-icon><span class="name">Angular</span>
    </a>
    <a mat-button href="https://github.com/DevinDon/rester" target="_blank">
      <mat-icon class="ri-server-line"></mat-icon><span class="name">Rester</span>
    </a>
  </div>

  <div *ngIf="version; else defaultTemplate" class="version">
    <span class="type">{{ version.type }}</span><span class="split"> & </span>
    <span class="major">{{ version.major }}</span>.<span class="minor">{{ version.minor }}</span>.<span
      class="patch">{{ version.patch }}</span>
  </div>

  <ng-template #defaultTemplate>
    <div class="version">Loading version...</div>
  </ng-template>

</div>
```

##### (2) Component Style

```scss
// src/app/page/about/about.component.scss

#wave {
  position        : fixed;
  top             : 0;
  left            : 0;
  width           : 100vw;
  height          : 100vh;
  background-color: #76daff;
  overflow        : hidden;
  z-index         : -1;

  &::before,
  &::after {
    content                  : "";
    position                 : absolute;
    left                     : 50%;
    background-color         : #fff;
    min-width                : 300rem;
    min-height               : 300rem;
    animation-name           : rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &::before {
    bottom            : 15vh;
    border-radius     : 46%;
    animation-duration: 15s;
  }

  &::after {
    bottom            : 12vh;
    opacity           : 0.5;
    border-radius     : 48%;
    animation-duration: 15s;
  }
}

.window {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  min-height     : 100vh;

  >.title {
    font-size  : xx-large;
    font-weight: bolder;
  }

  >.desc {
    color    : gray;
    font-size: small;
    margin   : 0 0 1rem 0;
  }

  .version {
    font-size: small;
    color    : gray;
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, 0) rotateZ(0deg);
  }

  50% {
    transform: translate(-50%, -2%) rotateZ(180deg);
  }

  100% {
    transform: translate(-50%, 0%) rotateZ(360deg);
  }
}
```

##### (3) Component Class

```typescript
// src/app/page/about/about.component.ts

import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';

export interface Version {
  major: number;
  minor: number;
  patch: number;
  type: 'beta' | 'release';
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = 'Template';
  desc = 'Angular client + Rester server';
  version: Version;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getVersion();
  }

  getVersion() {
    this.api.get<Version>('version')
      .pipe(
        catchError(err => of({
          major: 0,
          minor: 0,
          patch: 0,
          type: 'beta'
        } as Version))
      )
      .subscribe(v => this.version = v);
  }

}
```

##### (4) Component Routing

```typescript
// src/app/page/about/about-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: AboutComponent, data: { reload: false, title: 'About' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
```

##### (5) Component Module

```typescript
// src/app/page/about/about.module.ts

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/module/shared.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
```

### 5.5 Create Router Module

#### 5.5.1 Route module

```typescript
// src/app/module/routing/routing.module.ts

import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

export class AppRouteReuseStrategy implements RouteReuseStrategy {

  private cache: Map<string, DetachedRouteHandle> = new Map();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !route.data.reload;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.cache.set(route.routeConfig.path, handle);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.cache.has(route.routeConfig.path);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.cache.get(route.routeConfig.path);
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

}
```

#### 5.5.2 Routes

```typescript
// src/app/module/routing/routes.ts

import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  },
  {
    path: 'about',
    loadChildren: () => import('../../page/about/about.module').then(m => m.AboutModule)
  }
];
```

## 6 Add Util

### 6.1 Device

```typescript
// src/app/util/device.ts

export interface Device {
  width: number;
  height: number;
  type: 'mobile' | 'table' | 'desktop';
}

export function getDeviceInfo(): Device {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    type: window.innerWidth > 1023 ? 'desktop' : 'mobile'
  };
}

```

### 6.2 Subscriptions

```typescript
// src/util/subscription.ts

import { Subscription } from 'rxjs';

export function destory(subscriptions: Subscription[]) {
  subscriptions.forEach(v => v.unsubscribe());
}

```

## 7. Create Services

### 7.1 APP Service

`ng g s service/app`

```typescript
// src/app/service/app.service.ts

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
```

### 7.2 API Service

`ng g s service/api`

```typescript
// src/app/service/api.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

interface Environment {
  protocol: 'http' | 'https';
  host: string;
  port: number;
  prefix?: string;
  full: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public static API = '';

  private dev: Environment = {
    protocol: 'http',
    host: 'localhost',
    port: 8080,
    full: ''
  };

  private prod: Environment = {
    protocol: 'https',
    host: 'localhost',
    port: 8080,
    prefix: 'api',
    full: ''
  };

  constructor(
    private http: HttpClient
  ) {
    this.dev.full = `${this.dev.protocol}://${this.dev.host}:${this.dev.port}/${this.dev.prefix ? this.dev.prefix + '/' : ''}`;
    this.prod.full = `${this.prod.protocol}://${this.prod.host}:${this.prod.port}/${this.prod.prefix ? this.prod.prefix + '/' : ''}`;
    ApiService.API = isDevMode() ? this.dev.full : this.prod.full;
  }

  delete<T = any>(path: string) {
    return this.http.delete<T>(ApiService.API + path);
  }

  get<T = any>(path: string) {
    return this.http.get<T>(ApiService.API + path);
  }

  patch<T = any>(path: string, data: any = {}) {
    return this.http.patch<T>(ApiService.API + path, data);
  }

  post<T = any>(path: string, data: any = {}) {
    return this.http.post<T>(ApiService.API + path, data);
  }

  put<T = any>(path: string, data: any = {}) {
    return this.http.put<T>(ApiService.API + path, data);
  }
}
```

## 8 Create Interceptor

### 8.1 Loading Interceptor

`ng g interceptor util/loading`

```typescript
// src/app/util/loading.interceptor.ts

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AppService } from '../service/app.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private app: AppService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.app.loadingBusy();
    return next.handle(req)
      .pipe(
        catchError(
          error => {
            this.app.openBar('Network busy, try again later.');
            throw error;
          }
        ),
        finalize(() => this.app.loadingFree())
      );
  }

}
```

## 9 Import to APP Module

```typescript
// src/app/app.module.ts

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { MaterialModule } from './module/material.module';
import { AppRouteReuseStrategy, RoutingModule } from './module/routing/routing.module';
import { SharedModule } from './module/shared.module';
import { PageModule } from './page/page.module';
import { ApiService } from './service/api.service';
import { AppService } from './service/app.service';
import { LoadingInterceptor } from './util/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    ComponentModule,
    PageModule,
    RoutingModule
  ],
  providers: [
    AppService,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 10 Custom Index Page

```html
<!-- src/app/app.component.html -->

<div id="window">

  <section class="outlet">
    <router-outlet></router-outlet>
  </section>

</div>
```

```scss
// src/app/app.component.scss

#window {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  min-height     : 100vh;

  >.outlet {
    width: 100vw;
  }
}
```

```typescript
// src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
```

# Attention

## 1 Route

- Use lazy route.
- Add `title` to router data for page title.
- Add `reload` to router data if that page should not reuse.

## 2 Something else

Incoming.
