import { Meal } from './meal.model';

import { Injectable } from '@angular/core';


@Injectable()
export class DbTalkerService {

  public dbMeals: Meal[] = [
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
          'chicken',
          29
          ),
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
          'chicken',
          59
          ),
        new Meal(
          'baked_turkey_wrap.jpg',
          'Baked Chicken Wrap',
          'Baked turkey with asparagus and condiments',
          2,
          'Larry Hastings',
          ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
          '06/06/2017',
          500,
          'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
          'turkey',
          35
          ),
        new Meal(
          'baked_turkey_wrap.jpg',
          'Baked Goose Wrap',
          'Baked turkey with asparagus and condiments',
          3,
          'Larry Hastings',
          ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
          '06/06/2017',
          500,
          'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
          'chicken',
          5
          ),
        new Meal(
          'baked_turkey_wrap.jpg',
          'Chincilla Crap',
          'Baked turkey with asparagus and condiments',
          4,
          'Larry Hastings',
          ['turkey thigh',' asparagus',' mayonaise',' chow chow',' your choice of wrap', ' cajun seasoning'],
          '06/06/2017',
          500,
          'Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!     Bake turkey in cast iron pan for about an hour and 15 minutes.  Remove turkey, and place pan over medium heat.  Add asparagus to left over contents to instill the flavors from the cooked turkey onto the asparagus.  This takes about 10 minutes.  While doing this, add a little mayonaise and chow chow to the wrap.  Cut off small pieces of the turkey and add them to the wrap as well.  Once asparagus is done, add it whole or cut it up for easier "mouth fiting." That\'s it, enjoy!',
          'chicken',
          2
          )
      ];
  
  
  constructor(){ 
     this.pullInMeals();//pulls in meal data from database on initialization
  }

  pullInMeals(){};

  //future http services to talk to database, both in-going and outgoing.  For now, this just provides a development array of meals in constructor
  searchCategory(){};
  searchMeal(){};
}