import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { AddressComponent } from './components/address/address.component';
import { DashboardComponent } from './components/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';


const routes: Routes = [
	{
	   path: '',
	   redirectTo: '/article',
	   pathMatch: 'full'
	},
	{
	   path: '',
	   component: DashboardComponent,
	   canActivate: [ AuthGuardService ],
	   children: [
		 {
		    path: 'article',
		    loadChildren: 'src/app/article/article.module#ArticleModule'
		 },
		 {
		    path: 'address',
		    component: AddressComponent
		 }
	   ]		
	},
	{
	   path: 'login',
	   //loadChildren: 'src/app/authentication/authentication.module#AuthenticationModule'
	   component: LoginComponent
	}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
