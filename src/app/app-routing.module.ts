import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreloadAllModules} from '@angular/router';
import { CanLoadAdminGuard } from './can-load-admin.guard';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => import("../app/admin/admin.module").then(m => m.AdminModule),
    canLoad: [CanLoadAdminGuard],
  },
  {
    path: "",
    redirectTo: 'article',
    pathMatch: "full",
  },
  {
    path: "component-interaction",
    loadChildren: () => import("../app/component-interaction/component-interaction.module").then(m => m.ComponentInteractionModule),
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
