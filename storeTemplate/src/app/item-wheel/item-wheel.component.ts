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
          imageLocation: '../../assets/outdoor-appliance.jpg',
          itemName: 'Outdoor Appliance',
          cost: '279.00'
      },
      {
        imageLocation: '../../assets/home-consultation.jpg',
        itemName: 'Home Consultation',
        cost: '50.00'
      },
      {
        imageLocation: '../../assets/warranty.jpg',
        itemName: '5 Year Warranty',
        cost: '299.00'
      },
      {
        imageLocation: '../../assets/planning.jpg',
        itemName: 'Planning',
        cost: '150.00 and up'
      },
      {
        imageLocation: '../../assets/installation.jpg',
        itemName: 'Installation',
        cost: '100.00 and up'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
