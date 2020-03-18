// src/app/service/firebase.service.ts

import { Injectable } from '@angular/core';
import { firestore, initializeApp, storage } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  database: firestore.Firestore;
  storage: storage.Storage;

  constructor() {
    // firebase config
    const firebaseConfig = {
      apiKey: 'AIzaSyCzo3Z6Ttv8Q7jCSLdufTbL03IwBJjmDe4',
      authDomain: 'fir-75ace.firebaseapp.com',
      databaseURL: 'https://fir-75ace.firebaseio.com',
      projectId: 'fir-75ace',
      storageBucket: 'fir-75ace.appspot.com',
      messagingSenderId: '506838920825',
      appId: '1:506838920825:web:7f33b503e5096aa8b12ea8',
      measurementId: 'G-304K95P21H'
    };
    initializeApp(firebaseConfig);
    this.database = firestore();
    this.storage = storage();
  }

}
