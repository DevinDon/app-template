// src/app/page/about/about.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getVersion();
  }

  getVersion() {
    this.http.get<Version>('/assets/version.json')
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
