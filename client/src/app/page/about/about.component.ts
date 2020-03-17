// src/app/page/about/about.component.ts

import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

  file: any;

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.getVersion();
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

  selectFile(file: any) {
    console.log('file: ', file);
    this.file = file;
  }

  uploadFile() {
    console.log('file: ', this.file);
    this.api.uploadFile('https://file.io/', this.file)
      .subscribe(v => typeof v === 'object' && console.log('Upload success.', this.file));
  }

}
