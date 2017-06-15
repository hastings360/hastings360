import { Component, OnInit, Input, Output } from '@angular/core';

import { Meal } from '../../meal.model';

@Component({
  selector: 'app-single-full-view',
  templateUrl: './single-full-view.component.html',
  styleUrls: ['./single-full-view.component.css']
})
export class SingleFullViewComponent implements OnInit {

  @Input() meal: Meal;
  
  
  constructor(){}

  ngOnInit(){

  }

}
