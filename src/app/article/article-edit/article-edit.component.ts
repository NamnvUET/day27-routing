import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  slug$ = this._activatedRoute.paramMap.pipe(
    map(params => params.get('slug'))
  );

  isEditing: boolean = false;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
