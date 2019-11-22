import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import IRoom from '../models/IRoom';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  private rooms$: Observable<IRoom[]>;
  fireAuth: any;

  constructor(private firestore: AngularFirestore, fireAuth: AngularFireAuth, private router: Router) {

  }

  ngOnInit() {
    this.rooms$ = this.firestore.collection("rooms").valueChanges() as Observable<IRoom[]>;
  }

  logout() {
    this.fireAuth.auth.signOut();
  }

  navigateToDetailView(tappedRoom: IRoom) {

    let navigationExtras: NavigationExtras = {
      state: {
        room: tappedRoom
      }
    };

    this.router.navigate(['detail-view'], navigationExtras);
  }

}
