import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DbTalkerService } from '../db-talker.service';
import { Photo } from '../photo.model';
import { FromObservable } from 'rxjs/observable/FromObservable';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnChanges {

  public photos: Photo[];

  constructor(dbTalkerService: DbTalkerService) { 
    dbTalkerService.recent30.subscribe(data => data = this.photos);
  }

  ngOnChanges(changes: SimpleChanges) {
    changes['photos']
  }

}
