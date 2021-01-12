import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { ArticleEditComponent } from "./article-edit/article-edit.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleComponent } from "./article.component";

const routes: Routes = [
  {
    path: 'article',
    component: ArticleComponent,
    children: [
      {
        path: '',
        component: ArticleListComponent,
      },
      {
        path: ':slug',
        component: ArticleDetailComponent,
      },
      {
        path: ':slug/edit',
        component: ArticleEditComponent,
      }
    ]
  }
];

@NgModule({
  imports:  [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule],
})

export class ArticleRoutingModule{}
