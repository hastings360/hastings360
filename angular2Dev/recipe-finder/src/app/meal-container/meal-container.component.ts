import { Meal } from './../meal.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-container',
  templateUrl: './meal-container.component.html',
  styleUrls: ['./meal-container.component.css']
})
export class MealContainerComponent {

  public allMeals: Meal[];

  constructor() {
    this.allMeals = [
        new Meal(
        'baked_turkey_wrap.jpg',
        'Baked Turkey Wrap',
        'Baked turkey with asparagus and condiments',
        1,
        'Larry Hastings',
        ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
        '06/06/2017',
        500,
        'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
        "Fowl"),
        new Meal(
        'baked_turkey_wrap.jpg',
        'Baked Turkey Wrap',
        'Baked turkey with asparagus and condiments',
        1,
        'Larry Hastings',
        ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
        '06/06/2017',
        500,
        'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
        "Fowl"),
        new Meal(
        'baked_turkey_wrap.jpg',
        'Baked Turkey Wrap',
        'Baked turkey with asparagus and condiments',
        1,
        'Larry Hastings',
        ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
        '06/06/2017',
        500,
        'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
        "Fowl")
      ];
   }

  

}
