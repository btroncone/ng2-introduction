import { Component } from 'angular2/core';

@Component({
	selector: 'away',
	template: `<h2>{{title}}</h2>`
})
export default class Away{
    public title : string = "Away View!";
}