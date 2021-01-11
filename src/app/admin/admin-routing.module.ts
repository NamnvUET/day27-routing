import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminArticleListComponent } from "./admin-article-list/admin-article-list.component";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminArticleListComponent,
      }
    ]
  }
];

@NgModule({
  imports:  [
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule],
})

export class AdminRoutingModule{}
