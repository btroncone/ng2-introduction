import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export default class GitHubService{
	constructor(private http: Http){
		
	}
	
	getRepo(){
		return this.http.get('https://api.github.com/users/btroncone').map(resp => {
            return resp.json();
        });
	}
}