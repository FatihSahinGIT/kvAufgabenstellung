import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const navTitle = document.getElementById('nav-title');
    const navItems = document.getElementById('nav-items');

    gsap.fromTo(navTitle, {
      y: -10,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.75,
      ease: 'power2.inOut'
    });

    gsap.fromTo(navItems, {
      y: -10,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.75,
      ease: 'power2.inOut'
    });
  }
}
