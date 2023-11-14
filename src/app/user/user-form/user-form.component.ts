import { AfterViewInit, Component } from '@angular/core';
import { UserService } from '../../../service/User/user-service.service';

import { gsap } from 'gsap/gsap-core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements AfterViewInit {


  name: string = "";
  emailAddress: string = "";
  picture: string = "";
  age: number = 0;
  street: string = "";
  city: string = "";
  zip: string = "";


  ngAfterViewInit(): void {
    const form = document.getElementById('form-content');
    gsap.to(form, {
      y: 0,
      opacity: 1,
      duration: 1.25,
      ease: "power2.inOut",
    })
  }

  onSubmit() {


    if (this.name && this.emailAddress && this.age && this.street && this.city && this.zip) {
      this.userService.addUser(this.name, this.emailAddress, this.age, this.street, this.city, this.zip).subscribe(
        (user) => {
          console.log('Benutzer wurde erfolgreich hinzugefügt:', user);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Fehler beim Hinzufügen des Benutzers:', error);
          // Hier können Sie geeignete Fehlerbehandlung durchführen, z. B. eine Fehlermeldung anzeigen.
        }
      );
    } else {
      // Hier können Sie eine Fehlerbehandlung für ungültige Eingaben durchführen.
      console.log("Something went wrong");
    }
  }


  constructor(private userService: UserService, private router: Router) { }

}
