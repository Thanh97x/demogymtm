import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFitnessPackgeComponent } from './property-fitness-packge.component';

describe('PropertyFitnessPackgeComponent', () => {
  let component: PropertyFitnessPackgeComponent;
  let fixture: ComponentFixture<PropertyFitnessPackgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyFitnessPackgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyFitnessPackgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
