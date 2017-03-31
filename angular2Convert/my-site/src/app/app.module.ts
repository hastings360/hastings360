import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HeaderSmallComponent } from './header-small/header-small.component';
import { RelaxWorkspaceComponent } from './relax-workspace/relax-workspace.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    HeaderSmallComponent,
    RelaxWorkspaceComponent,
    CalculatorComponent,
    ChecklistComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
