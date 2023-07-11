import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGymAddressComponent } from './property-gym-address.component';

describe('PropertyGymAddressComponent', () => {
  let component: PropertyGymAddressComponent;
  let fixture: ComponentFixture<PropertyGymAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyGymAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyGymAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
