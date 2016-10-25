import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Restaurant } from './shared/restaurant';

const RESTAURANTS_URI = 'https://helio-restaurants.mod.bz/v1/restaurants';


@Injectable()
export class RestaurantsService {

  constructor(public http: Http) {}

  getRestaurants(index = 0): Promise<Restaurant[]> {
    return this.http.get(`${RESTAURANTS_URI}?index=${index}`)
               .toPromise()
               .then(response => response.json() as Restaurant[]);
  }

  getRestaurant(id): Promise<Restaurant> {
    return this.http.get(`${RESTAURANTS_URI}/${id}`)
               .toPromise()
               .then(response => response.json() as Restaurant);
  }

  save(restaurant: Restaurant): Promise<Restaurant> {

    const restaurantCopy = JSON.parse(JSON.stringify(restaurant));

    if (!restaurant._id) {
      return this.http.post(RESTAURANTS_URI, restaurantCopy)
                 .toPromise()
                 .then(response => response.json() as Restaurant);
    } else {
      if (restaurantCopy._id) {
        delete restaurantCopy._id;
      }

      if (restaurantCopy.restaurant_id) {
        delete restaurantCopy.restaurant_id;
      }

      return this.http.put(`${RESTAURANTS_URI}/${restaurant._id}`, restaurantCopy)
                 .toPromise()
                 .then(response => response.json() as Restaurant);
    }
  }

  remove(id) {
    return this.http.delete(`${RESTAURANTS_URI}/${id}`)
               .toPromise()
               .then(response => response.json());
  }
}
