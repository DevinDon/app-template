import { Component } from '@angular/core';
import { APPService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public app: APPService
  ) { }

}
