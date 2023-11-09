import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngAfterViewInit(): void {
    const homeText = document.getElementById('home-text');

    gsap.to(homeText, {
      y: 0, // Endposition (0 bedeutet, dass der Text auf seine ursprüngliche Position hochkommt)
      opacity: 1, // Endopazität (wird auf 1 gesetzt, um den Text sichtbar zu machen)
      duration: 1, // Dauer der Animation (1 Sekunde)
      ease: 'power1.inOut' // Easing-Funktion (optional)
    });
  }
}
