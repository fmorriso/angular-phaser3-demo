import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'game', component: GameComponent, data: { label: 'Game' } },
  { path: 'about', component: AboutComponent, data: { label: 'About' } },
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

const routeOptions: ExtraOptions = {
  enableTracing: false
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routeOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
