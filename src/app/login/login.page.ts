import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user = { username: "", password: "" };
  toastController: any;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router
  ) { }

  async loginUser() {
    try {
      const result = await this.fireauth.auth.signInWithEmailAndPassword(this.user.username, this.user.password);
      this.router.navigate(['home']);
    } catch (e) {
      console.warn(e);
      const toast = await this.toastController.create({
        message: e.message,
        duration: 2000
      });
      toast.present();
    }

  }

  async registerUser() {
    try {
      const result = await this.fireauth.auth.createUserWithEmailAndPassword(this.user.username, this.user.password);
      this.router.navigate(['home']);
    } catch (e) {
      console.warn(e);
      const toast = await this.toastController.create({
        message: e.message,
        duration: 2000
      });
      toast.present();
    }
  }

  ngOnInit() {
  }

}
