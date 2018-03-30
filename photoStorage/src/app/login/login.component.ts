import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbTalkerService } from './../db-talker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginActive: boolean = false;
  public loginSuccess: boolean;

  constructor(fb: FormBuilder, private dbTalker: DbTalkerService) {
    this.loginForm = fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  loginClick(){
    this.loginActive = !this.loginActive;
  }

  loginSubmit(x:FormGroup):boolean{
    let y = JSON.parse(JSON.stringify(x));
    let userName = y.userName;
    let pwd = y.password;
    
    
    
    
    
    
    this.loginForm.reset();//resets input field

    return this.loginSuccess = true;
  }
}
