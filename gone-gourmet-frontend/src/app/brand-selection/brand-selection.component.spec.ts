import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSelectionComponent } from './brand-selection.component';

describe('BrandSelectionComponent', () => {
  let component: BrandSelectionComponent;
  let fixture: ComponentFixture<BrandSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
