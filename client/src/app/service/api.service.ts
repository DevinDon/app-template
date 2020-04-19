// src/app/service/api.service.ts

import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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

  uploadByHTTP(url: string, form: FormData, method: 'POST' | 'PUT') {
    switch (method) {
      case 'PUT':
        return this.http.put(url, form, { reportProgress: true, observe: 'events' });
      default:
        return this.http.post(url, form, { reportProgress: true, observe: 'events' });
    }
  }

  uploadFile(url: string, file: any, method: 'POST' | 'PUT' = 'POST') {
    const formData = new FormData();
    formData.append('file', file);
    file.inProgress = true;
    file.progress = 0;
    return this.uploadByHTTP(url, formData, method)
      .pipe(
        map(event => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              file.progress = event.loaded / event.total * 100;
              break;
            case HttpEventType.Response:
              return event;
          }
        }),
        catchError(error => {
          console.error(error);
          return of(error);
        })
      );
  }

}
