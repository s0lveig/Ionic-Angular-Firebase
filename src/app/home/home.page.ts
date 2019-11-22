import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  fireAuth: any;
  constructor(private firestore: AngularFirestore, fireAuth: AngularFireAuth, private router: Router) {

  }
  logout() {
    this.fireAuth.auth.signOut();
  }

}
