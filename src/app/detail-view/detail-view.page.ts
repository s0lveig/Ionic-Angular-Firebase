import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IRoom from '../models/IRoom';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {

  private room: IRoom;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.room = this.router.getCurrentNavigation().extras.state.room as IRoom;
      }
    });
  }

  ngOnInit() {
  }

}
