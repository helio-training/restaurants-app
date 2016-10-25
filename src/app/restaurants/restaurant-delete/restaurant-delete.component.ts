import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RestaurantsService } from '../../restaurants.service';
import { Restaurant } from '../../shared/restaurant';

@Component({
  selector: 'rs-restaurant-delete',
  templateUrl: './restaurant-delete.component.html',
  styleUrls: [ './restaurant-delete.component.scss' ]
})
export class RestaurantDeleteComponent implements OnInit {

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

  onDelete(restaurant) {
    const { _id } = restaurant;

    this.restaurantService.remove(_id)
        .then(result => {
          this.router.navigate([ '/restaurants' ]);
        })
  }

}
