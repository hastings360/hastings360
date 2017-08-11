import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { SingleFullViewComponent } from './meal-displays/single-full-view/single-full-view.component';
import { CategoryViewComponent } from './meal-displays/category-view/category-view.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome'},
  { path: 'welcome', component: WelcomeComponent, data: {title: 'Recipe Finder: Welcome'}},
  { path: 'meal-view/:itemNumber', component: SingleFullViewComponent, data: {title: 'Recipe Finder: Meal View'}},
  { path: 'category-view/:category', component: CategoryViewComponent, data: {title: 'Recipe Finder: Category View'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }