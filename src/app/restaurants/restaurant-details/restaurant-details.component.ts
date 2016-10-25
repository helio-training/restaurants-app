import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { RestaurantsService } from '../../restaurants.service';
import { Restaurant } from '../../shared/restaurant';

@Component({
  selector: 'rs-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: [ './restaurant-details.component.scss' ]
})
export class RestaurantDetailsComponent implements OnInit {

  protected restaurant: Restaurant;

  constructor(public route: ActivatedRoute, public router: Router, public restaurantService: RestaurantsService) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      let id = params[ 'id' ];
      this.restaurantService.getRestaurant(id)
          .then(restaurant => {
            this.restaurant = restaurant;
          });
    });

  }

}
