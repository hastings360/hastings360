import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 emailMe(name: HTMLInputElement, emil: HTMLInputElement, number: HTMLInputElement, message: HTMLInputElement):boolean{
      /*email myself*/
    return false;
 }


  constructor(){}

  ngOnInit() {
  }
  
}
