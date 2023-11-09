import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private unsplashApiUrl = 'https://api.unsplash.com/photos/random';
  private apiKey = 'qP3BMjL6iZQeSn6KoNJj_3vN6QYe17-NBycYzJ1R6To';

  constructor(private http: HttpClient) { }

  getRandomImage(): Observable<any> {
    const headers = { Authorization: `Client-ID ${this.apiKey}` };

    return this.http.get(this.unsplashApiUrl, { headers });
  }
}
