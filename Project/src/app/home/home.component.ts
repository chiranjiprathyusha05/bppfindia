import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  onViewDetails() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }
}
