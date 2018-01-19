import { DbTalkerService } from './db-talker.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MiniSanitizerComponent } from './tools/mini-sanitizer/mini-sanitizer.component';
import { Photo } from './photo.model';
import { PhotoStr } from './photo-str.model';



@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    SearchComponent,
    SearchResultsComponent,
    MiniSanitizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule
  ],
  providers: [DbTalkerService,Photo,PhotoStr],
  bootstrap: [AppComponent]
})
export class AppModule { }
