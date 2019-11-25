import { Component, OnInit, ReflectiveKey } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import IRoom from '../models/IRoom';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker,Environment} from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {
  map: GoogleMap;
  private room: IRoom;
  public bookedRoomArray = [];

  constructor(
    private platform: Platform, 
    private route: ActivatedRoute, 
    private firestore: AngularFirestore, 
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.room = this.router.getCurrentNavigation().extras.state.room as IRoom;
      }
    });
  }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAoHMGwUhoVmLKNocFa0OY-eLqdjSJzwHs',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAoHMGwUhoVmLKNocFa0OY-eLqdjSJzwHs'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: this.room.location.latitude,
           lng: this.room.location.longitude
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    
    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.room.location.latitude,
        lng: this.room.location.longitude
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
    
  }

  /*
  getLocation() {
    var onSuccess = function(position) {
      alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n');
  };

  // onError Callback receives a PositionError object
  //
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }

    this.geolocation.getCurrentPosition(onSuccess, onError).then((resp) => {

    }).catch((error) => {
      console.log('Error getting your location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    });
  }*/

  bookRoom() {
    this.room.booked = true;
    alert('room booked!');

    //const roomsCollectionRef = this.firestore.collection<IRoom>("rooms");
    //const rooms = roomsCollectionRef.snapshotChanges();

    /*
    let room = roomRef.snapshotChanges().forEach(a => a.map(a => {
      const data = a.payload.doc.data() as IRoom;
      const id = a.payload.doc.id;
      return id
    }))
    await roomsCollectionRef.doc(updateRoom.id).update({
      booked: true
    })
    */

    /*
    .valueChanges({
      id: this.room.id,
      booked: true
    })
    */
    
  }
}
