import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { ArticleEditComponent } from "./article-edit/article-edit.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleComponent } from "./article.component";
import { CanEditArticleGuard } from "./can-edit-article.guard";
import { CanLeaveEditArticleGuard } from "./can-leave-edit-article.guard";

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
        canActivate: [CanEditArticleGuard],    //<== Co the check multiple guards
        canDeactivate: [CanLeaveEditArticleGuard],
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
