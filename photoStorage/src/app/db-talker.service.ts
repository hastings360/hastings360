import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

import { Photo } from './photo.model';


@Injectable()
export class DbTalkerService {


  public recent30: Observable<Photo[]> = new Observable();
  
  constructor(public http:Http) {
    this.recent30 = this.loadRecent30();
  }

 
  loadRecent30():Observable<Array<Photo>>{
    return this.http.get('/api/latest-photos')
      .map(res => res.json())
      .catch(error => {console.log(error); return error});
  }
 
 
  //Submit dataObject to API
  submitPhotoToDb(objectToSend: object):Promise<any>{
    return this.http.post('/api/submit-pic', objectToSend)
      .toPromise()
      .catch(this.handleError);
      //.then(() => this.runDbQueryForNewData());    Reinitialize Observable hopfully???
  }
  //Hande submit error
  private handleError(error: any): Promise<any>{
    console.error('An error occured at DBTalkerService: submitPhotoToDb()');
    return Promise.reject(error.message || error);
  }

}