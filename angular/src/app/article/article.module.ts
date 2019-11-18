import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-list/article-edit/article-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [ArticleListComponent, ArticleEditComponent, ArticleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
