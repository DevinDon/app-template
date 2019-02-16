import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/other/@types';
import { APPService } from 'src/app/service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currectTheme = 'light-coless-theme';

  constructor(
    public app: APPService
  ) { }

  ngOnInit() { }

}
