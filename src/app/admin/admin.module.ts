import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminArticleListComponent } from "./admin-article-list/admin-article-list.component";

@NgModule({
  declarations: [
    AdminComponent,
    AdminArticleListComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  exports: [],
  providers: [],
})

export class AdminModule{}
