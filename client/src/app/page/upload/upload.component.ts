import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  fileio: any;
  fileFirebase: any;

  constructor(
    private api: ApiService,
    private app: AppService
  ) { }

  ngOnInit(): void { }

  selectFileToFileio(file: any) {
    console.log('file: ', file);
    this.fileio = file;
  }

  uploadFileToFileio() {
    console.log('file: ', this.fileio);
    this.api.uploadFile('https://file.io/', this.fileio)
      .subscribe(v => {
        if (typeof v === 'object') {
          this.fileio.inProgress = false;
          this.app.openBar(`File Key: ${v.body.key}`);
        }
      });
  }

  selectFileToFileFirebase(file: any) {
    console.log('file: ', file);
    this.fileFirebase = file;
  }

  uploadFileToFirebase() {
    console.log('file: ', this.fileFirebase);
  }

}
