import { Component, AfterViewInit } from '@angular/core';
import { UserService } from '../../service/User/user-service.service';
import { User } from './interface/User';

import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit {
  users: User[] = []; // Initialisieren Sie das Array
  filterUsername = new FormControl(''); // FormControl für die Benutzereingabe

  constructor(private userService: UserService, private router: Router) { }

  ngAfterViewInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  onDeleteUser(email: string) {
    this.userService.deleteUserByEmail(email).subscribe((user: User | null) => {
      if (user) {
        // Benutzer wurde gefunden
        console.log('Gefundener Benutzer:', user);
        // Führen Sie hier weitere Aktionen aus
      } else {
        // Benutzer wurde nicht gefunden
        console.log('Benutzer nicht gefunden.');
        // Führen Sie hier geeignete Fehlerbehandlung durch
      }
    });

    // Reload Users
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  // Redirect User
  onUserDetailClick(userId: number) {
    this.router.navigate(['/user/', userId]);
  }
}
