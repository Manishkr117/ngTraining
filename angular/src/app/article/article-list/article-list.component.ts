import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ArticleService } from '../services/article.service';
import { Article } from '../services/article';

@Component({
  templateUrl: './article-list.component.html' ,
  styles: [`
            section{border: 1px solid orange; width: 30em; padding: 1.5em;}
      `]
}) 
export class ArticleListComponent implements OnInit { 
  articles: Observable<Article[]>;
  constructor(      
        private articleService: ArticleService,
        private route: ActivatedRoute,
        private router: Router) {}
  ngOnInit() {
      this.articles = this.articleService.getArticles();
  } 
  goToEdit(article: Article) {
      this.router.navigate([ article.articleId ], { relativeTo: this.route });
  }
}