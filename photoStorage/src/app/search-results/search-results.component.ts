import { Component, OnInit, OnDestroy} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DbTalkerService } from '../db-talker.service';
import { PhotoStr } from '../photo-str.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public photos = new BehaviorSubject<Array<PhotoStr>>([]);

  constructor(private dbTalkerService: DbTalkerService) {}

  ngOnInit():void{
    this.photos = this.dbTalkerService.loadRecent30();
    this.photos.subscribe(data => console.log(data));
  }
  
  reloadRecent30(){
    this.photos = this.dbTalkerService.loadRecent30();
    this.photos.subscribe(data => console.log(data));
  }
}