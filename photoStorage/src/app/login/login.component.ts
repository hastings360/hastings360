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
  

  constructor(fb: FormBuilder, private dbTalker: DbTalkerService) {
    this.loginForm = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loginVerify(localStorage.token);
  }

  loginClick(){
    this.loginPopOut = !this.loginPopOut;
  }

  loginSubmit(x:FormGroup):void{
    let loginData = JSON.parse(JSON.stringify(x));
    let userName = loginData.userName;
    let pwd = loginData.password;
    
    this.loginSubmitting = true;  //login submit notifier
    
    this.dbTalker.loginSubmit(loginData)
      .then(results => {
        this.loginSubmitting = false; 
        localStorage.setItem('token',results.text());
        
        this.loginVerify(localStorage.token);
      })
      .catch(error => console.log(error + "loginSubmit()"));  
  }

  loginVerify(token:string):void{
    let data = {token:token};
    this.dbTalker.loginVerify(data)
      .then(results => {
        //this.loggedIn = results._body;
      })
      .catch(error => console.log(error = "loginVerify()"))
  }

}
