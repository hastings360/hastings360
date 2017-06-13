import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorite.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SingleViewComponent } from './meal-displays/single-view/meal-view.component';
import { BriefViewComponent } from './brief-view/brief-view.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
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