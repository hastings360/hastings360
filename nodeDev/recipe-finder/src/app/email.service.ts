import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }

  sendMeal(x: FormGroup):void{

    this.http.post("/api/recipe-contribute", x).subscribe(
      (res: Response) => {
        console.log("contribution sent successfully");
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        return null;
      }
    );
  }

  sendMail(x: FormGroup):void{

    this.http.post("/api/recipe-contact", x).subscribe(
      (res: Response) => {
        console.log("contact sent successfully");
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        return null;
      }
    );
  }

}
