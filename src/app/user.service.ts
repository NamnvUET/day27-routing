import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = {
    username: 'NamNV',
    isAdmin: true,
  };
  constructor() { }

}
