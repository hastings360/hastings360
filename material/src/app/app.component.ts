import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'material';

  public state = {
    refundFirstApproval: false,
    refundSecondApproval: true
  };

  ngOnInit() {
    this.getState();

  }

  // Call service and get state
  getState (): void {
    // some service
    //this.state.refundFirstApproval = true;
    //this.state.refundSecondApproval = false;
  }

}
