import { Component } from 'angular2/core';

@Component({
	selector: 'home',
	template: `<h2>{{title}}</h2>`
})
export default class Home{ 
	public title = "Home View!"
}