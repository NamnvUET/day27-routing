import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day27-routing';
  constructor(public userService: UserService){}

  toggleRole(){
    this.userService.currentUser.isAdmin = !this.userService.currentUser.isAdmin;
  }
}
