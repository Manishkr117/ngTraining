import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators'

import { Article } from './article';

const ARTICLES = [
  new Article(1, 'Core Java : OOP & Fn' , 'Java'),
  new Article(2, 'Angular: OO', 'Angular'),  
    new Article(3, 'React: ES6', 'React'),
    new Article(4, 'jQuery: JS', 'jQuery')
];
let articlesObservable = of(ARTICLES);

@Injectable()
export class ArticleService { 
    getArticles(): Observable<Article[]> {
        return articlesObservable;
    }
    getArticle(id: number): Observable<Article> {
        return this.getArticles()
            .pipe(map(articles => articles.find(article => article.articleId === id)));
    }   
    updateArticle(article: Article): Observable<Article> {
        return this.getArticles()
          .pipe(map((articles: any) => {
                let articleObj = articles.find(ob => ob.articleId === article.articleId);
                articleObj = article;
                return articleObj;
            }
          ));
    }   
}