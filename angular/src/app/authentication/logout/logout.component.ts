import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../services/user';
import { AuthService } from '../services/auth.service';


@Component({
   selector: 'logout',	
   template: `Logged In: {{loggedInUser.username}} | {{loggedInUser.role}} | 
           <button class="btn btn-warning" input='input' (click)="logout()">Logout</button>
	`
})
export class LogoutComponent implements OnInit { 
	loggedInUser: User;
    constructor(private authService: AuthService, private router: Router) {
	}
    ngOnInit() {
       this.loggedInUser = this.authService.getLoggedInUser();
    }		
	logout() {
	   this.authService.logoutUser();
       this.router.navigate([ this.authService.getLoginUrl() ]);	
	}
}
    