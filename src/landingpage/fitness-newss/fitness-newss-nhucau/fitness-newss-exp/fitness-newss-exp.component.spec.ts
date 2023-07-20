import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssExpComponent } from './fitness-newss-exp.component';

describe('FitnessNewssExpComponent', () => {
  let component: FitnessNewssExpComponent;
  let fixture: ComponentFixture<FitnessNewssExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
