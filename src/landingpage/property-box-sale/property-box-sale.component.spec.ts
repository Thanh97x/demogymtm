import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBoxSaleComponent } from './property-box-sale.component';

describe('PropertyBoxSaleComponent', () => {
  let component: PropertyBoxSaleComponent;
  let fixture: ComponentFixture<PropertyBoxSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBoxSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBoxSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
