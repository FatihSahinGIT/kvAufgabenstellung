import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interface/User';
import { UserService } from 'src/service/User/user-service.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  userId!: number;
  user!: User;
  userOrders!: any[];

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = parseInt(params["id"]);

      this.loadUserData();
    })
  }

  loadUserData() {
    this.userService.getUserById(this.userId).subscribe(user => {
      console.log(user);
      if (user) {
        this.user = user;
        console.log(this.user);
        this.userOrders = user.orders;
      } else {
        // Handhabung, wenn der Benutzer nicht gefunden wurde, z.B. eine Meldung anzeigen
        console.log("No User");
      }
    });
  }
}
