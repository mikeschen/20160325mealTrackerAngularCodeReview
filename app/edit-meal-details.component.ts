import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
	selector: 'edit-meal-details',
	inputs: ['meal'],
	template: `
		<div class="meal-form">
			<h5>Edit Name: {{ meal.name }}</h5>
			<input [(ngModel)]="meal.name" class="input-md meal-form">
			<h5>Edit Details: {{ meal.description }}</h5>
			<input [(ngModel)]="meal.description" class="input-md meal-form">
			<h5>Edit Calories: {{ meal.calories }}</h5>
			<input [(ngModel)]="meal.calories" class="input-md meal-form">
		</div>
	`
})
export class EditMealDetailsComponent {
	public meal: Meal;
}