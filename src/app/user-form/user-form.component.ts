import { Component } from '@angular/core';
import { UserService } from '../user-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  name: string = "";
  emailAddress: string = "";

  onSubmit() {
    if (this.name && this.emailAddress) {
      this.userService.onAddUser(this.name, this.emailAddress);
      this.router.navigate(['/']);
    } else {
      
    }
  }

  constructor(private userService: UserService, private router: Router) { }

}
