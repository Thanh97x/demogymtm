import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssHitthoComponent } from './fitness-newss-hittho.component';

describe('FitnessNewssHitthoComponent', () => {
  let component: FitnessNewssHitthoComponent;
  let fixture: ComponentFixture<FitnessNewssHitthoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssHitthoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssHitthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
