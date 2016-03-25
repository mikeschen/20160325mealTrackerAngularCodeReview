import { Component, EventEmitter } from 'angular2/core';

@Component({
	selector: 'meal-display',
	inputs:['meal'],
	template:`
		<h3>{{ meal.name }}</h3>
  `
})

export class MealComponent {
	public meal: Meal;
}

@Component({
	selector: 'meal-list',
	inputs: ['mealList'],
	outputs: ['onMealSelect'],
	directives: [MealComponent],
	template:`
		<meal-display *ngFor="#currentMeal of mealList"
			(click)="mealClicked(currentMeal)"
			[class.selected]="currentMeal === selectedMeal"
			[meal]="currentMeal">
		</meal-display>
	`
})

export class MealListComponent {
	public mealList: Meal[];
	public onMealSelect: EventEmitter<Meal>;
	public selectedMeal: Meal;
	constructor() {
		this.onMealSelect = new EventEmitter();
	}
	mealClicked(clickedMeal: Meal): void {
		console.log('child', clickedMeal);
		this.selectedMeal = clickedMeal;
		this.onMealSelect.emit(clickedMeal);
	}
}


@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
	  <div class="container">
	    <h1>Globo Gym</h1>
	    <meal-list 
		    [mealList]="meals"
		    (onMealSelect)="mealWasSelected($event)">
	    </meal-list>
	  </div>
  `
})

export class AppComponent { 
	public meals: Meal[];
	constructor() {
		this.meals = [
			new Meal("Pizza", "I ate an entire medium pizza", 900, 0),
			new Meal("Hamburger", "With no bun, lettuce, or cheese", 300, 0),
			new Meal("Hotdog", "I threw it on the ground", 0, 0),
			new Meal("Fries", "I ate one fry", 15, 0)
		];
	}
	mealWasSelected(clickedMeal: Meal): void {
		console.log('parent', clickedMeal);
	}
}

export class Meal {
	constructor(public name: string, public description: string, public calories: number, public id: number) {

	}
}