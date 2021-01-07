import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { ArticleListComponent } from "./article-list/article-list.component";

const routes: Routes = [
  {
    path: "article",
    component: ArticleListComponent,
  },
  {
    path: "article/:slug",
    component: ArticleDetailComponent,
  },
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
