import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
	selector: 'meal-display',
	inputs:['meal'],
	template:`
		<div class="row">
			<div class="col-md-2">
				<h4>Name: {{ meal.name }}</h4>
				<ul>
				  <li>Details: {{ meal.description }}
					<li>Calories: {{ meal.calories }}
				</ul>
		  </div>
		</div>
  `
})
export class MealComponent {
	public meal: Meal;
}