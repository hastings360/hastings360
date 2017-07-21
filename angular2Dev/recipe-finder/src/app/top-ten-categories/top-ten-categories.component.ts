import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-ten-categories',
  templateUrl: './top-ten-categories.component.html',
  styleUrls: ['./top-ten-categories.component.css']
})
export class TopTenCategoriesComponent implements OnInit {

  public categoryArray = [
    'Turkey',
    'Chicken',
    'Goat',
    'Pig',
    'Vegetarian',
    'Egg Related',
    'Beef',
    'Misc'
  ];

  constructor() { }

  ngOnInit() { console.log(this.categoryArray)}

}
