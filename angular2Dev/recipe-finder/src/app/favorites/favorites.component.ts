import { Component, OnInit, Input, Output } from '@angular/core';

import { Meal } from './../meal.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  @Input() fullList: Meal[];

  constructor(){ }

  ngOnInit(){
      this.favoritesSelector(this.fullList);//calls the function to extract top three favorite meals   
  }

      public favorites: Meal[];//top three favorites after extracted

      //extracts top three meals based on likes
      favoritesSelector(x: Meal[]): any{
          let likesArray = [];//holds highest three likes
          for(let y in x){
            likesArray.push(x[y].likes);
          }
          likesArray.sort(function(a,b){return b-a});
          likesArray.splice(3);
          
          let favoritesArray = [];//holds final array value after top three have been spliced out
          for(let y in x){
            switch(x[y].likes){
              case likesArray[0]:
                  break;
              case likesArray[1]:
                  break;
              case likesArray[2]:
                  break;
              default:
                  x.splice(Number(y),1);
                  favoritesArray = x;
            }
          }
          return this.favorites = favoritesArray.sort(function(a,b){return b-a});//sorts and exports final top three favorties to public variable favorites
      };

}
