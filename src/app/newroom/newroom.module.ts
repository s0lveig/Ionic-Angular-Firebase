import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewroomPageRoutingModule } from './newroom-routing.module';

import { NewroomPage } from './newroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewroomPageRoutingModule
  ],
  declarations: [NewroomPage]
})
export class NewroomPageModule {}
