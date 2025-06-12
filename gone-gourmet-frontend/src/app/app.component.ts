import { Component } from '@angular/core';
import { BrandSelectionComponent } from './brand-selection/brand-selection.component';
import { UnavailableItemsComponent } from './unavailable-items/unavailable-items.component';
import { CitySelectionComponent } from './city-selection/city-selection.component';

@Component({
  selector: 'app-root',
  imports: [BrandSelectionComponent, UnavailableItemsComponent, CitySelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'gone-gourmet-frontend';
  selectedBrand: string = '';
  selectedCity: string = '';
}
