import { Component } from '@angular/core';
import { CardComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: '../../templates/pages/home.component.html'
})
export class HomeComponent {
  onGetStarted(): void {
    console.log('Get Started clicked!');
    // Add your navigation logic here
  }
}