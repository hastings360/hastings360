import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DbTalkerService {

  constructor(private http:Http) { }

  //Submit dataObject to API
  submitPhotoToDb(dataToSend: object, y: any):Promise<any>{
    const optionalData = y;
    return this.http
      .post('/api/submit-pic', dataToSend, optionalData)
      .toPromise()
      .catch(this.handleError);
      
  }
  //Hande submit error
  private handleError(error: any): Promise<any>{
    console.error('An error occured at DBTalkerService: submitPhotoToDb()');
    return Promise.reject(error.message || error);
  }

}
