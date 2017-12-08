import { Component, OnInit } from '@angular/core';

import { Testimonial } from '../testimonial';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  //Create your testimonials info below

  public testimonials: Testimonial[] = [
    {
        quote: '"The service here is the best and they have everyhting you need"',
        name: "Lawrence Taylor",
        title: "General Manger at Giants' Hotel"
    },
    {
        quote: '"From consultation to planning to installation.  Everything was taken care of in a professional manner"',
        name: "Kurt Douglas",
        title: "Local Home Owner"
    },
    {
        quote: '"The owner, Michael Jordan, helped me through every step of the process from getting the correct supplies to giving me tips on how to proceed"',
        name: "Willie Nelson",
        title: "City Planner"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
