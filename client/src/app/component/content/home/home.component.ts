import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/other/@types';
import { APPService } from 'src/app/service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  theme: string;
  themes: Theme[] = [];

  constructor(
    public app: APPService
  ) {
    this.theme = 'light-coless-theme';
    for (const name in app.themes) {
      if (app.themes.hasOwnProperty(name)) {
        this.themes.push(app.themes[name]);
      }
    }
  }

  ngOnInit() { }

}
