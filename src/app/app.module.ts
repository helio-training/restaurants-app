import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { RestaurantsService } from './restaurants.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './restaurants/restaurant-details/restaurant-details.component';
import { RestaurantEditComponent } from './restaurants/restaurant-edit/restaurant-edit.component';
import { RestaurantCreateComponent } from './restaurants/restaurant-create/restaurant-create.component';
import { RestaurantDeleteComponent } from './restaurants/restaurant-delete/restaurant-delete.component';
import { RestaurantFormComponent } from './restaurants/restaurant-form/restaurant-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantDetailsComponent,
    RestaurantEditComponent,
    RestaurantCreateComponent,
    RestaurantDeleteComponent,
    RestaurantFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'restaurants',
        component: RestaurantsComponent
      },
      {
        path: 'restaurants/new',
        component: RestaurantCreateComponent
      },
      {
        path: 'restaurants/:id',
        component: RestaurantDetailsComponent
      },
      {
        path: 'restaurants/:id/edit',
        component: RestaurantEditComponent
      },
      {
        path: 'restaurants/:id/delete',
        component: RestaurantDeleteComponent
      },
      {
        path: '',
        redirectTo: '/restaurants',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [ RestaurantsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
