import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
            this.app.openBar('网络忙，请稍后重试。');
            return of(new HttpResponse({ body: { status: false } }));
          }
        ),
        finalize(() => this.app.loadingFree())
      );
  }

}
