import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, switchMap, throwError } from 'rxjs';

import { User } from '../../app/user/interface/User';

import { ImageService } from '../Image/image.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient, private imageService: ImageService) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: number): Observable<User | null> {
    return this.http.get<User[]>(this.url).pipe(
      map((users: User[]) => {

        const singleUser = users.find((foundUser) => foundUser.id === id);
        return singleUser || null;
      })
    )
  }

  addUser(name: string, email: string, age: number, street: string, city: string, zip: string): Observable<User> {
    return this.imageService.getRandomImage().pipe(
      switchMap((imageData: any) => {
        const picture = imageData.urls.regular;

        const newUser: User = {
          id: Date.now(),
          name,
          email,
          age,
          picture,
          address: {
            street,
            city,
            zip,
          },
          orders: [],
        };

        return this.http.post<User>(this.url, newUser, {
          headers: {
            "Content-Type": "application/json",
          }
        });
      })
    );
  }



  deleteUserByEmail(email: string): Observable<any> {
    // Zuerst den Benutzer anhand der E-Mail-Adresse finden
    return this.getUserByEmail(email).pipe(
      switchMap((user: User | null) => {
        if (user) {
          // Wenn der Benutzer gefunden wurde, die ID für die DELETE-Anfrage extrahieren
          const deleteProfile = `${this.url}/${user.id}`;
          // Den Benutzer anhand der ID löschen
          return this.http.delete(deleteProfile);
        } else {
          // Wenn der Benutzer nicht gefunden wurde, eine Fehlermeldung zurückgeben
          return throwError('Benutzer nicht gefunden.');
        }
      })
    );
  }

  private getUserByEmail(email: string): Observable<User | null> {
    return this.http.get<User[]>(this.url).pipe(
      map((users: User[]) => {
        const user = users.find((u) => u.email === email);
        return user || null; // Rückgabe des gefundenen Benutzers oder null, wenn kein Benutzer mit der E-Mail-Adresse gefunden wurde
      })
    );
  }
}
