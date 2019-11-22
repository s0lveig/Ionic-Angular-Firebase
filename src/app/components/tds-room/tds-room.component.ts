import { Component, OnInit, Input } from '@angular/core';
import IRoom from 'src/app/models/IRoom';

@Component({
  selector: 'app-tds-room',
  templateUrl: './tds-room.component.html',
  styleUrls: ['./tds-room.component.scss'],
})
export class TdsRoomComponent implements OnInit {

  @Input() roomData: IRoom;
  @Input() showDescription: boolean;

  constructor() { }

  ngOnInit() {}

}
