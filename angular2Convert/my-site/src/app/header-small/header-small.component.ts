import { AfterViewInit, Component } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-header-small',
  templateUrl: './header-small.component.html',
  styleUrls: ['./header-small.component.css']
})
export class HeaderSmallComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $('#menu-button').click(function(){
      $('#nav-list').toggleClass('hide');
      $('#nav-pop').toggleClass('nav-pop-out');
    });
  }

}
