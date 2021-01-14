import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CheckDeactivate } from "../check-deactivate";
import { ArticleEditComponent } from "./article-edit/article-edit.component";

@Injectable({
  providedIn: 'root'
})

export class CanLeaveEditArticleGuard implements CanDeactivate<CheckDeactivate>{
  constructor(){}

  canDeactivate(component: CheckDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    //Logic code
    return component.checkDeactivate(currentRoute, currentState, nextState);
  };
}
