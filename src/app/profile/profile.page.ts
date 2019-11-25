import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private fireauth: AngularFireAuth) { }

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    const user = await this.fireauth.authState.pipe(first()).toPromise();
    const userNameText = document.getElementById("userName");
    userNameText.innerHTML = user.email;
  }
}
