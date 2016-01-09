import { Component } from 'angular2/core';

@Component({
	selector: 'home',
	template: `<h1>{{title}}`
})
export default class Home{ 
	public title = "Home View!";
}