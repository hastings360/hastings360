import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbTalkerService } from './../db-talker.service';
import { Component, OnInit } from '@angular/core';
//import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
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
  

  constructor(fb: FormBuilder, private dbTalker: DbTalkerService) {
    this.loginForm = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    //Verify token on startup if present
    if(localStorage.getItem('token')){
      this.tokenCheck(localStorage.token);
    }   
  }

  loginClick(){
    this.loginPopOut = !this.loginPopOut;
  }

  //Login Verification
  loginSubmit(x:FormGroup):void{
    let loginData = JSON.parse(JSON.stringify(x));
    let userName = loginData.userName;
    let pwd = loginData.password;
    
    this.loginSubmitting = true;  //login submit notifier
    
    this.dbTalker.loginSubmit(loginData)
      .then(results => {
        if(results.text() === "Username and/or password not found"){
          this.loginMessage = "Username and/or password not found";
          console.log(this.loginMessage);
        }else{
          this.tokenCheck(results.text());
        }
      })
      .catch(error => console.log(error + "loginSubmit()"));  
  }

  //Used to check both locally stored on startup and when submiting login
  tokenCheck(token):void{
    this.tokenVerify(token)
      .then(verify => {
        if(verify){
              this.loginSubmitting = false;
              localStorage.setItem('token', token);
              this.loginMessage = "Logged in sucessfully";
              this.loginError = false;
              this.loggedIn = true;
              console.log(this.loginMessage);
            }else{
              this.loginSubmitting = false;
              localStorage.removeItem('token');
              this.loginMessage = "Invalid login: Please contact admin for access";
              this.loginError = true;
              this.loggedIn = false;
              console.log(this.loginMessage);
            }
      })
      .catch(error => console.log(error));
  }

  //Verifies all tokens
  tokenVerify(x:string):Promise<boolean>{
    let data = {token:x};
    return this.dbTalker.tokenVerify(data)
      .then(results => {
        if(results.text() === 'yes'){
          console.log("Token verification Successful");
          return true;
        };
        if(results.text() === 'no'){
          return false;
        };
      })
      .catch(error => {
        console.log(error + " loginVerify()");
        return false;
      });
  }

}
