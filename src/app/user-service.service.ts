import { Injectable, OnInit } from '@angular/core';
import userData from "../data/benutzer.json";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any;

  constructor() {
    this.users = userData;
  };

  getUsers() {
    return userData;
  }

  onAddUser(name: string, email: string) {
    const newUser = { name, email };
    this.users.push(newUser);
  }

  onDeleteUser(email: string) {
    this.users = this.users.filter((singleUser: any) => {
      return singleUser.email !== email
    })
  }
}
