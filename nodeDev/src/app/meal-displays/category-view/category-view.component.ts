import { DbTalkerService } from './../../db-talker.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { Meal } from './../../meal.model';
import { BriefViewComponent } from './../brief-view/brief-view.component';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  public category: string;
  public meals: Meal[];
  public allCategoryItems: Meal[];

  constructor(private route: ActivatedRoute, private dbTalker: DbTalkerService) { 
    
    
    this.meals = this.dbTalker.dbMeals;
    route.params.subscribe(params => { this.category = params['category']; });
    this.pullCategory(this.meals,this.category);  
     
  }

  ngOnInit() { 
    
    
  }

  
  pullCategory(x, y){
    let parsedArray = [];
    for(let i in x){
      if(x[i].category === y){
        parsedArray.push(x[i]);
      }
    }
    console.log(parsedArray);
    return this.allCategoryItems = parsedArray;
  }

}
