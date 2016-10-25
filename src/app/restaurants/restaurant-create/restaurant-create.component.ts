import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/restaurant';
import { RestaurantsService } from '../../restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rs-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: [ './restaurant-create.component.scss' ]
})
export class RestaurantCreateComponent {

  protected restaurant: Restaurant;

  constructor(public restaurantService: RestaurantsService, public router: Router) {
    this.restaurant = new Restaurant();
  }

  onSaved(restaurant: Restaurant) {
    this.restaurantService.save(restaurant)
        .then(restaurant => {
          this.router.navigate([ '/restaurants', restaurant._id ]);
        });
  }

}
