import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessNewssKientriComponent } from './fitness-newss-kientri.component';

describe('FitnessNewssKientriComponent', () => {
  let component: FitnessNewssKientriComponent;
  let fixture: ComponentFixture<FitnessNewssKientriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessNewssKientriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessNewssKientriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
