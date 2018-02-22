import { Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DbTalkerService } from './db-talker.service';
import { PhotoStr } from './photo-str.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public photos = new BehaviorSubject<PhotoStr[]>([]);
  public databaseError: boolean = false;

  constructor(private dbTalker:DbTalkerService){
    this.photos = this.dbTalker.loadRecent30();
  }

  newPicCreated(event:boolean):void{
    if(event === true){
      this.photos = this.dbTalker.loadRecent30();
    }else{
      console.log("Error: false showing on app-root.newPicCreated when it shouldn't");
    }
  }

  newPhotoQuery(event:string):void{
    this.photos = this.dbTalker.loadSearch30(event);
  }

}
