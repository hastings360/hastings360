import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SingleFullViewComponent } from './meal-displays/single-full-view/single-full-view.component';
import { BriefViewComponent } from './meal-displays/brief-view/brief-view.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TopTenCategoriesComponent } from './top-ten-categories/top-ten-categories.component';
import { CategoryViewComponent } from './meal-displays/category-view/category-view.component';
import { DbTalkerService } from './db-talker.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BriefViewComponent,
    FavoritesComponent,
    SingleFullViewComponent,
    TopTenCategoriesComponent,
    CategoryViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [Title, DbTalkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }