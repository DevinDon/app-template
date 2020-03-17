import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  fileio: any;
  fileFirebase: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void { }

  selectFileToFileio(file: any) {
    console.log('file: ', file);
    this.fileio = file;
  }

  uploadFileToFileio() {
    console.log('file: ', this.fileio);
    this.api.uploadFile('https://file.io/', this.fileio)
      .subscribe(v => typeof v === 'object' && console.log('Upload success.', this.fileio));
  }

  selectFileToFileFirebase(file: any) {
    console.log('file: ', file);
    this.fileFirebase = file;
  }

  uploadFileToFirebase() {
    console.log('file: ', this.fileFirebase);
  }

}
