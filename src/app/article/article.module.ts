import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'article',
    component: ArticleListComponent,
  },
  {
    path: 'article/:slug',
    component: ArticleDetailComponent,
  }

];

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class ArticleModule {}
