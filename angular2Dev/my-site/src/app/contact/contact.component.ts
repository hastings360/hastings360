import { Component, OnInit, } from '@angular/core';

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(fb: FormBuilder){
    this.contactForm = fb.group({
        'name': ['',Validators.required],
        'email': ['Please enter email address',Validators.required],
        'phone': ['Please enter your phone number',Validators.required],
        'message': ['Please leave a message',Validators.required]
    });

  }

  ngOnInit() {
  }
  
  onSubmit(x: FormGroup):void{
    console.log(x);
  }
}
