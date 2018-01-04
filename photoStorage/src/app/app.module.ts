import { DbTalkerService } from './db-talker.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SanitizerComponent } from './tools/sanitizer/sanitizer.component';
import { Photo } from './photo.model';
import { PhotoStr } from './photo-str.model';



@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    SearchComponent,
    SearchResultsComponent,
    SanitizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule
  ],
  providers: [DbTalkerService,Photo,PhotoStr,SearchResultsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
