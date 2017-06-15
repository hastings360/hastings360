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


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BriefViewComponent,
    FavoritesComponent,
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