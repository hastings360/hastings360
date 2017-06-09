import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MealViewComponent } from './meal-view/meal-view.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MealViewComponent,
    FavoriteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
