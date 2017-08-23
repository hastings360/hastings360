
import { DbTalkerService } from './../../db-talker.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Meal } from './../../meal.model';
import { MealImageViewComponent } from './../meal-image-view/meal-image-view.component';
import { MealInfoViewComponent } from './../meal-info-view/meal-info-view.component';

@Component({
  selector: 'app-single-full-view',
  templateUrl: './single-full-view.component.html',
  styleUrls: ['./single-full-view.component.css']
})
export class SingleFullViewComponent implements OnInit {

  public mealNamePassedInByUrl: string;
  public specifiedMeal: Meal;
  public data: any;

  constructor(private route: ActivatedRoute, private dbTalker: DbTalkerService) { 
    route.params.subscribe(params => { this.mealNamePassedInByUrl = params['name']; });
    
    dbTalker.SearchMealByName(this.mealNamePassedInByUrl,this.data,val =>{
      return this.specifiedMeal = val;
    });
  }

  ngOnInit(){
    
  }

  
}
