import { Component, OnInit } from '@angular/core';

import { Meal } from '../../meal.model';

@Component({
  selector: 'app-single-full-view',
  templateUrl: './single-full-view.component.html',
  styleUrls: ['./single-full-view.component.css']
})
export class SingleFullViewComponent implements OnInit {

  singleMeal: Meal;
    

  constructor(){ 
      
  }

  ngOnInit(){
    
  }

  
}
