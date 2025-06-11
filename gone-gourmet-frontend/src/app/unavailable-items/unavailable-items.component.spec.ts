import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavailableItemsComponent } from './unavailable-items.component';

describe('UnavailableItemsComponent', () => {
  let component: UnavailableItemsComponent;
  let fixture: ComponentFixture<UnavailableItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnavailableItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnavailableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
