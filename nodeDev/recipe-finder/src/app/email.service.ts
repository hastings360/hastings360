import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }

   sendMail(x: FormGroup, y, z): any{
    console.log(y,z);
    
    let a = false;
    let b = false;
    
    /*this.http.post("/api/recipe-mail", x).subscribe(
      (res: Response) => {
        console.log("mail sent successfully");
        a = true;
      },
      (err: any) => {
        console.log(err);
        b = true;
      },
      () => {
        return null;
      }
    );*/
    a = true;
    console.log(a);
    return y = a, z = b;
    
  }

}
