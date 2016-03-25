import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Skeleton Angular2 App!</h1>
  </div>
  `
})

export class AppComponent { 

}

export class Meal {
	constructor(public food: string, public description: string, public calories: number, public id: number) {

	}
}