import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }

  sendMail(x: FormGroup):void{

    this.http.post("/api/recipe-mail", x).subscribe(
      (res: Response) => {
        console.log("mail sent successfully");
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
