import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-unavailable-items',
  templateUrl: './unavailable-items.component.html',
  styleUrls: ['./unavailable-items.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class UnavailableItemsComponent implements OnInit {
  @Input() selectedBrand: string = '';
  @Input() selectedCity: string = '';
  unavailableItems: any[] = [];
  searchQuery: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const request = {
      restaurantBrand: this.selectedBrand,
      locations: [this.selectedCity]
    };

    this.apiService.getUnavailableItems(request).subscribe(data => {
      this.unavailableItems = data.unavailableItems;
    });
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input?.value || '';
    // Use the value as needed
    console.log('Search:', value);
    // Your logic to filter items
  }

  get filteredItems(): any[] {
    return this.unavailableItems.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
