import { Component, OnInit, Input} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PhotoStr } from '../photo-str.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() photos = new BehaviorSubject<PhotoStr[]>([]);

  constructor() {}

  ngOnInit(){}
  
}