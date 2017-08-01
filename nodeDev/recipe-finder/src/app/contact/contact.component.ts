import { Http,Response } from '@angular/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    public contactForm: FormGroup;
    
  
  constructor(fb: FormBuilder,private email: EmailService){
    this.contactForm = fb.group({
      'name': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['',Validators.compose([Validators.required, Validators.pattern(/.+@.+/)])],
      'phone': ['',Validators.compose([Validators.required, Validators.pattern(/\d{10}/)])],
      'message': ['',Validators.compose([Validators.required, Validators.minLength(15)])]
    })
    
  }

  ngOnInit() {

  }
  
  onSubmit(x:FormGroup):any{
    this.email.sendMail(x);
  }
 
}
