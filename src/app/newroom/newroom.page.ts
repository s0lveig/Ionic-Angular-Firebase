import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Camera, CameraOptions} from "@ionic-native/camera/ngx";
import IRoom from '../models/IRoom';
import { v4 as uuid } from "uuid";
import { firestore } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newroom',
  templateUrl: './newroom.page.html',
  styleUrls: ['./newroom.page.scss'],
})
export class NewroomPage implements OnInit {
  toastController: any;
  private cameraPreview: string = "";

  constructor(
    private camera: Camera,
    private firestorage: AngularFireStorage,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  private room = { title: "", description: "", size: 0, address: "", latitude: 0, longitude: 0}

  ngOnInit() {
  }

  async takePicture() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    try {
      const imageData = await this.camera.getPicture(cameraOptions);
      this.cameraPreview = imageData;
      
    } catch(e) {
      console.log("Error: " + e);
    }
  }

  async postToFirebase() {
    let uploadedImageUrl = await this.uploadImageToFirestorage();
    const roomsCollectionRef = this.firestore.collection<IRoom>("rooms");

    await roomsCollectionRef.add({
      id: uuid(),
      host: this.room.title, 
      booked: false,
      description: this.room.description,
      image: uploadedImageUrl,
      rating: 5,
      size: this.room.size,
      address: this.room.address,
      location: new firestore.GeoPoint(this.room.latitude, this.room.longitude)
    })

    this.router.navigate(['feed']);

  }
  
  async uploadImageToFirestorage() {
    const fileName = `tds-${uuid()}.png`;
    const firestorageFileref = this.firestorage.ref(fileName);
    const uploadTask = firestorageFileref.putString(this.cameraPreview, 'base64', {contentType: 'image.png'});
    await uploadTask.then();
    return firestorageFileref.getDownloadURL().toPromise();
  }

}
