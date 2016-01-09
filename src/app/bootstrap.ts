import {bootstrap} from 'angular2/platform/browser';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import GitHubService from './Services/github';
import {App} from './app';
export function main() {
  return bootstrap(App, [
    // These are dependencies of our App
      HTTP_PROVIDERS,
      ROUTER_PROVIDERS,
      ELEMENT_PROBE_PROVIDERS,
      GitHubService
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);