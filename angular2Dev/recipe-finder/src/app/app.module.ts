import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { MealViewComponent } from './meal-view/meal-view.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ChickenComponent } from './chicken/chicken.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MealContainerComponent } from './meal-container/meal-container.component';
import { BriefViewComponent } from './brief-view/brief-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MealViewComponent,
    FavoriteListComponent,
    CategoriesComponent,
    ChickenComponent,
    WelcomeComponent,
    MealContainerComponent,
    BriefViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }