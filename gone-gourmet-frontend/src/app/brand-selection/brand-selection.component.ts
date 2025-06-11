import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgFor } from '@angular/common';

  @Component({
    selector: 'app-brand-selection',
    templateUrl: './brand-selection.component.html',
    styleUrls: ['./brand-selection.component.css'],
    standalone: true,
    imports: [NgFor]
  })
  export class BrandSelectionComponent implements OnInit {
    brands: string[] = [];
    selectedBrand: string = '';

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
      this.apiService.getBrands().subscribe(data => {
        this.brands = data;
      });
    }

    onBrandChange(brand: string): void {
      this.selectedBrand = brand;
    }

}
