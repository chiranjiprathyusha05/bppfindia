import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navOpen = false;
  isMobile = window.innerWidth < 768;

  constructor() { }

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}