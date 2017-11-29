import { Component, OnInit } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-item-wheel',
  templateUrl: './item-wheel.component.html',
  styleUrls: ['./item-wheel.component.css']
})
export class ItemWheelComponent implements OnInit {

    public items: Item[] = [
      {
          imageLocation: '../../assets/your-logo.png',
          itemName: 'Kitchen Appliance',
          cost: '879.00'
      },
      {
        imageLocation: '../../assets/your-logo.png',
        itemName: 'Home Consultation',
        cost: '50.00'
      },
      {
        imageLocation: '../../assets/your-logo.png',
        itemName: '5 Year Warranty',
        cost: '299.00'
      },
      {
        imageLocation: '../../assets/your-logo.png',
        itemName: 'Remodel Planning',
        cost: '149.00'
      },
      {
        imageLocation: '../../assets/your-logo.png',
        itemName: 'Installation Kit',
        cost: '119.00'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
