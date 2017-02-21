import { extractStyleUrls } from '@angular/compiler/src/style_url_resolver';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HeroDetailComponent } from './hero-detail.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: '../heroes.component.html',
  styleUrls: ['../heroes.component.css']
})

export class HeroesComponent implements OnInit { 
  
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService, 
    private router: Router){}

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.getHeroes();
  }

    onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


