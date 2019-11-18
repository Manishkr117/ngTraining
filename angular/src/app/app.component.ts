import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>hi</p>
	<div [ngClass] = "'parent-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `
})
export class AppComponent { 
}
