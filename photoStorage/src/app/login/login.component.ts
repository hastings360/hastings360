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

  public loginError: boolean = false;
  public loginForm: FormGroup;
  public loginWindow: boolean = false;
  public loginApproved: boolean = false;
  public loginSubmitting; boolean = false;

  constructor(fb: FormBuilder, private dbTalker: DbTalkerService) {
    this.loginForm = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  loginClick(){
    this.loginWindow = !this.loginWindow;
  }

  loginSubmit(x:FormGroup):void{
    let loginData = JSON.parse(JSON.stringify(x));
    let userName = loginData.userName;
    let pwd = loginData.password;
    
    this.loginSubmitting = true;  //Need to create spinnning element when true
    console.log(loginData);
    this.dbTalker.loginSubmit(loginData)  //Need to return username
      .then( res => console.log(res))
      .catch( error => console.log(error));
  }

}
