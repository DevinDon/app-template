import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Device } from 'src/app/util/device';

interface Demo {
  link: string[];
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  device: Device;
  demos: Demo[] = [
    { link: ['/upload'], title: 'Upload Demo', subtitle: 'Upload demos about HTTP & Firebase.' },
    { link: ['/drag'], title: 'Drag Demo', subtitle: 'Drag demo with RxJS...' },
    { link: undefined, title: 'More', subtitle: 'More demo incoming...' },
    { link: undefined, title: 'More', subtitle: 'More demo incoming...' }
  ];

  constructor(
    public app: AppService
  ) {
    app.observableDevice()
      .subscribe(device => this.device = device);
  }

  ngOnInit(): void { }

}
