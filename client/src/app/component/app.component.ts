import { Component } from '@angular/core';
import { APPService } from 'src/app/service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class APPComponent {

  constructor(
    public app: APPService
  ) { }

}
