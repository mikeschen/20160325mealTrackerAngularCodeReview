import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
	selector: 'new-meal',
	outputs: ['onSubmitNewMeal'],
	template: `
	  <div class="meal-form">
	  	<div class="row">
				<div class="col-md-2">
			    <h4>Add Meal:</h4>
			    <input placeholder="Name" class="input-md" #newName>
			    <input placeholder="Details" class="input-md" #newDetails>
			    <input placeholder="Calories" class="input-md" #newCalories>
			    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-warning add-button">Add</button>
			  </div>
			</div>
	  </div>
	`
})
export class NewMealComponent {
	public onSubmitNewMeal: EventEmitter<string[]>;
	constructor(){
		this.onSubmitNewMeal = new EventEmitter();
	}
	addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
		this.onSubmitNewMeal.emit([userName.value,userDetails.value, userCalories.value]);
		userName.value = "";
		userDetails.value = "";
		userCalories.value = "";
	}
}
