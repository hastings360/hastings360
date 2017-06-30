import { Component, AfterViewInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $('.music').click(function(){
      $('#pop-iframe').toggleClass('hide');
    })
  }

}
