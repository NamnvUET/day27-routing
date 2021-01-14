import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ArticleEditComponent } from "./article-edit/article-edit.component";

@Injectable({
  providedIn: 'root'
})

export class CanLeaveEditArticleGuard implements CanDeactivate<ArticleEditComponent>{
  constructor(){}

  canDeactivate(component: ArticleEditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    //Logic code
    return component.isEditing;
  };
}
