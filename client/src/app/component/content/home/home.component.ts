import { Component, OnInit } from '@angular/core';
import { APPService } from 'src/app/service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public app: APPService
  ) { }

  ngOnInit() { }

}
