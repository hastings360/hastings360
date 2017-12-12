import { DateFormatter } from '@angular/common/src/pipes/deprecated/intl';
import { Event } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  public inputForm: FormGroup;
  public currentDate = new Date();
  public error = false;
  public received = false;
  public imageUploaded = false;
  public imageToLarge = false;
  public imageToAPI;

  constructor(fb: FormBuilder) {
    this.inputForm = fb.group({
      'imageName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'description': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      'contributor': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'location': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'category': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    
    

  }

  ngOnInit() {
  }

  onSubmit(x: FormGroup): void {

    const todaysDate = this.currentDate.getMonth()+1 + "/" + this.currentDate.getDate() + "/" + this.currentDate.getFullYear(); //Gets date in correct format
    const dataObject = JSON.parse(JSON.stringify(x));

    dataObject.date = todaysDate;
    dataObject.image = this.imageToAPI;

    console.log(dataObject);
    
    
    /*this.email.sendMail(mailObject);
    if(this.email.emailVerify.hasError === true){
      this.error = true;
    }else{
      this.received = true;
    }*/
  }

  // excepts and reads the image file object
  updateImageFile(x: object): void {
    // sets uploaded image to view
    const reader = new FileReader;
    reader.onload = this.imageLoader;

    if (x[0].size < 1000000000) {
      reader.readAsDataURL(x[0]);
      this.imageUploaded = true;
      this.imageToLarge = false;
    }else {
      this.imageToLarge = true;
      this.imageUploaded = false;
      const imageTag = document.getElementById('uploaded');
      imageTag.setAttribute('src', '');
    }

    // save image to imageToAPI
    this.imageToAPI = x[0];
  }


  // Loads image to the img element
  imageLoader(e: any): any {
    const imageTag = document.getElementById('uploaded');
    imageTag.setAttribute('src', e.target.result);
  }

}