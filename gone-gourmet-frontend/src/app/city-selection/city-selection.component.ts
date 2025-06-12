import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-selection',
  imports: [CommonModule],
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.css'],
  standalone: true
})
export class CitySelectionComponent implements OnInit {
  @Input() selectedBrand: string = '';
  cities: string[] = [];
  @Output() selectedCity = new EventEmitter<string>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCities(this.selectedBrand).subscribe(data => {
      this.cities = data;
    });
  }

  onCityChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedCity.emit(value);
  }
  
}
