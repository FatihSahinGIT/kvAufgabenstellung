import { Component } from '@angular/core';

import { UserService } from '../user-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: any;

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onDeleteUser(email: string) {
    this.userService.onDeleteUser(email);
    this.users = this.userService.getUsers();
  }

  constructor(private userService: UserService) { }




}
