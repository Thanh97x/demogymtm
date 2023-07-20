import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssCobanchonuComponent } from './fitness-newss-cobanchonu.component';

describe('FitnessNewssCobanchonuComponent', () => {
  let component: FitnessNewssCobanchonuComponent;
  let fixture: ComponentFixture<FitnessNewssCobanchonuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssCobanchonuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssCobanchonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
