import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/Rx";

import { PhotoStr } from './photo-str.model';

@Injectable()
export class DbTalkerService {

  constructor(public http:Http) { }

  loadRecent30(): any{
    return this.http.get('/api/latest-photos')
      .map(res => res.json())
      .catch(error => {console.log(error); return error});
  }

  //Submit dataObject to API
  submitPhotoToDb(objectToSend: object):Promise<any>{
    return this.http.post('/api/submit-pic', objectToSend)
      .toPromise()
      .catch(this.handleError);
  }
  //Handle submit error
  private handleError(error: any): Promise<any>{
    console.error('An error occured at DBTalkerService: submitPhotoToDb()');
    return Promise.reject(error.message || error);
  }

}