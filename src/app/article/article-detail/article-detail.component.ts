import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../../model/article';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article$: Observable<Article>;

  constructor(private _route: ActivatedRoute, private _api: ArticleService) { }

  //Cách dùng snapshot để retrieve params trên ActivatedRoute
  // ngOnInit(): void {
  //   let slug = this._route.snapshot.paramMap.get("slug");
  //   this.article$ = this._api.getArticleBySlug(slug);
  // }

  //Cách dùng observable để retrieve params
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.article$ = this._route.paramMap.pipe(
      map(params => params.get('slug')),
      switchMap(slug => this._api.getArticleBySlug(slug))
    );
  }

}
