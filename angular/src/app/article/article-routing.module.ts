import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-list/article-edit/article-edit.component';
import { ArticleComponent } from './article/article.component';
import { AuthGuardService } from '../authentication/services/auth-guard.service';


const routes: Routes = [
  { 	  
  path: '',
  component: ArticleComponent,
  children: [ 
  {
    path: 'list',
    component: ArticleListComponent,
        canActivateChild: [ AuthGuardService ],			
    children: [
       {
         path: ':id',
         component: ArticleEditComponent
       }
    ]			
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
