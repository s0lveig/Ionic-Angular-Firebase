import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewroomPage } from './newroom.page';

const routes: Routes = [
  {
    path: '',
    component: NewroomPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewroomPageRoutingModule {}
