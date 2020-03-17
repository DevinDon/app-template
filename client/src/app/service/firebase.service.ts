import { Injectable } from '@angular/core';
import { firestore, initializeApp } from 'firebase';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  database: firestore.Firestore;

  constructor() {
    initializeApp({
      apiKey: 'AIzaSyCzo3Z6Ttv8Q7jCSLdufTbL03IwBJjmDe4',
      authDomain: 'localhost:4200',
      projectId: 'fir-75ace',
      storageBucket: 'gs://fir-75ace.appspot.com'
    });
    this.database = firestore();
  }

}
