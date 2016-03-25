import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
	  <div class="container">
	    <h1>Globo Gym</h1>
	    <h3 *ngFor="#meal of meals" (click)="mealWasSelected(meal)">
	    	{{ meal.name }}
	    </h3>
	  </div>
  `
})

export class AppComponent { 
	public meal: Meal;
	constructor() {
		this.meals = [
			this.meal = new Meal("Pizza", "I ate an entire medium pizza", 900, 0),
			this.meal = new Meal("Hamburger", "With no bun, lettuce, or cheese", 300, 0),
			this.meal = new Meal("Hotdog", "I threw it on the ground", 0, 0),
			this.meal = new Meal("Fries", "I ate one fry", 15, 0)
		]
	}
}

export class Meal {
	constructor(public name: string, public description: string, public calories: number, public id: number) {

	}
}