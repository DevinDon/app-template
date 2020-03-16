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
