import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
	selector: 'edit-meal-details',
	inputs: ['meal'],
	template: `
		<h3>Edit Name: {{ meal.name }}
			Edit Description: {{ meal.description }}
			Edit Calories: {{ meal.calories }}
	`
})

export class EditMealDetailsComponent {
	public meal: Meal;
}