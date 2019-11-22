import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import IRoom from '../models/IRoom';
import { first} from 'rxjs/operators';
import { v4 as uuid } from "uuid";
import { ParseError } from '@angular/compiler';
import { firestore } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newroom',
  templateUrl: './newroom.page.html',
  styleUrls: ['./newroom.page.scss'],
})
export class NewroomPage implements OnInit {
  toastController: any;

  constructor(
    private firestorage: AngularFireStorage,
    private firestore: AngularFirestore,
    private fireauth: AngularFireAuth,
    private router: Router
  ) {}

  private todo = { title: "", description: ""}

  ngOnInit() {
  }

  async postToFirebase() {
    //const uploadedImageUrl = await this.uploadImageToFirestorage();
    const roomsCollectionRef = this.firestore.collection<IRoom>("rooms");
    const loggedInUser = await this.fireauth.authState.pipe(first()).toPromise();
    

    await roomsCollectionRef.add({
      host: this.todo.title, 
      booked: false,
      description: this.todo.description,
      image: "https://meshnorway.com/wp-content/uploads/2018/11/09A7016.jpg",
      rating: 5,
      size: 20,
      location: new firestore.GeoPoint(59.9, 10.5)
    })

    this.router.navigate(['feed']);

  }
/*
  private todo = { title: "", description: ""}
logForm() {
    console.log(this.todo)
  }


  async logForm() {
    const todoTitle = await this.todo.title
    const todoDesc = await this.todo.description
    console.log(todoTitle)
  }*/

  /*
  async uploadImageToFirestorage() {
    const fileName = `tds-${uuid()}.png`;
    const firestorageFileref = this.firestorage.ref(fileName);
    const uploadTask = firestorageFileref.putString(this.cameraPreview, 'base64', {contentType: 'image.png'});
    await uploadTask.then();
    return firestorageFileref.getDownloadURL().toPromise();
    //uploadTask.percentageChanges
  }
*/
}
