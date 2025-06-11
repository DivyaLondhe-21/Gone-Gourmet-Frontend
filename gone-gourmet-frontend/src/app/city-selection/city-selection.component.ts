import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.css'],
  standalone: true
})
export class CitySelectionComponent implements OnInit {
  @Input() selectedBrand: string = '';
  cities: string[] = [];
  selectedCity: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCities(this.selectedBrand).subscribe(data => {
      this.cities = data;
    });
  }

  onCityChange(city: string): void {
    this.selectedCity = city;
  }
}
