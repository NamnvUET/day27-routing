import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Article } from "../model/article";
import { UserService } from "../user.service";
import { ArticleService } from "./article.service";

@Injectable({
  providedIn: 'root'
})
export class CanEditArticleGuard implements CanActivate{
  constructor(private articleService: ArticleService, private userService: UserService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    //Code logic

    return this.articleService.getArticleBySlug(next.paramMap.get('slug')).pipe(
      map(article => article.author === this.userService.currentUser.username)
      );
  }

}
