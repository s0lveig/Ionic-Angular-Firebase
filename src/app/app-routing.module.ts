import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'feed',
  loadChildren: './feed/feed.module#FeedPageModule',
...canActivate(redirectUnauthorizedTo(['login']))
},
{ path: 'logout',
loadChildren: './login/login.module#LoginPageModule'
},
  { path: 'login',
  loadChildren: './login/login.module#LoginPageModule',
...canActivate(redirectLoggedInTo(['home']))
},
  { path: 'newroom', loadChildren: './newroom/newroom.module#NewroomPageModule' },
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },
  {
    path: 'detail-view',
    loadChildren: () => import('./detail-view/detail-view.module').then( m => m.DetailViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
