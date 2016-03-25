import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

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