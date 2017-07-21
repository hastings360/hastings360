import { Meal } from './../meal.model';
import { DbTalkerService } from './../db-talker.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public meals: Meal[];

  constructor(private dbTalker: DbTalkerService){ 
      this.meals = this.dbTalker.dbMeals;
  }
  
  ngOnInit() {
  }

  
}
