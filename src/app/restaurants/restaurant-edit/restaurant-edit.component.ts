import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RestaurantsService } from '../../restaurants.service';
import { Restaurant } from '../../shared/restaurant';

@Component({
  selector: 'rs-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: [ './restaurant-edit.component.scss' ]
})
export class RestaurantEditComponent implements OnInit {

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

  onSaved(restaurant) {
    this.restaurantService.save(restaurant)
        .then(restaurant => {
          this.router.navigate([ '/restaurants', restaurant._id ]);
        });
  }

}
