// src/app/page/upload/upload.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { AppService } from 'src/app/service/app.service';
import { FirebaseService } from 'src/app/service/firebase.service';

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
    private app: AppService,
    private firebase: FirebaseService
  ) { }

  ngOnInit(): void { }

  selectFileToFileio(file: any) {
    this.fileio = file;
  }

  uploadFileToFileio() {
    this.api.uploadFile('https://file.io/', this.fileio)
      .subscribe(v => {
        if (typeof v === 'object') {
          this.fileio.inProgress = false;
          this.app.openBar(`Download link: ${v.body.link}`);
        }
      });
  }

  selectFileToFileFirebase(file: any) {
    this.fileFirebase = file;
  }

  uploadFileToFirebase() {
    const ref = this.firebase.storage.ref()
      .child(`test/${Date.now()}-${this.fileFirebase.name}`);
    this.fileFirebase.inProgress = true;
    this.fileFirebase.progress = 0;
    ref.put(this.fileFirebase)
      .on(
        'state_changed',
        snapshot => {
          this.fileFirebase.progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        },
        failed => {
          console.error('Upload failed: ' + failed);
        },
        async () => {
          this.fileFirebase.inProgress = false;
          this.app.openBar(`Download link: ${await ref.getDownloadURL()}`);
        }
      );
  }

}
