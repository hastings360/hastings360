import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RefundFirstComponent } from './refund-first/refund-first.component';
import { OverviewComponent } from './overview/overview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RefundFirstComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatTabsModule, MatTableModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
