
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';


var firebaseConfig = {
  apiKey: "AIzaSyBI1upuNQgRaE6Z0rEaXSm_zIl1eQd_nCM",
  authDomain: "tds200-h19-5016.firebaseapp.com",
  databaseURL: "https://tds200-h19-5016.firebaseio.com",
  projectId: "tds200-h19-5016",
  storageBucket: "tds200-h19-5016.appspot.com",
  messagingSenderId: "130075775494",
  appId: "1:130075775494:web:f723381123f625f60d6987"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Initialiserer Firebase i prosjektet vårt
    AngularFirestoreModule, // Firestore
    AngularFireAuthModule, // Auth
    AngularFireStorageModule, // Storage
    AngularFireAuthGuardModule // Router guards

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
