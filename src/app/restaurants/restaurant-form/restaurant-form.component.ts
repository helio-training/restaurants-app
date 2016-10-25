import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from '../../shared/restaurant';

@Component({
  selector: 'rs-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: [ './restaurant-form.component.scss' ]
})
export class RestaurantFormComponent implements OnInit {

  @Input()
  protected restaurant: Restaurant;

  @Output()
  protected saved = new EventEmitter<Restaurant>();


  ngOnInit() {
    if (!this.restaurant) {
      this.restaurant = new Restaurant();
    }
  }

  onSubmit() {
    this.saved.emit(this.restaurant);
  }

}
