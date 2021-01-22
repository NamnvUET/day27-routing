import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';


@NgModule({
  declarations: [AuthorListComponent, AuthorDetailComponent],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule,
  ]
})
export class ComponentInteractionModule { }
