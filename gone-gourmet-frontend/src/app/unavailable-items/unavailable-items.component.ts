import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-unavailable-items',
  templateUrl: './unavailable-items.component.html',
  styleUrls: ['./unavailable-items.component.css'],
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

  onSearch(query: string): void {
    this.searchQuery = query;
  }

  get filteredItems(): any[] {
    return this.unavailableItems.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
