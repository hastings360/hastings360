import { DbTalkerService } from './../../db-talker.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Meal } from '../../meal.model';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  itemNumber: string;
  meals: Meal[];

  constructor(private route: ActivatedRoute, private dbTalker: DbTalkerService) { 
    route.params.subscribe(params => { this.itemNumber = params['id']; })
    this.dbTalker.dbMeals = this.meals;
  }

  ngOnInit() {
  }

}
