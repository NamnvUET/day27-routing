import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleComponent,
    ArticleEditComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
  ],
  exports: [],
  providers: [],
})
export class ArticleModule {}
