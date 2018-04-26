import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbTalkerService } from './../db-talker.service';
import { Component, OnInit } from '@angular/core';
//import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import { Time } from '@angular/common';
//import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public loginForm: FormGroup;
  public loginPopOut: boolean = false;

  public loginSubmitting: boolean = false;

  public loggedIn: boolean = false;
  public loginError: boolean = false;

  public loginMessage: string;
  public minutesLeft: number = 30;

  constructor(fb: FormBuilder, private dbTalker: DbTalkerService) {
    this.loginForm = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    //call token verify on startup
    this.tokenCheck(localStorage.getItem('token'));
  }

  loginClick(){
    this.loginPopOut = !this.loginPopOut;
  }

  //Login Verification
  loginSubmit(x:FormGroup):void{
    let loginData = JSON.parse(JSON.stringify(x));
    this.loginSubmitting = true;  //login submit notifier
    
    this.dbTalker.loginSubmit(loginData)
      .then(results => {
        if(results.text() === "Username and/or password not found"){
          this.loginMessage = results.text();
          console.log(this.loginMessage);
          this.loginError = true;
          this.loggedIn = false;
          this.loginSubmitting = false;
        }else{
          this.tokenCheck(results.text());
        }
      })
      .catch(error => console.log(error + "loginSubmit()"));  
  }

  //Used to check both locally stored on startup and when submiting login
  tokenCheck(token):void{
    if(token !== null){
            this.dbTalker.tokenVerify(token)
              .then(verify => {
                if(verify){
                      this.loginSubmitting = false;
                      localStorage.setItem('token', token);
                      this.loginMessage = "Access: " + this.minutesLeft;
                      this.loginError = false;
                      this.loggedIn = true;
                      console.log(this.loginMessage);
                    }else{
                      this.loginSubmitting = false;
                      localStorage.removeItem('token');
                      this.loginMessage = "Login failed or time expired!";
                      this.loginError = true;
                      this.loggedIn = false;
                      console.log(this.loginMessage);
                    }
              })
              .catch(error => console.log(error));
    }else{
      this.loginMessage = "Log in for access";
      console.log(this.loginMessage);
    }
  }

  

}
