import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBoxGymComponent } from './property-box-gym.component';

describe('PropertyBoxGymComponent', () => {
  let component: PropertyBoxGymComponent;
  let fixture: ComponentFixture<PropertyBoxGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBoxGymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBoxGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
