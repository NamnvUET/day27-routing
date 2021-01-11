import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => import("../app/admin/admin.module").then(m => m.AdminModule),
  },
  {
    path: "",
    redirectTo: 'article',
    pathMatch: "full",
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
