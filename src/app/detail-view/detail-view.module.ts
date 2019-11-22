import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DetailViewPage } from './detail-view.page';
import { ComponentsModule } from '../components/components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DetailViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailViewPage]
})
export class DetailViewPageModule {}
