import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssWhyGymComponent } from './fitness-newss-why-gym.component';

describe('FitnessNewssWhyGymComponent', () => {
  let component: FitnessNewssWhyGymComponent;
  let fixture: ComponentFixture<FitnessNewssWhyGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssWhyGymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssWhyGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
