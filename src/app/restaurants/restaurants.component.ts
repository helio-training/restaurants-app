import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../shared/restaurant';

@Component({
  selector: 'rs-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: [ './restaurants.component.scss' ]
})
export class RestaurantsComponent implements OnInit {

  protected restaurants: Restaurant[];
  protected index: number;

  constructor(public restaurantService: RestaurantsService) {
    this.index = 0;
  }

  ngOnInit() {
    this.restaurantService.getRestaurants(this.index)
        .then(restaurants => {
          this.restaurants = restaurants;
        });
  }

  onNextPage() {
    this.index++;
    this.restaurantService.getRestaurants(this.index)
        .then(restaurants => {
          this.restaurants = restaurants;
        });
  }

  onPrevPage() {
    this.index--;
    if (this.index < 0) {
      this.index = 0;
    }
    this.restaurantService.getRestaurants(this.index)
        .then(restaurants => {
          this.restaurants = restaurants;
        });
  }

}
