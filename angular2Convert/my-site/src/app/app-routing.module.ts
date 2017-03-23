
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent, data: {title: 'Larry Hastings'}},
  { path: 'contact', component: ContactComponent, data: {title: 'Contact Info'}},
  { path: 'portfolio', component: PortfolioComponent, data: {title: 'PortfolioComponent'}},
  { path: 'about', component: AboutComponent, data: {title: 'AboutComponent'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
