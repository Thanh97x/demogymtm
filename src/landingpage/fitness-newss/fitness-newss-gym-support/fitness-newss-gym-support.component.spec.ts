import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssGymSupportComponent } from './fitness-newss-gym-support.component';

describe('FitnessNewssGymSupportComponent', () => {
  let component: FitnessNewssGymSupportComponent;
  let fixture: ComponentFixture<FitnessNewssGymSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssGymSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssGymSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
