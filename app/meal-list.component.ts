import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
	selector: 'meal-list',
	inputs: ['mealList'],
	outputs: ['onMealSelect'],
	pipes: [CaloriePipe],
	directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
	template: `
	<select (change)="onChange($event.target.value)">
  	<option value="all" selected="selected">Show All</option>
  	<option value="high">Show Meals Over 300 Cal.</option>
  	<option value="low">Show Meals Under 300 Cal.</option>
	</select>
	<br>Total Calories Today: {{ totalCalories() }}
		<meal-display *ngFor="#currentMeal of mealList | calorie:filterCalorie"
			(click)="mealClicked(currentMeal)"
			[class.selected]="currentMeal === selectedMeal"
			[meal]="currentMeal">
		</meal-display>
		<edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
		</edit-meal-details>
		<new-meal (onSubmitNewMeal)="addMeal($event)"></new-meal>
	`
})

export class MealListComponent {
	public mealList: Meal[];
	public onMealSelect: EventEmitter<Meal>;
	public selectedMeal: Meal;
	public filterCalorie: string = "all";
	constructor() {
		this.onMealSelect = new EventEmitter();
	}
	mealClicked(clickedMeal: Meal): void {
		this.selectedMeal = clickedMeal;
		this.onMealSelect.emit(clickedMeal);
	}
	addMeal([name, details, calories]): void {
		this.mealList.push(
			new Meal(name, details, calories, this.mealList.length)
		);
	}
	onChange(filterOption) {
		this.filterCalorie = filterOption;
	}
	totalCalories() {
		public var total: number = 0;
		for (var i = 0; i < this.mealList.length; i++) {
			total = this.mealList[i].calories + total;
		}
		return total;
	}
}