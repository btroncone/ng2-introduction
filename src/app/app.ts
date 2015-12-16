import { Component } from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import Home from './Views/home';
import Away from './Views/away';

@Component({
	selector: `app`,
	directives: [ROUTER_DIRECTIVES],
	template: `
		<header>
      		<h1 class="title">{{ title }}</h1>
			<nav>
				<a [routerLink]=" ['Home'] ">Home</a>
				<a [routerLink]=" ['Away'] ">Away</a>
			</nav>
    	</header>
		<main>
			<router-outlet></router-outlet>
		</main>
		<footer>
		    Starter Template
		</footer>
	`
})
@RouteConfig([
	{ path: '/', component: Home, name: 'Home'},
	{ path: '/away', component: Away, name: 'Away'}
])
export class App {
	public title;
	constructor(){
		this.title = "Hello World";
	}
}