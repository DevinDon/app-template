import { Component, OnInit } from '@angular/core';
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

  version: Version;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getVersion();
  }

  getVersion() {
    this.api.get<Version>('version')
      .subscribe(v => this.version = v);
  }

}
