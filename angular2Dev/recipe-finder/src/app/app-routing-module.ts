import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { ChickenComponent } from './chicken/chicken.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome'},
  { path: 'welcome', component: WelcomeComponent, data: {title: 'Recipe Finder: Welcome'}},
  { path: 'chicken', component: ChickenComponent, data: {title: 'Recipe Finder: Chicken'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }