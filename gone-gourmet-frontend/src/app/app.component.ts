import { Component } from '@angular/core';
import { BrandSelectionComponent } from './brand-selection/brand-selection.component';

@Component({
  selector: 'app-root',
  imports: [BrandSelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'gone-gourmet-frontend';
}
