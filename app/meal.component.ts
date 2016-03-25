import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
	selector: 'meal-display',
	inputs:['meal'],
	template:`
		<h3>{{ meal.name }}</h3>
		<ul>
		  <li>{{ meal.description }}
			<li>{{ meal.calories }}
		</ul>
  `
})

export class MealComponent {
	public meal: Meal;
}