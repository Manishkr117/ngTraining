import { Component } from '@angular/core';
@Component({
  template: `
 	<nav class="navbar navbar-inverse" [ngClass] = "'parent-menu'">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Articles</a>
    </div>
    <ul class="nav navbar-nav">
			<li><a routerLink="/article" routerLinkActive="active" >Article</a></li>
			<li><a routerLink="/address" routerLinkActive="active">Address</a></li>
 
    </ul>
  </div>
</nav>
  
<div class="container">
	<logout></logout>
	<div [ngClass] = "'parent-container'">	
		<router-outlet></router-outlet>	
	</div>
</div>

  `
})
export class DashboardComponent { 
}